AOS.init({
    duration: 400, //Sets the duration of the animation to 400 milliseconds (0.4 seconds).This controls how long the animation effect lasts as the element transitions into view.we can adjust this value to make the animation faster (e.g., 200ms) or slower (e.g., 800ms).
    
    once: false //When once: false, animations will re-trigger every time the element scrolls into view.If set to true, the animation will only occur once as the element enters the viewport for the first time.
  });