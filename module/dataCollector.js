class dataCollector {
	constructor (){
		if (localStorage.getItem('id_from_cwav') == null) {
			localStorage.setItem('id_from_cwav', Math.random())
		}
		this.id = localStorage.getItem('id_from_cwav')
	}

	async sendError(err){
		$.get(`http://192.168.1.234/cwav/data/?request=sendError&id=${this.id}&date=${new Date()}&err=${err}`, function(data, status){//redfox.host
			if (data.status == 'good') {
				alert('We already know about your error, report number #' + this.id)
			}
		}).fail(function() {
			alert('With our problem servers, contact support for help.')
			alert(err)
		})
	}

	async sendProperties(properties){
		let keys = Object.keys(properties)
		let tempJSON = {}
		for (let i = 0; i < keys.length; i++) {
			let temp = properties[keys[i]].value
			if (temp == null) {
				continue
			}
			if (typeof temp == 'string') {
				temp = temp.replace(/&/g, '.7.')
				temp = temp.replace(/#/g, '.3.')
			}
			tempJSON[keys[i]] = temp
		}
		$.get(`http://192.168.1.234/cwav/data/?request=sendProperties&id=${this.id}&date=${new Date()}&properties=${JSON.stringify(tempJSON)}`).fail(function() {})
	}
}
