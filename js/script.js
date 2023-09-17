$(function(){
  //nav
  $("nav ul li").mouseover(function(){
    $(this).children("ul").stop().fadeIn(200);
  })
  $("nav ul li").mouseleave(function(){
    $("nav >ul >li>ul").stop().fadeOut(200);
  })
})

$(function(){
  //slide
  let slides = document.querySelector(".slider1 ul"),
      slide = document.querySelectorAll(".slider1 ul li"),
      currentIdx=0,
      slideCount = slide.length,
      slideWidth = 20,
      slideMargin = 0,
      preview = 5


  makeClone();  
  function makeClone(){
    for (let ab=0;ab<5;ab++){
      for( let i=0; i < slideCount ; i++){
        let CloneSlide = slide[i].cloneNode(true)
        CloneSlide.classList.add("clone");
        slides.append(CloneSlide);
      }
    }
    updateWidth();
    // setInitialPos();
    setTimeout(function(){
      slides.classList.add('animated');
    },100)

    
  }
  
  function updateWidth(){
    let currentSlides = document.querySelectorAll('.slider1 ul li');
    let newSlideCount = currentSlides.length;
    let newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + '%'
    slides.style.width = newWidth
  }
  // slides.style.left = -100+"%"
  

  function slider (){
    if (currentIdx== slideCount){
      $(".slider1 ul").removeClass('animated');
      slides.style.left = '0px';
      currentIdx = 0;
      setTimeout(function(){
        slides.classList.add('animated')
      },50)  
    }
    setTimeout(function(){
      if ( currentIdx<slideCount){
        currentIdx++;
        slides.style.left = -(slideWidth*preview)*currentIdx+"%";
      }
    },100)
  }

  setInterval(slider,15000)

})
