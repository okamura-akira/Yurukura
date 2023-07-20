//noScroll
class ImgParallax {
  constructor(el,opt){
    this.el = el;
    if($("." + this.el).length > 0){
      this.event();
    }
  }
  event(){
    this.para_ele = document.querySelectorAll("." + this.el);
    this.para_ele.forEach((ele, index)=> {
      if(ele.classList.contains('js-parallax--reverse')) {
        this.translateY = '20px';
      } else {
        this.translateY = '-20px';
      }
      ele.classList.add(this.el + index);
      gsap.to('.' + this.el + index + ' img', {
        translateY: this.translateY,
        scrollTrigger: {
          trigger: '.' + this.el + index, // 要素がビューポートに入ったときにアニメーション開始
          start: 'top bottom',
          scrub: 3,
        }
      })
    })
  }
}
