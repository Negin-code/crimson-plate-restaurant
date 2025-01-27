
//const swiper:Creates a new instance of the Swiper object and assigns it to the swiper variable.
//new Swiper('.mySwiper'):Targets the HTML element with the class mySwiper and applies Swiper functionality to it.
//The class mySwiper is typically added to a <div> containing the slider content.

const swiper = new Swiper('.mySwiper', {
    loop: true,//Makes the slider loop infinitely, so when the user reaches the last slide, it automatically starts again from the first slide.
    autoplay: {//Enables automatic slide transitions.
      delay: 3000, //delay: 3000:Sets the time delay between slides to 3000 milliseconds (3 seconds).
    },
    pagination: { //Adds clickable pagination dots for navigation.
      el: '.swiper-pagination',//Targets the HTML element with the class swiper-pagination to render pagination dots.
      clickable: true,//Makes the pagination dots interactive, allowing users to jump to specific slides by clicking on them.
    },
    navigation: {//Adds "Next" and "Previous" buttons for navigation.
      nextEl: '.swiper-button-next',//Targets the HTML element with the class swiper-button-next to serve as the "Next" button.
      prevEl: '.swiper-button-prev',//Targets the HTML element with the class swiper-button-prev to serve as the "Previous" button.
    },
});
