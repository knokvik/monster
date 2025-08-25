  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollSmoother);
  var tl = gsap.timeline();

  // gsap.registerPlugin(ScrollSmoother);

  // const smoother = ScrollSmoother.create({
  //   smooth: 1.5,  // default is 1, >1 slows down scroll speed
  //   effects: true,
  //   smoothTouch: 0.1, // smoothing on touch devices
  // });

  const section4 = document.querySelector('.section-4');
  const cardsContainer = document.querySelector('.section-4-cards');
  const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;
  
  gsap.to(cardsContainer, {
    x: -maxScrollLeft, 
    ease: 'none',
    scrollTrigger: {
      scroller: '.page1',
      trigger: section4,
      start: "top-=500",   
      end: "top+=1000",
      scrub: true,
      pinSpacing : true,
    }
  });

  gsap.from('.sec-5-1', {
    top: "50%",
    left: "-16%",
    duration : 180,
    position: "absolute",
    scrollTrigger: {
      scroller: '.page1',
      trigger: '.sec-5-1',
      start: "top+=100",   
      end: "top+=150",     
      scrub: 1.2,
      
    }
  });

  gsap.from('.sec-5-2', {
    top: "45%",
    right: "-12%",
    duration : 180,
    position: "absolute",
    scrollTrigger: {
      scroller: '.page1',
      trigger: '.sec-5-2',
      start: "top+=130",   
      end: "top+=180",     
      scrub: 1.2,
    }
  });

  const cards = gsap.utils.toArray('.section-4-cards > img');

ScrollTrigger.create({
  scroller: '.page1',
  trigger: section4,
  start: 'top top',
  end: () => `+=${maxScrollLeft - 800}`,
  scrub: true,
  onUpdate: self => {
    const progress = self.progress; // 0 to 1
    const totalCards = cards.length;
    const centerIndex = Math.round(progress * (totalCards - 1));

    cards.forEach((card, i) => {
      if (i === centerIndex) {
        gsap.to(card, { scale: 1.15, duration: 0.3, ease: 'power1.out' });
      } else {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.out' });
      }
    });
  }
});

  
  gsap.utils.toArray(".section-2 h4:not(.fire-up h4)").forEach((elem, i) => {

    let startOffset = -650 + (i * 50);
      let endOffset   = 0 + (i * 100);   
    
      gsap.fromTo(elem,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: elem,
            scroller: ".page1",
            start: `top+=${startOffset}`,
            end: `top-=${endOffset}`,
            scrub: true,
          }
        }
      );
    });
    
    gsap.fromTo('.fire-up',
      { rotation: 15, duration : 1, scale : 0 , opacity : 0 },
      {
        rotation: -15,
        scale : 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".section-2",
          scroller: ".page1",  
          start: "top-=800",
          end: "bottom-=300",
          scrub: true,
        }
      }
    );

    gsap.to('.freaking', {
      clipPath: 'inset(0 0% 0 0)',
      duration : 3,
        scrollTrigger: {
        trigger: '.section-2',   
        scroller: '.page1',     
        start: 'top-=10',    
        end: 'bottom-=180',    
        scrub: true,
      }
    });
    

  let secondsElapsed = 0;

    function updateTimer() {
      secondsElapsed++;

      const hours = Math.floor(secondsElapsed / 3600);
      const minutes = Math.floor((secondsElapsed % 3600) / 60);
      const seconds = secondsElapsed % 60;

      document.querySelector('.hour').textContent = hours;
      document.querySelector('.min').textContent = minutes;
      document.querySelector('.sec').textContent = seconds;

    }

    setInterval(updateTimer, 1000);

  const video = document.querySelector('.banner-video');

  window.addEventListener('wheel', function( e ) {
      if( e.deltaY > 0 ) {
          gsap.to('.marque',{
              xPercent: -200,
              duration: 3,
              repeat: -1,
              ease: "none"
          })

          gsap.to('.marque img', {
              rotate : 180 
          })

          
      } if( e.deltaY < 0 ) {
          gsap.to('.marque',{
              xPercent : 0,
              duration: 4,
              repeat: -1,
              ease: "none"
          })

          gsap.to('.marque img', {
              rotate : 0 
          })
      }
  })

  video.addEventListener('ended', () => {
      gsap.to('.banner', {
        yPercent: 140,
        duration: 1.4,
        ease: 'power2.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
        }
      });
    });
    