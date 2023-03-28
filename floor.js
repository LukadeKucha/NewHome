
$(document).ready(function () {


	$(".Room").hover(function () {
		$('.Room_info').css("display", "block");

	}, function () {
		$('.Room_info').css("display", "none");
	});
	var cursor_room = document.getElementById('Room_info');
	document.addEventListener("mousemove", function (a) {
		var x = a.clientX;
		var y = a.clientY;
		cursor_room.style.left = x - 230 + 'px'
		cursor_room.style.top = y - 240 + 'px'
	});
});

function Floor_namber(el) {
	var room = el.dataset.room;
	var kv = el.dataset.kv;
	var kvs = el.dataset.kvs;

	if (kvs == '2') {
		document.querySelector(".Room_info_tex").style.display = 'block';
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".Room_info_tex").innerHTML = 'გაყიდულია';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML = kv;
	}
	else if (kvs == '3') {
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".Room_info_tex").innerHTML = 'დაჯავშნილია';
		document.querySelector(".Room_info_tex").style.display = 'block';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML = kv;
	}
	else {
		document.querySelector(".Room_info").style.height = '80px';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML = kv;
		document.querySelector(".Room_info_tex").style.display = 'none';
	}

}


