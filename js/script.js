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
  //slide1
  let slides = document.querySelector(".slider1 ul"),
      slide = document.querySelectorAll(".slider1 ul li"),
      currentIdx=0,
      slideCount = slide.length,
      slideWidth = 20,
      slideMargin = 0,
      preview = 5


  makeClone();  
  function makeClone(){
    for (let ab=0;ab<preview;ab++){
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







$(function(){
  //slide2
  let slides2 = document.querySelector(".slider2 .slide2"),
      slide2 = document.querySelectorAll(".slider2 .slide2 li"),
      currentIdx2=0,
      slideCount2 = slide2.length,
      slideWidth2 = 25,
      slideMargin2 = 0,
      preview2 = 4


  makeClone2();  
  function makeClone2(){
    for (let ab=0;ab<preview2;ab++){
      for( let i=0; i < slideCount2 ; i++){
        let CloneSlide = slide2[i].cloneNode(true)
        CloneSlide.classList.add("clone");
        slides2.append(CloneSlide);
      }
    }
    updateWidth2();
    // setInitialPos();
    setTimeout(function(){
      slides2.classList.add('animated');
    },100)

    
  }
  
  function updateWidth2(){
    let currentSlides2 = document.querySelectorAll('.slider2 .slide2 li');
    let newSlideCount2 = currentSlides2.length;
    let newWidth2 = (slideWidth2 + slideMargin2)*newSlideCount2 - slideMargin2 + '%'
    slides2.style.width = newWidth2
  }
  let j = 0
  function slider2 (){
    if (currentIdx2== slideCount2){
      $(".slider2 .slide2").removeClass('animated');
      slides2.style.left = '0px';
      currentIdx2 = 0;
      setTimeout(function(){
        slides2.classList.add('animated')
      },50)  
    }
    setTimeout(function(){
      if ( currentIdx2<slideCount2){
        currentIdx2++;
        slides2.style.left = -(slideWidth2*preview2)*currentIdx2+"%";
      }
    },100)
    j++
    if(j==8){j=0}
    console.log(j)
    $(".slider2-nav li").removeClass("active")
    $(".slider2-nav li").eq( j % 2 ).addClass("active")
  }

  setInterval(slider2,8000)

})




$(function(){
  //slide3
  let slides3 = document.querySelector(".slider3 ul"),
      slide3 = document.querySelectorAll(".slider3 ul li"),
      currentIdx3=0,
      slideCount3 = slide3.length,
      slideWidth3 = 100,
      slideMargin3 = 0,
      preview3 = 1


  makeClone3();  
  function makeClone3(){
    for (let ab=0;ab<preview3;ab++){
      for( let i=0; i < slideCount3 ; i++){
        let CloneSlide = slide3[i].cloneNode(true)
        CloneSlide.classList.add("clone");
        slides3.append(CloneSlide);
      }
    }
    updateWidth3();
    // setInitialPos();
    setTimeout(function(){
      slides3.classList.add('animated');
    },100)

    
  }
  
  function updateWidth3(){
    let currentSlides3 = document.querySelectorAll('.slider3 ul li');
    let newSlideCount3 = currentSlides3.length;
    let newWidth3 = (slideWidth3 + slideMargin3)*newSlideCount3 - slideMargin3 + '%'
    slides3.style.width = newWidth3
  }
  function slider3 (){
    if (currentIdx3== slideCount3){
      $(".slider3 ul").removeClass('animated');
      slides3.style.left = '0px';
      currentIdx3 = 0;
      setTimeout(function(){
        slides3.classList.add('animated')
      },50)  
    }
    setTimeout(function(){
      if ( currentIdx3<slideCount3){
        currentIdx3++;
        slides3.style.left = -(slideWidth3*preview3)*currentIdx3+"%";
      }
    },100)
  }

  setInterval(slider3,8000)

})








$(function(){
  //slide4
  let slides4 = document.querySelector(".slider4 .slide4"),
      slide4 = document.querySelectorAll(".slider4 .slide4 li"),
      currentIdx4=0,
      slideCount4 = slide4.length,
      slideWidth4 = 25,
      slideMargin4 = 0,
      preview4 = 4


  makeClone4();  
  function makeClone4(){
    for (let ab=0;ab<preview4;ab++){
      for( let i=0; i < slideCount4 ; i++){
        let CloneSlide = slide4[i].cloneNode(true)
        CloneSlide.classList.add("clone");
        slides4.append(CloneSlide);
      }
    }
    updateWidth4();
    // setInitialPos();
    setTimeout(function(){
      slides4.classList.add('animated');
    },100)

    
  }
  
  function updateWidth4(){
    let currentSlides4 = document.querySelectorAll('.slider4 .slide4 li');
    let newSlideCount4 = currentSlides4.length;
    let newWidth4 = (slideWidth4 + slideMargin4)*newSlideCount4 - slideMargin4 + '%'
    slides4.style.width = newWidth4
  }
  let k = 0
  function slider4 (){
    if (currentIdx4== slideCount4){
      $(".slider4 .slide4").removeClass('animated');
      slides4.style.left = '0px';
      currentIdx4 = 0;
      setTimeout(function(){
        slides4.classList.add('animated')
      },50)  
    }
    setTimeout(function(){
      if ( currentIdx4<slideCount4){
        currentIdx4++;
        slides4.style.left = -(slideWidth4*preview4)*currentIdx4+"%";
      }
    },100)
    k++
    if(k==8){k=0}
    console.log(k)
    $(".slider4-nav>li").removeClass("active")
    $(".slider4-nav li").eq( k % 8 ).addClass("active")
  }

  setInterval(slider4,8000)

})


