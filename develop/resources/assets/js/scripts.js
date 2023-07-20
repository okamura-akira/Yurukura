//=include _pages/*
//=include _modules/*


(() => {

})();

//DOMContentLoaded
$(() => {
});

//images resources loaded
$(window).on('load', () => {

  $(window).trigger('loading');
});

//after loading animation
$(window).on('loading', () => {
  let imgParallax = new ImgParallax('js-parallax');
  let inviewEvent = new InviewEvent('.js-inview');
});

// スマホ・タブレットの向き判定
// $(window).on('orientationchange', ()=>{
//   if(isPortrait()){
//     console.log('isPortrait');
//   } else {
//     console.log('isLandscape');
//   }
// });