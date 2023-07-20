class InviewEvent {
  constructor(el, opt){
    this.el = el;
    this.all = this.el + '-all';
    this.eachUp = this.el + '-each';
    this.eachItem = this.el + '-eachItem';
    this.eachItemFast = this.el + '-eachItem-fast';
    this.eachItemDelay = this.el + '-eachItem-delay';
    if($(this.el).length > 0){
      this.event();
    }
  }
  event() {
    let options = {
      threshold: [0, 0.05, 0.1, 1]
    }
    let optionsAll = {
      threshold: [0, 0.9, 1]
    }
    const observerEnter = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const item = entry.target;
        if(entry.intersectionRatio >= 0.05){
          item.classList.add('is-inview');
          if(item.classList.contains('js-inview-each')){
            this.inviewEachUp(item);
          }
          if(item.classList.contains('js-inview-lottie')){
            this.inviewLottie(item);
          }
          observerEnter.unobserve(item);
        }
      });
    }, options);
    const observerAll = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const item = entry.target;
        if(entry.intersectionRatio >= 0.9){
          item.classList.add('is-inview');
          if(item.classList.contains('js-inview-each')){
            this.inviewEachUp(item);
          }
          observerAll.unobserve(item);
        } else {
          item.classList.remove('is-inview');
        }
      });
    }, optionsAll);
    const inviewItem = document.querySelectorAll(this.el);
    const inviewAllItem = document.querySelectorAll(this.all);
    inviewItem.forEach((e)=>{
      observerEnter.observe(e);
    });
    inviewAllItem.forEach((e)=>{
      observerAll.observe(e);
    });
  }
  inviewEachUp(item){
    $(item).find(this.eachItem).each((i,el)=>{
      gsap.to($(el), {
        // duration: 0.8,
        // alpha: 1,
        delay: (0.2 * i),
        // y: 0,
        // x: 0,
        onComplete: ()=>{
          $(el).addClass('is-inview');
        }
      });
    });
    $(item).find(this.eachItemFast).each((i,el)=>{
      gsap.to($(el), {
        // duration: 0.8,
        // alpha: 1,
        delay: (0.1 * i),
        // y: 0,
        // x: 0,
        onComplete: ()=>{
          $(el).addClass('is-inview');
        }
      });
    });
    $(item).find(this.eachItemDelay).each((i,el)=>{
      gsap.to($(el), {
        // duration: 0.8,
        // alpha: 1,
        delay: (0.5 * i),
        // y: 0,
        // x: 0,
        onComplete: ()=>{
          $(el).addClass('is-inview');
        }
      });
    });
  }
  inviewLottie(item){
    if($(item).hasClass('js-lottie-flow')) {
      lottie.flow();
    }
    if($(item).hasClass('js-lottie-no01')) {
      lottie.no01();
    }
    if($(item).hasClass('js-lottie-no02')) {
      lottie.no02();
    }
    if($(item).hasClass('js-lottie-no03')) {
      lottie.no03();
    }
    if($(item).hasClass('js-lottie-no04')) {
      lottie.no04();
    }
    if($(item).hasClass('js-lottie-no05')) {
      lottie.no05();
    }
    if($(item).hasClass('js-lottie-no06')) {
      lottie.no06();
    }
    if($(item).hasClass('js-lottie-no07')) {
      lottie.no07();
    }
  }
}
