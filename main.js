$('.menu-btn').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active')
});
document.querySelector('.menu-btn').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.navigation1').classList.toggle('open');
})
$(document).ready(function () {
	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$('.nav-menu').toggleClass('open');
		$(this).toggleClass('close');
	});
});