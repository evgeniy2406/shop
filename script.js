function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

$(document).ready(function(){
	$('.main-slider_body').slick({
		responsive:[
  		{
  			breakpoint: 500,
  			settings: {
  				arrows:false,
  				dots:true
  			}
  		}
  	]
	})
})
$(document).ready(function(){
	$('.products_side-body').slick({
		arrows:false,
		dots:true
	})
})

/*$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active')
		$('body').toggleClass('lock')
	})
})*/

let select = function(){
	let arr = [document.querySelectorAll('.select_language'),document.querySelectorAll('.select_currency')]
	let arr1 = [document.querySelector('.select-1'),document.querySelector('.select-2')]
	let selectItem = document.querySelectorAll('.select_item')
/*	let selectLanguage = document.querySelectorAll('.select_language')
	let selectCurrency = document.querySelectorAll('.select_currency')*/
	arr.map(item => item.forEach(select => {
		select.addEventListener('click', selectToggle)
	}))
	selectItem.forEach(item => {
		item.addEventListener('click',selectChoose)
	})
	selectItem.forEach(item => {
		item.addEventListener('click',selectChoose1)
	})

	document.addEventListener('click',function(e){
		if(!e.target.closest('.select-1')){
			let menu_language = document.querySelector('.select_language-body')
			menu_language.parentElement.classList.remove('is-active')
		}
	})	
	document.addEventListener('click',function(e){
		if(!e.target.closest('.select-2')){
			let menu_language = document.querySelector('.select_valuta-body')
			menu_language.parentElement.classList.remove('is-active')
		}
	})	

	function selectToggle(){
		this.parentElement.classList.toggle('is-active')
	}
	function selectChoose(){
		let text = this.innerText,
		select = this.closest('.select-1'),
		currentText = this.closest('.select-1').querySelector('.select_current')
		currentText.innerText = text
		select.classList.remove('is-active')
	}
	function selectChoose1(){
		let text = this.innerText,
		select = this.closest('.select-2'),
		currentText = this.closest('.select-2').querySelector('.select_valuta')
		currentText.innerText = text
		select.classList.remove('is-active')
	}
	
}
select()

let burgger = document.querySelector('.header_burger')
		menu    = document.querySelector('.header-footer-menu_body')

burgger.addEventListener('click',function(event){
	this.classList.toggle('active')
	menu.classList.toggle('active')
	document.querySelector('body').classList.toggle('active')
})
