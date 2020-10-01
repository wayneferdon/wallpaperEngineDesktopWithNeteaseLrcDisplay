/**
 * Created by FLomka on 2018/9/07.
 **/
 
var oClock = document.getElementById("clock_classic");
var oClock_glitch = document.querySelector(".screen");
var oGlitch_clock = document.querySelector(".clock");
oGlitch_clock = oGlitch_clock.querySelector("span");
var oDigital_clock = document.getElementById('digital_clock');
var oDigital_enable = document.querySelector('.digital_clock');
var oSlide_enable = document.querySelector('.column2');
var oSlide_dots = document.querySelector('.showed');

var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];

var tStyle = true;
var dot = ":";
var vv = 0;
var timeTag = 1;
var color2;

function setTimeColor(){
	if(vv>255){timeTag*=-1;vv=255;}
	if(vv<0){timeTag*=-1;vv=0;}
	color2 = 'hsl('+vv+',90%,50%)';
	vv += timeTag/1;
	oClock.style.color = color2;
	oClock.style.textShadow = '0 0 20px ' + color2;
    document.body.style.setProperty('--glith_color', color2);
}


function oClockInit(){
	let w = window.innerWidth;
    let h = window.innerHeight;
	oClock.style.width = w+'px';
	oClock.style.lineHeight = h+'px';
	oClock.style.height =  h+'px';
	oClock.style.fontSize = Math.floor(h/300*20) + 'px';
	document.body.style.setProperty('--glith_size', w+'px '+h+'px');
}

oClockInit();

function second_passed() {
    $('.clock').removeClass('is-off');
 }
 let newDate = new Date();
  newDate.setDate(newDate.getDate());

setTimeout(second_passed, 2000)

function getTime(){
    let c = new Date();
    let realTime
    let ar = {}
	
    if(tStyle){
		if(tShowSencends){
			oClock.innerHTML = add0(c.getHours())+" " +dot+ " "+add0(c.getMinutes())+" <span class='sec'>"+add0(c.getSeconds()) + "</span>";
			realTime =  add0(c.getHours()) + ' '+dot+' '  + add0(c.getMinutes()) + ' '+dot+' ' +  add0(c.getSeconds())
			ar = [ c.getHours(), c.getMinutes(), c.getSeconds()].reduce(padClock, '');
			oSlide_dots.style.display = 'inline-block';
		}else{
			oClock.innerHTML = add0(c.getHours())+" " +dot+ " "+add0(c.getMinutes());
			realTime =  add0(c.getHours()) + ' '+dot+' '  + add0(c.getMinutes())
			ar = [ c.getHours(), c.getMinutes()].reduce(padClock, '');
			oSlide_dots.style.display = 'none';
		}
    }else{
        let h = c.getHours();
        let str = h<12 ? "AM" : "PM";
        h = h<=12 ? h : h-12;
		if(tShowSencends){
			oClock.innerHTML = "<span id='time'>"+add0(h)+" " +dot+ " "+add0(c.getMinutes())+" <span class='sec'>"+add0(c.getSeconds())+"</span><span class='st'>"+str+"</span></span>";
			realTime =  add0(h) + ' '+dot+' '  + add0(c.getMinutes()) + ' '+dot+' ' +  add0(c.getSeconds()) + ' ' + str
			ar = [ h, c.getMinutes(), c.getSeconds()].reduce(padClock, '');
			oSlide_dots.style.display = 'inline-block';
		}else{
			oClock.innerHTML = "<span id='time'>"+add0(h)+" " +dot+ " "+add0(c.getMinutes())+ "</span>" +" <span class='sec'>"+ str + "</span>"
			realTime =  add0(h) + ' '+dot+' '  + add0(c.getMinutes()) + ' ' + str
			ar = [ h, c.getMinutes()].reduce(padClock, '');
			oSlide_dots.style.display = 'none';
		}
    }
    oDigital_clock.setAttribute('data-hours', add0(c.getHours()));
	oDigital_clock.setAttribute('data-minutes', add0(c.getMinutes()));
	oDigital_clock.setAttribute('data-seconds', add0(c.getSeconds()));
	snow_sign(c)
	columns.forEach(function (ele, i) {
		let n = +ar[i];
		let offset = -n * size;
		ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
		Array.from(ele.children).forEach(function (ele2, i2) {
			ele2.className = 'num ' + getClass(n, i2);

		});
	});

	function getClass(n, i2) {
		return classList.find(function (class_, classIndex) {
			return Math.abs(n - i2) === classIndex;
		}) || '';
	}

    $('.time').html(realTime);
    		$('.time').attr('data-time', realTime);
	if (dot == ":" && timeDot) {
		dot = ".";
		return;
	}
	if (dot == ".") dot = ":";
	if (dot == ":" && timeDot2) {
		dot = " ";
		return;
	}
	if (dot == " ") dot = ":";

}

function autoTime(){
    getTime();
    setTimeout(autoTime, 1000);
}
function add0(n){
    return n<10 ? '0'+n : ''+n;
}
function padClock(p, n) {
	return p + ('0' + n).slice(-2);
}

autoTime();

function SetOldFontClock(type) {
    switch (type){
            case 1:
                oClock.style.fontFamily = '"等线 Light","Microsoft Yahei Light"';
                break;
            case 2:
                oClock.style.fontFamily = "'Lato', sans-serif";
                break;
            case 3:
                oClock.style.fontFamily = "'Brush Script Std', cursive";
                break;
            case 4:
                oClock.style.fontFamily = "'Papyrus', fantasy";
                break;
            case 5:
                oClock.style.fontFamily = "'Harrington', fantasy";
                break;
            case 6:
                oClock.style.fontFamily = "'Open Sans', sans-serif";
                break;
            default:
        }
}