var index_video = [
    'https://www.youtube.com/embed/ygGrYn75NF4',
    'https://www.youtube.com/embed/41Y4nNrSHWo',
    'https://www.youtube.com/embed/pvmEmEVw3jE',
    'https://www.youtube.com/embed/T4_tkrbosi4',
    'https://www.youtube.com/embed/RswhXt5gqQ4',
    //'https://www.youtube.com/embed/iyX-qd0l7yA',
    'https://www.youtube.com/embed/z9XT1H8RvUU',
    'https://www.youtube.com/embed/2_tw0LI4ZqQ',
    'https://www.youtube.com/embed/QiT0agvyObA'
];

$(window).ready(function(){
    
    if (!device.tablet() && !device.mobile()) {
        
        		$(document).bind('mousewheel', function(e){
if(e.originalEvent.wheelDelta /120 > 0) {
if(!$('.promo').hasClass('promo_effect_start')) {
$('.promo').addClass('promo_effect_up').addClass('promo_effect_start');
setTimeout(function(){
$('.promo').removeClass('promo_effect_up');
setTimeout(function(){
$('.promo').removeClass('promo_effect_start')
},200);
},200);
}
}
else{
if(!$('.promo').hasClass('promo_effect_start')) {
$('.promo').addClass('promo_effect_down').addClass('promo_effect_start');
setTimeout(function(){
$('.promo').removeClass('promo_effect_down');
setTimeout(function(){
$('.promo').removeClass('promo_effect_start')
},200);
},200);
}
}
});
	
    
    $('._chat').click(function(){
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            if(!$(this).hasClass('opened'))
                $(this).addClass('opened');
        }
    });
    
    $('._chat .closer').click(function(e){
        if($('._chat').hasClass('active')) {
            e.stopPropagation();
            $('._chat').removeClass('active');
        }
    });
    
    setTimeout(function(){
        $('._chat').addClass('on');
    }, 100);
    
    setTimeout(function(){
        if(!$('._chat').hasClass('opened')) {
            $('._chat').addClass('active');
        }
    }, 15000);
    
    $('._chat form').submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: 'message.php',
          data: $('._chat form').serialize()
        });
        $('._chat .message')
            .show()
        setTimeout(function(){
            $('._chat .message')
                .css({opacity : 1});
            setTimeout(function(){
                $('._chat .message')
                    .css({opacity : 0});
                setTimeout(function(){
                    $('._chat .message')
                        .hide();
                },400);
            },2000);
        }, 100);
    });
        
    }


    $('#m_top, #m_start').click(function(){
            go('#a_top')
    });
    $('#m_energy').click(function(){
            go('#a_energy')
    });
	$('#m_about, #b_about').click(function(){
			go('#a_about')
	});
	$('#m_more').click(function(){
			go('#a_more')
	});
	$('#m_prem').click(function(){
			go('#a_prem')
	});
	$('#m_feed').click(function(){
			go('#a_feed')
	});
    $('#m_con').click(function(){
			go('#a_con')
	});
    $('#m_ship').click(function(){
			go('#a_ship')
	});
	$('#b_start, #b2_start').click(function(){
			go('#a_start')
	});
	
	
	$('.person').click(function(){
       $('.popup').addClass('popup_active');
        $('.popup .video_container').html('<div class="what_video"><iframe width="640" height="360" src="'+index_video[$(this).index()]+'?modestbranding=1&amp;showinfo=0&amp;rel=0;autoplay=1" frameborder="0" allowfullscreen=""></iframe></div>');
    });
	
	$('.politics-t').click(function(){
		$('.popup').addClass('popup_active').addClass('politics_active');
	});
	
	$('.video_close').click(function(e){
		e.stopPropagation();
        $('.popup').removeClass('popup_active').removeClass('politics_active').removeClass('f_pro_active').removeClass('f_extra_active');
        $('.popup .video_container').html('');
    });
    
    
    
    $('.block.pr .btn').click(function(){
        //alert($(this).closest('.pr').find('img').attr('src'));
        $('.popup').addClass('f_pro_active');
        $('.popup .form_container img').attr('src', $(this).closest('.pr').find('img').attr('src'));
        $('.popup .form_container form .product')
            .val(
                window.location.origin + '/' +
                $(this).closest('.pr').find('img').attr('src')
            );
    });
    
    $('.block.f .pro a, .block.f .pro img').click(function(event){
        //alert($(this).closest('.pr').find('img').attr('src'));
        $('.popup').addClass('f_extra_active');

        $('.popup .form_container form .product')
            .val(
                window.location.origin + '/' +
                $(this).closest('.pro').find('img').attr('src')
            );
        event.preventDefault();
    });
	



    $('.f_pro').submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: 'mail.php',
          data: $('.f_pro').serialize()
        });
         $('.popup').removeClass('popup_active').removeClass('politics_active').removeClass('f_pro_active').removeClass('f_extra_active');
        swal("Ваша заявка отправлена!", "В ближайшее время с Вами свяжется наш менеджер.", "success");
    });
    
    
    $('.f_extra').submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: 'mail.php',
          data: $('.f_extra').serialize()
        });
         $('.popup').removeClass('popup_active').removeClass('politics_active').removeClass('f_pro_active').removeClass('f_extra_active');
        swal("Ваша заявка отправлена!", "В ближайшее время с Вами свяжется наш менеджер.", "success");
    });
    
    
    $('.final').submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: 'mail.php',
          data: $('.final').serialize()
        });
         $('.popup').removeClass('popup_active').removeClass('politics_active').removeClass('f_pro_active').removeClass('f_extra_active');
        swal("Ваша заявка отправлена!", "В ближайшее время с Вами свяжется наш менеджер.", "success");
    });
    
	
});

  function go(id) {
      $('html, body').stop().animate({
          scrollTop: $(id).offset().top - 54
      }, 1000);
      return false;
  }



  /* my js */

  /* main form HTML5 validation addon */
  $('.js-row input[type=text]').on('keyup', function() {
    var inputSet = $(this).closest('.js-row').find('input[type=text]'),
        dataIsFilled = false;
    
    // refresh state
    inputSet.attr('required', true);

    // check data
    inputSet.each(function() {
      if ( $(this).val() !== '' ) {
        dataIsFilled = true;
      }
    });

    // set only input
    if ( dataIsFilled ) {
      inputSet.each(function() {
       var thisElt = $(this);
        if ( thisElt.val() !== '' ) {
          thisElt.attr('required', true);
        } else {
          thisElt.attr('required', false);
        }
      });
    }

  });

  /* main form */
  $('.js-main-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: 'mail.php',
      data: $('.js-main-form').serialize()
    });
    $('.popup').removeClass('popup_active').removeClass('politics_active').removeClass('f_pro_active').removeClass('f_extra_active');
    swal("Ваша заявка отправлена!", "В ближайшее время с Вами свяжется наш менеджер.", "success");
  });

  /* mobile menu */
  $('.js-burger').on('click', function() {
    $(this).toggleClass('is-opened');
    $('.js-menu').toggleClass('is-visible');
  })

  $('.js-menu a').on('click', function() {
  	$('.js-burger').removeClass('is-opened');
    $('.js-menu').removeClass('is-visible');
  })




  /* my js end */




