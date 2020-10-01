/**
 * Spotify class
 * Created by FLomka on 2018/9/07.
 **/

class Spotify {

	/**
	 *	@param {string} id Id for querySelector
	 */
	constructor(id){
		this.spotify = document.querySelector(id)
		this.load = [0,6]
		this.initial()
	}

	/**
	 *	@param {string} api Api-key
	 */
	setToken(token) {
		this.refreshToken = token
		this.load[0] += 1
	}

	/**
	 *	@param {string} align Align
	 */
	setAlign(align, body) {
		try {
			this.group[body].Align = align == 'left' ? 50 : align == 'right' ? -50 : 0
			this.getStyle(body).textAlign = align
			this.setX(body)
			// alert(this.getStyle().textAlign)
		} catch(e) { alert(e) }
	}

	setX(body, x) {
		try {
			this.group[body].x = x === undefined ? this.group[body].x : x
			if (body == 'img' || body == 'duration_line')
				this.getStyle(body).left = this.group[body].x + '%'
			else
				this.getStyle(body).left = this.group[body].x-50+this.group[body].Align+'%'
		} catch(e) { alert(e) }
	}

	setY(body, y) {
		try {
			this.group[body].y = y
			this.getStyle(body).top = this.group[body].y+'%'
		} catch(e) { alert(e) }
	}

	setImgSize(size){
		this.imgSize = size
		switch (size) {
			case 0:
				this.getStyle('img').width = 640 + 'px'
				this.getStyle('img').height = 640 + 'px'
				break;
			case 1:
				this.getStyle('img').width = 300 + 'px'
				this.getStyle('img').height = 300 + 'px'
				break;
			case 2:
				this.getStyle('img').width = 64 + 'px'
				this.getStyle('img').height = 64 + 'px'
				break;
		}
	}

	/**
	 *	
	 */
	startTimer() {
		try {
			this.timer = setInterval(this.getTrack.bind(this), 350)
		} catch (e){
			alert(e)
		}
	}

	/**
	 *	
	 */
	stopTimer() {
		try{
			clearInterval(this.timer)
			clearTimeout(this.timer2)
		} catch (e){
			alert(e)
		}
	}

	/**
	 *	@return {boolean} Status loaded module weather
	 */
	loaded() {
		if (this.load[0] >= this.load[1]) return true
		else return false
	}
	/**
	 *	@param {boolean} bool Load
	 */
	loadEx(bool) {
		if (bool) this.load[0] += this.load[1]
	}

	reloadTimer() {
		try{
			this.stopTimer()
		} catch (e){
			alert(e)
		}
		this.startTimer()
	}

	reloadTimerAfter(sec) {
		try{
			this.stopTimer()
		} catch (e){
			alert(e)
		}
		console.log(sec*1000);
		this.timer2 = setTimeout(this.startTimer.bind(this), sec*1000)
	}

	/**
	 *	@param {string} variable Name var
	 *	@param {any} value Value var
	 *	@return {any} Value var
	 */
	setVar(variable, value) {
		try{
			this[variable] = value
			return value
		} catch (e){
			alert(e)
		}
	}

	/**
	 *	@param {string} variable Name var
	 *	@return {any} Value var
	 */
	getVar(variable) {
		try{
			if (this[variable] != null) 
				return this[variable]
			else 
				return null
		} catch (e){
			alert(e)
		}
	}

	/**
	 *	@return {CSSStyleDeclaration}
	 */
	getStyle(body) {
		if (body == null)
			return this.spotify.style
		else
			return this.group[body].style
	}

	initial() {
		this.trackInfo = {}
		this.accessToken = null
		this.accentColor = [0, 0, 0]
		this.accentRGBColor = () => { return `rgb(${this.accentColor[0]},${this.accentColor[1]},${this.accentColor[2]})` }
		this.primalColor = '#000'
		this.group = {}
		this.group.label = document.createElement('div')
		this.group.label.className = 'module'
		this.group.artist = document.createElement('div')
		this.group.artist.className = 'module'
		this.group.progress = document.createElement('div')
		this.group.progress.className = 'module'
		this.group.duration = document.createElement('div')
		this.group.duration.className = 'module'
		this.group.duration_line = document.createElement('div')
		this.group.duration_line.className = 'module lineSpotify'
		this.group.duration_progress = document.createElement('div')
		this.group.duration_progress.className = 'progressSpotify'
		this.group.duration_line.append(this.group.duration_progress)
		this.group.img = document.createElement('div')
		this.group.img.className = 'module img'
		this.spotify.append(this.group.label)
		this.spotify.append(this.group.artist)
		this.spotify.append(this.group.progress)
		this.spotify.append(this.group.duration)
		this.spotify.append(this.group.duration_line)
		this.spotify.append(this.group.img)


		this.load[0] += 1
	}

