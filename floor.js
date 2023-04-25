
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
		cursor_room.style.left = x - 250 + 'px'
		cursor_room.style.top = y - 260 + 'px'
	});
});

function Floor_namber(el) {

	var room = el.dataset.room;
	var kv = el.dataset.kv;
	var kv2 = el.dataset.kv2;
	var kv3 = el.dataset.kv3;
	var kvs = el.dataset.kvs;

	if (kvs == '2') {
		document.querySelector(".Room_info_tex").style.display = 'block';
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".Room_info_tex").innerHTML = 'გაყიდულია';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML = kv;
	}
	else if(kvs == '5')
	{
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".Room_info_tex").innerHTML = 'ოფისი';
		document.querySelector(".Room_info_tex").style.display = 'block';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML =  kv;
		document.querySelector(".room_kv2").innerHTML = 'საზაფხულე: ' + kv2;
		document.querySelector(".room_kv3").innerHTML ='შიდა: ' + kv3;
	}
	else if(kvs == '6')
	{
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".room_info").innerHTML = room + 'ა';
		document.querySelector(".Room_info_tex").style.display = 'none';
		document.querySelector(".room_kv").innerHTML =  kv;
		document.querySelector(".room_kv2").innerHTML = 'საზაფხულე: ' + kv2;
		document.querySelector(".room_kv3").innerHTML ='საცხოვრებელი: ' + kv3;
	}
	else if (kvs == '3') {
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".Room_info_tex").innerHTML = 'დაჯავშნილია';
		document.querySelector(".Room_info_tex").style.display = 'block';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML = kv;
	}
	else if(kvs ==='4')
	{
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".Room_info_tex").innerHTML = 'სასტუმრო';
		document.querySelector(".Room_info_tex").style.display = 'block';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".room_kv").innerHTML =  kv;
		document.querySelector(".room_kv2").innerHTML = 'საზაფხულე: ' + kv2;
		document.querySelector(".room_kv3").innerHTML ='საცხოვრებელი: ' + kv3;
	}
	else if(kvs==='1') {
		document.querySelector(".Room_info").style.height = '120px';
		document.querySelector(".room_info").innerHTML = room;
		document.querySelector(".Room_info_tex").style.display = 'none';
		document.querySelector(".room_kv").innerHTML =  kv;
		document.querySelector(".room_kv2").innerHTML = 'საზაფხულე: ' + kv2;
		document.querySelector(".room_kv3").innerHTML ='საცხოვრებელი: ' + kv3;
	}

}


