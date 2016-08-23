(function() {
	var timer = document.querySelector('.timer');
	var start = document.querySelector('.start');
	var clear = document.querySelector('.clear');
		

	timer.innerHTML = '<span>00</span>:<span>00</span>:<span>00</span>:<span>000</span>';
	// var span = document.querySelector('span:nth-child(2)');
	// span.style.paddingLeft = '0px';
	start.innerHTML = 'Start';
	clear.innerHTML = 'Clear';
	start.style.fontFamily = 'sans-serif';
	start.style.fontWeight = 'bold';
	clear.style.fontFamily = 'sans-serif';
	clear.style.fontWeight = 'bold';


	function startCount() {
		id = setInterval(function() {
			timer.innerHTML = count();
		}, 1);

		start.removeEventListener('click', startCount);
		start.addEventListener('click', pauseCount);
		start.innerHTML = "Pause";
	}

	function pauseCount() {
		clearInterval(id);
		start.addEventListener('click', startCount);
		start.innerHTML = 'Resume';
	}


	start.addEventListener("click", startCount);
	clear.addEventListener('click', stopCount);

	function stopCount() {

		clearInterval(id);
		timer.innerHTML = '<span>00</span>:<span>00</span>:<span>00</span>:<span>000</span>';
		start.innerHTML = 'Start';
		start.addEventListener('click', startCount);
		msec = 0;
		sec = 0;
		min = 0;

		date = new Date(0, 0);		
	};

	var msec = 0;
	var sec = 0;
	var min = 0;
	var hour = 0;

	var id;
	var msecTime = 0;
	var date = new Date(0, 0);


	function count() {

		date.setMilliseconds(date.getMilliseconds() +4);
		var msec = date.getMilliseconds();

		if (msec === 996) {
			msec = 0;
			msecTime = "000";
			++sec;
		}
		if (msec >= 100) {
			msecTime = msec;
		}
		if (msec < 100) {
			msecTime = "0" + Number(msec);
		}
		if (msec < 10) {
			msecTime = "0"  + "0" + Number(msec);
		}
		if (sec >= 60) {
			sec = 0;
			++min;
		}
		if (sec < 10) {
			sec = "0" + Number(sec);
		}
		if (min >= 60) {
			min = 0;
			++hour;
		}
		if (min < 10) {
			min = "0" + Number(min);
		}
		if (hour < 10) {
			hour = "0" + Number(hour);
		}
		++msec;
		return '<span>' + hour + '</span>' + ':' + '<span>' + min + '</span>' + ':' + '<span>' + sec + '</span>' + ':' + '<span>' + msecTime + '</span>';
	}	
})();