	getColor(is_playing){
		let img = new Image()
		img.crossOrigin = 'anonymous'
		img.src = this.trackInfo.item.album.images[0].url
		img.onload = () => {
			let vibrant = new Vibrant(img)
			let swatches = vibrant.swatches()
			if (is_playing) {
				this.darkedColor = swatches.DarkMuted != null ? swatches.DarkMuted.getHex() : '#fff5'
				this.darkColor = swatches.DarkVibrant != null ? swatches.DarkVibrant.getHex() : '#fff5'
				this.primalColor = swatches.Vibrant != null ? swatches.Vibrant.getHex() : '#fff5'
				this.lightColor = swatches.LightVibrant != null ? swatches.LightVibrant.getHex() : '#fff5'
				spotifyColor = {
					'primal' : this.primalColor,
					'light' : this.lightColor,
					'dark' : this.darkColor,
					'darkness' : this.darkedColor
				}
			} else {
				spotifyColor = {
					'primal' : -1,
					'light' : -1,
					'dark' : -1,
					'darkness' : -1
				}
			}
		}
	}

	getTrack() {
		try {
			$.ajax({
				url: 'https://api.spotify.com/v1/me/player/currently-playing',
				type: 'GET',
				headers: {
					'Authorization' : 'Bearer ' + this.accessToken
				},
				success: function(data) {
					this.trackInfo = data
					this.getColor(data.is_playing)
					this.getStyle().opacity = data.is_playing ? 1 : 0

					/* image */
					this.group.img.style.backgroundImage = 'url(' + data.item.album.images[this.imgSize].url + ')'
					this.group.img.style.filter = data.item.explicit && this.protect ? 'blur(' + (this.imgSize - 3) * -4 + 'px)' : ''
					this.group.img.style.boxShadow = this.blur ? '0 0 10px ' + this.primalColor : 'none'

					/* label */
					this.group.label.innerHTML = data.item.name
					this.getStyle('label').color = colorPick(this.label_color_type, this.label_color)
					this.getStyle('label').textShadow = '0 0 10px ' + colorPick(this.label_color_blur_type, this.label_color_blur)

					/* artist */
					this.group.artist.innerHTML = this.getArtist(data.item.artists)
					this.getStyle('artist').color = colorPick(this.artist_color_type, this.artist_color)
					this.getStyle('artist').textShadow = '0 0 10px ' + colorPick(this.artist_color_blur_type, this.artist_color_blur)

					/* progress */
					this.group.progress.innerHTML = this.ms2s(data.progress_ms)
					this.getStyle('progress').color = colorPick(this.progress_color_type, this.progress_color)
					this.getStyle('progress').textShadow = '0 0 10px ' + colorPick(this.progress_color_blur_type, this.progress_color_blur)

					/* duration */
					this.group.duration.innerHTML = this.ms2s(data.item.duration_ms)
					this.getStyle('duration').color = colorPick(this.duration_color_type, this.duration_color)
					this.getStyle('duration').textShadow = '0 0 10px ' + colorPick(this.duration_color_blur_type, this.duration_color_blur)

					/* duration_line */
					this.group.duration_progress.style.width = data.progress_ms/data.item.duration_ms * 100 + '%'
					this.getStyle('duration_progress').background = colorPick(this.duration_progress_color_type, this.duration_progress_color)
					this.getStyle('duration_line').background = colorPick(this.duration_line_color_type, this.duration_line_color)
					this.getStyle('duration_line').boxShadow = '0 0 10px ' + colorPick(this.duration_line_color_blur_type, this.duration_line_color_blur)

				}.bind(this),
				error: function(error) {
					if (error.status == 429) {
						this.reloadTimerAfter(+error.getResponseHeader('Retry-After'))
					}
					if (error.status == 401) {
						$.ajax({
							url: 'https://accounts.spotify.com/api/token',
							type: 'POST',
							headers: {
								'Authorization' : 'Basic MGIwZTZhZDUxMTQxNGUwNTgzNzU5MzJlNDc1NWFjYzM6N2QwMDk1YzA0ZjcxNDk5ZGJjZmE0Njc4MmVhNTE4NTU='
							},
							data: {
								'grant_type' : 'refresh_token',
								'refresh_token' : this.refreshToken
							},
							success: function(data) {
								this.accessToken = data.access_token
							}.bind(this),
							error: function(err) {
								console.log(err)
							}.bind(this),
						})
					}
				}.bind(this)
			})
		} catch (e) {
			alert(e)
		}
	}

	getArtist(artists){
		let text = ''
		for (let artist of artists) {
			text += artist.name + ', '
		}
		return text.slice(0, -2)
	}

	ms2s(ms){
		ms = Math.floor(ms/1000) * 1000
		var minutes = Math.floor(ms / 60000)
		var seconds = ((ms % 60000) / 1000).toFixed(0)
		return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
	}
}