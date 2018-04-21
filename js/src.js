
console.log('it s alive');
// menuBtn.onclick = function() {
// 	menuBtn.classList.add("icon_list-open");
// }

var menuOpener = document.getElementsByClassName('menu_opener');
// console.log(menuOpener[0])
// console.log($('.menu_opener'))
$('.menu_opener').click(function(){	
$(this).find('.icon_list').toggleClass('icon_list-open')
$('.sidebar').toggleClass('sidebar_active')
})

var hammertime = new Hammer(document);
hammertime.on('panleft panright', function(ev) {
	console.log(ev.type);
	if(ev.type == 'panright'){
		$('.sidebar_active .icon_list').addClass('icon_list-open');
		$('.sidebar').toggleClass('sidebar_active')
	}
	if(ev.type == 'panleft'){
		$('.sidebar_active .icon_list').removeClass('icon_list-open');
		$('.sidebar').toggleClass('sidebar_active')
	}
});


