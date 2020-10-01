/**
 * Created by FLomka on 2018/12/23.
 *
 * User settings for .
 **/
var spotify = new Spotify('#spotify')

var spotify_settings = function(settings) {
	/* Settings */
	if(settings.spotifyEnable) {
		spotify.getStyle().display = settings.spotifyEnable.value ? 'block' : 'none'
		if (settings.spotifyEnable.value)spotify.startTimer()
		else {
			spotify.stopTimer()
			spotifyColor = {
				'primal' : -1,
				'light' : -1,
				'dark' : -1,
				'darkness' : -1
			}
		}
	}
	if(settings.spotifyToken) {
		spotify.setToken(settings.spotifyToken.value)
	}

	/* Image setting */
	if(settings.spotifyImg) {
		spotify.getStyle('img').display = settings.spotifyImg.value ? 'block' : 'none'
	}
	if(settings.spotifyImgSize) {
		spotify.setImgSize(settings.spotifyImgSize.value)
	}
	if(settings.spotifyImgX) {
		spotify.setX('img', settings.spotifyImgX.value)
	}
	if(settings.spotifyImgY) {
		spotify.setY('img', settings.spotifyImgY.value)
	}
	if(settings.spotifyImgBlur) {
		spotify.blur = settings.spotifyImgBlur.value
	}
	if(settings.spotifyImgProtect) {
		spotify.protect = settings.spotifyImgProtect.value
	}
	if(settings.spotifyImgTransparency) {
		spotify.getStyle('img').opacity = settings.spotifyImgTransparency.value/100
	}

	/* Label setting */
	if(settings.spotifyLabel) {
		spotify.getStyle('label').display = settings.spotifyLabel.value ? 'block' : 'none'
	}
	if (settings.spotifyLabelFont) {
		SetFont(settings.spotifyLabelFont.value)
		spotify.getStyle('label').fontFamily = settings.spotifyLabelFont.value.replace(/:/g, ' ')
	}
	if (settings.spotifyLabelFontDir) {
		if (settings.spotifyLabelFontDir.value) {
			spotify.getStyle('label').fontFamily = "'Custom-sl', sans-serif"
			SetFontCustom(settings.spotifyLabelFontDir.value, 'Custom-sl')
		}
	}
	if(settings.spotifyLabelX) {
		spotify.setX('label', settings.spotifyLabelX.value)
	}
	if(settings.spotifyLabelY) {
		spotify.setY('label', settings.spotifyLabelY.value)
	}
	if(settings.spotifyLabelAlignment) {
		spotify.setAlign(settings.spotifyLabelAlignment.value, 'label')
	}
	if(settings.spotifyLabelSize) {
		spotify.getStyle('label').fontSize = Math.floor(window.height/600*settings.spotifyLabelSize.value) + 'px';
	}
	if(settings.spotifyLabelTransparency) {
		spotify.getStyle('label').opacity = settings.spotifyLabelTransparency.value/100
	}
	if(settings.spotifyLabelColor){
		spotify.setVar('label_color','rgb('+settings.spotifyLabelColor.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyLabelColorBlur){
		spotify.setVar('label_color_blur','rgb('+settings.spotifyLabelColorBlur.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyLabelColorType){
		spotify.setVar('label_color_type', settings.spotifyLabelColorType.value)
	}
	if(settings.spotifyLabelColorBlurType){
		spotify.setVar('label_color_blur_type', settings.spotifyLabelColorBlurType.value)
	}

	/* Artist setting */
	if(settings.spotifyArtist) {
		spotify.getStyle('artist').display = settings.spotifyArtist.value ? 'block' : 'none'
	}
	if (settings.spotifyArtistFont) {
		SetFont(settings.spotifyArtistFont.value)
		spotify.getStyle('artist').fontFamily = settings.spotifyArtistFont.value.replace(/:/g, ' ')
	}
	if (settings.spotifyArtistFontDir) {
		if (settings.spotifyArtistFontDir.value) {
			spotify.getStyle('artist').fontFamily = "'Custom-sa', sans-serif"
			SetFontCustom(settings.spotifyArtistFontDir.value, 'Custom-sa')
		}
	}
	if(settings.spotifyArtistX) {
		spotify.setX('artist', settings.spotifyArtistX.value)
	}
	if(settings.spotifyArtistY) {
		spotify.setY('artist', settings.spotifyArtistY.value)
	}
	if(settings.spotifyArtistAlignment) {
		spotify.setAlign(settings.spotifyArtistAlignment.value, 'artist')
	}
	if(settings.spotifyArtistSize) {
		spotify.getStyle('artist').fontSize = Math.floor(window.height/600*settings.spotifyArtistSize.value) + 'px';
	}
	if(settings.spotifyArtistTransparency) {
		spotify.getStyle('artist').opacity = settings.spotifyArtistTransparency.value/100
	}
	if(settings.spotifyArtistColor){
		spotify.setVar('artist_color','rgb('+settings.spotifyArtistColor.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyArtistColorBlur){
		spotify.setVar('artist_color_blur','rgb('+settings.spotifyArtistColorBlur.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyArtistColorType){
		spotify.setVar('artist_color_type', settings.spotifyArtistColorType.value)
	}
	if(settings.spotifyArtistColorBlurType){
		spotify.setVar('artist_color_blur_type', settings.spotifyArtistColorBlurType.value)
	}

	/* Progress setting */
	if(settings.spotifyProgress) {
		spotify.getStyle('progress').display = settings.spotifyProgress.value ? 'block' : 'none'
	}
	if (settings.spotifyProgressFont) {
		SetFont(settings.spotifyProgressFont.value)
		spotify.getStyle('progress').fontFamily = settings.spotifyProgressFont.value.replace(/:/g, ' ')
	}
	if (settings.spotifyProgressFontDir) {
		if (settings.spotifyProgressFontDir.value) {
			spotify.getStyle('progress').fontFamily = "'Custom-sp', sans-serif"
			SetFontCustom(settings.spotifyProgressFontDir.value, 'Custom-sp')
		}
	}
	if(settings.spotifyProgressX) {
		spotify.setX('progress', settings.spotifyProgressX.value)
	}
	if(settings.spotifyProgressY) {
		spotify.setY('progress', settings.spotifyProgressY.value)
	}
	if(settings.spotifyProgressAlignment) {
		spotify.setAlign(settings.spotifyProgressAlignment.value, 'progress')
	}
	if(settings.spotifyProgressSize) {
		spotify.getStyle('progress').fontSize = Math.floor(window.height/600*settings.spotifyProgressSize.value) + 'px';
	}
	if(settings.spotifyProgressTransparency) {
		spotify.getStyle('progress').opacity = settings.spotifyProgressTransparency.value/100
	}
	if(settings.spotifyProgressColor){
		spotify.setVar('progress_color','rgb('+settings.spotifyProgressColor.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyProgressColorBlur){
		spotify.setVar('progress_color_blur','rgb('+settings.spotifyProgressColorBlur.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyProgressColorType){
		spotify.setVar('progress_color_type', settings.spotifyProgressColorType.value)
	}
	if(settings.spotifyProgressColorBlurType){
		spotify.setVar('progress_color_blur_type', settings.spotifyProgressColorBlurType.value)
	}

	/* Duration setting */
	if(settings.spotifyDuration) {
		spotify.getStyle('duration').display = settings.spotifyDuration.value ? 'block' : 'none'
	}
	if (settings.spotifyDurationFont) {
		SetFont(settings.spotifyDurationFont.value)
		spotify.getStyle('duration').fontFamily = settings.spotifyDurationFont.value.replace(/:/g, ' ')
	}
	if (settings.spotifyDurationFontDir) {
		if (settings.spotifyDurationFontDir.value) {
			spotify.getStyle('duration').fontFamily = "'Custom-sd', sans-serif"
			SetFontCustom(settings.spotifyDurationFontDir.value, 'Custom-sd')
		}
	}
	if(settings.spotifyDurationX) {
		spotify.setX('duration', settings.spotifyDurationX.value)
	}
	if(settings.spotifyDurationY) {
		spotify.setY('duration', settings.spotifyDurationY.value)
	}
	if(settings.spotifyDurationAlignment) {
		spotify.setAlign(settings.spotifyDurationAlignment.value, 'duration')
	}
	if(settings.spotifyDurationSize) {
		spotify.getStyle('duration').fontSize = Math.floor(window.height/600*settings.spotifyDurationSize.value) + 'px';
	}
	if(settings.spotifyDurationTransparency) {
		spotify.getStyle('duration').opacity = settings.spotifyDurationTransparency.value/100
	}
	if(settings.spotifyDurationColor){
		spotify.setVar('duration_color','rgb('+settings.spotifyDurationColor.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyDurationColorBlur){
		spotify.setVar('duration_color_blur','rgb('+settings.spotifyDurationColorBlur.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyDurationColorType){
		spotify.setVar('duration_color_type', settings.spotifyDurationColorType.value)
	}
	if(settings.spotifyDurationColorBlurType){
		spotify.setVar('duration_color_blur_type', settings.spotifyDurationColorBlurType.value)
	}

	/* Line setting */
	if(settings.spotifyLine) {
		spotify.getStyle('duration_line').display = settings.spotifyLine.value ? 'block' : 'none'
	}
	if(settings.spotifyLineWidth) {
		spotify.getStyle('duration_line').width = settings.spotifyLineWidth.value + '%'
	}
	if(settings.spotifyLineHeight) {
		spotify.getStyle('duration_line').height = settings.spotifyLineHeight.value + 'px'
	}
	if(settings.spotifyLineRadius) {
		spotify.getStyle('duration_line').borderRadius = settings.spotifyLineRadius.value + 'px'
	}
	if(settings.spotifyLineTransparency) {
		spotify.getStyle('duration_line').opacity = settings.spotifyLineTransparency.value/100
	}
	if(settings.spotifyLineX) {
		spotify.setX('duration_line', settings.spotifyLineX.value)
	}
	if(settings.spotifyLineY) {
		spotify.setY('duration_line', settings.spotifyLineY.value)
	}
	if(settings.spotifyLineColorLine){
		spotify.setVar('duration_progress_color','rgb('+settings.spotifyLineColorLine.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyLineColor){
		spotify.setVar('duration_line_color','rgb('+settings.spotifyLineColor.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyLineColorBlur){
		spotify.setVar('duration_line_color_blur','rgb('+settings.spotifyLineColorBlur.value.split(' ').map(function(c){return Math.ceil(c*255)})+')')
	}
	if(settings.spotifyLineColorLineType){
		spotify.setVar('duration_progress_color_type', settings.spotifyLineColorLineType.value)
	}
	if(settings.spotifyLineColorType){
		spotify.setVar('duration_line_color_type', settings.spotifyLineColorType.value)
	}
	if(settings.spotifyLineColorBlurType){
		spotify.setVar('duration_line_color_blur_type', settings.spotifyLineColorBlurType.value)
	}

}