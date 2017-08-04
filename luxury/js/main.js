$(document).ready(function ($) {
	awe_backtotop();
	/*awe_owl();*/
	awe_category();
	awe_menumobile();
	awe_tab();
	$('.open-blog-cate').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.accordion-group').find('.accordion-body').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	if ($(window).width() < 992) {
		$('.open-close').on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.parents('.dropdown').find('.dropdown-menu').stop().slideToggle();
			$(this).toggleClass('active')
			return false;
		});
		$('.open-closes').on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.parents('.li-cate-has-child').find('.dropdown-menu.mega-menu').stop().slideToggle();
			$(this).toggleClass('active')
			return false;
		});
		$('.open-close-menu').on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.parents('.dropdown').find('.dropdown-menu').stop().slideToggle();
			$(this).toggleClass('active')
			return false;
		});
		$('.button-menu-mobile').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.parents('.header-style-1').find('.header-nav').stop().slideToggle();
			$(this).toggleClass('opn')
			return false;
		});
		$('.sidebar .side-menu .head').on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.parents('.sidebar .side-menu').find('.yamm.megamenu-horizontal').stop().slideToggle();
			$(this).toggleClass('active');
			return false;
		});
	}
});
$(document).on("click", ".navbar-search-button", function(e) {
	e.stopPropagation();
	e.preventDefault();
	if ($(".header-search-overlay").length) {
		$(".header-search-overlay").stop(true, true).removeClass("hide").css("opacity", 0).animate({
			"opacity": 1
		}, 600, "swing", function() {
			$(this).find(".searchinput").focus();
		});
	} else if ($(".search-form-wrap").length) {
		if ($(".search-form-wrap").hasClass("hide")) {
			$(".search-form-wrap").removeClass("hide").addClass("show");
			$(".search-form-wrap .searchinput").focus();
		}
	}
});
$("body").on("mousedown", $.proxy(function(e) {
	var element = $(e.target);
	if ($(".header-search-overlay").length) {
		if (!element.is(".header-search-overlay") && element.parents(".header-search-overlay").length === 0) {
			$(".header-search-overlay").removeClass("show").addClass("hide");
		}
	} else {
		if (!element.is(".search-form-wrap") && element.parents(".search-form-wrap").length === 0) {
			$(".search-form-wrap").removeClass("show").addClass("hide");
		}
	}
}, this));
$(document).on("click", ".header-search-overlay .close", function() {
	$(".header-search-overlay").stop(true, true).animate({
		"opacity": 0
	}, 600, "swing", function() {
		$(this).addClass("hide");
	});
});
//Shop mini cart
$(document).on("mouseenter", ".navbar-minicart-nav", function() {
	window.clearTimeout($(this).data("timeout"));
	$(this).parent().find(".navbar-minicart .minicart").fadeIn(50);
});
$(document).on("mouseleave", ".navbar-minicart-nav", function() {
	var _this = $(this);
	var t = setTimeout(function() {
		_this.parent().find(".navbar-minicart .minicart").fadeOut(50);
	}, 400);
	$(this).data("timeout", t);
});
$(document).on("mouseenter", ".navbar-minicart-topbar", function() {
	window.clearTimeout($(this).data("timeout"));
	$(this).parent().find(".navbar-minicart .minicart").fadeIn(50);
});
$(document).on("mouseleave", ".navbar-minicart-topbar", function() {
	var _this = $(this);
	var t = setTimeout(function() {
		_this.parent().find(".navbar-minicart .minicart").fadeOut(50);
	}, 400);
	$(this).data("timeout", t);
});
//Off Canvas menu
$(".navbar-toggle-fixed-btn,.navbar-toggle,.navbar-offcanvas-btn").on("click", function(e) {
	e.stopPropagation();
	e.preventDefault();
	if ($("body").hasClass("open-offcanvas")) {
		$("body").removeClass("open-offcanvas").addClass("close-offcanvas");
		$(".navbar-toggle").removeClass("x");
	} else {
		$("body").removeClass("close-offcanvas").addClass("open-offcanvas");
		$(".navbar-toggle").addClass("x");
	}
});
$("body").on("mousedown", $.proxy(function(e) {
	var element = $(e.target);
	if ($(".offcanvas").length && $("body").hasClass("open-offcanvas")) {
		if (!element.is(".offcanvas") && element.parents(".offcanvas").length === 0 && !element.is(".navbar-toggle") && element.parents(".navbar-toggle").length === 0 && !element.is(".navbar-offcanvas-btn") && element.parents(".navbar-offcanvas-btn").length === 0) {
			$("body").removeClass("open-offcanvas");
			$(".navbar-toggle").removeClass("x");
		}
	}
}, this));
$(".offcanvas-nav .dropdown-hover .caret,.offcanvas-nav .dropdown-submenu > a > .caret,.offcanvas-nav .megamenu-title .caret").off("click").on("click", function(e) {
	e.stopPropagation();
	e.preventDefault();
	var dropdown = $(this).closest(".dropdown, .dropdown-submenu");
	if (dropdown.hasClass("open")) {
		dropdown.removeClass("open");
	} else {
		dropdown.addClass("open");
	}
});
//Navigation
$(".primary-nav .dropdown-hover .caret,.primary-nav .dropdown-submenu > a > .caret,.primary-nav .megamenu-title .caret").off("click").on("click", function(e) {
	e.stopPropagation();
	e.preventDefault();
	var dropdown = $(this).closest(".dropdown, .dropdown-submenu");
	if (dropdown.hasClass("open")) {
		dropdown.removeClass("open");
	} else {
		dropdown.addClass("open");
	}
});
$(window).on("load resize",function(e){	
	setTimeout(function(){					 
		awe_resizeimage();
	},200);
	setTimeout(function(){	
		awe_resizeimage();
	},1000);
});
$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})
/********************************************************
# SHOW NOITICE
********************************************************/
function awe_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.awe_showNoitice=awe_showNoitice;
/********************************************************
# SHOW LOADING
********************************************************/
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;
/********************************************************
# HIDE LOADING
********************************************************/
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;
/********************************************************
# SHOW POPUP
********************************************************/
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;
/********************************************************
# HIDE POPUP
********************************************************/
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;
/********************************************************
# RESIDE IMAGE PRODUCT BOX
********************************************************/
function awe_resizeimage() { 
	$('.product-box .product-thumbnail a img').each(function(){
		var t1 = (this.naturalHeight/this.naturalWidth);
		var t2 = ($(this).parent().height()/$(this).parent().width());
		if(t1<= t2){
			$(this).addClass('bethua');
		}
		var m1 = $(this).height();
		var m2 = $(this).parent().height();
		if(m1 <= m2){
			$(this).css('padding-top',(m2-m1)/2 + 'px');
		}
	})	
} window.awe_resizeimage=awe_resizeimage;
/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function awe_category(){
	$('.nav-category .fa-angle-down').click(function(e){
		$(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;
/********************************************************
# MENU MOBILE
********************************************************/
function awe_menumobile(){
	$('.menu-bar').click(function(e){
		e.preventDefault();
		$('#nav').toggleClass('open');
	});
	$('#nav .fa').click(function(e){		
		e.preventDefault();
		$(this).parent().parent().toggleClass('open');
	});
} window.awe_menumobile=awe_menumobile;
/********************************************************
# ACCORDION
********************************************************/
function awe_accordion(){
	$('.accordion .nav-link').click(function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})
} window.awe_accordion=awe_accordion;
/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;
/********************************************************
# TAB
********************************************************/
function awe_tab() {
	$(".e-tabs").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');

		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;
/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});
function validateNumber(event) {
	var key = window.event ? event.keyCode : event.which;
	if (event.keyCode === 8 || event.keyCode === 46) {
		return true;
	} else if ( key < 48 || key > 57 ) {
		return false;
	} else {
		return true;
	}
};

$(document).on('keydown','#qty, #quantity-detail, .number-sidebar',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
$(document).on('click','.qtyplus',function(e){
	e.preventDefault();   
	fieldName = $(this).attr('data-field'); 
	var currentVal = parseInt($('input[data-field='+fieldName+']').val());
	if (!isNaN(currentVal)) { 
		$('input[data-field='+fieldName+']').val(currentVal + 1);
	} else {
		$('input[data-field='+fieldName+']').val(0);
	}
});