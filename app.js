const sliderImages = ["slider-bg-2.jpg", "slider-bg-3.jpg",'slider-bg-1.jpg'];
const imgDiv = document.getElementById("slider");
// '1.jpg','slider-bg-1.jpg',
let start = 0;

const img=document.querySelector(".main-img");
// img.addEventListener("click",()=>{
//   console.dir(img.attributes[1].value);
// })

function slider() {
  if (start == sliderImages.length - 1) {
    start = 0;
  } else {
    start++;
  }
  // imgDiv.innerHTML = '<img class="main-img" src="' + sliderImages[start] + '"/>';
  // img.attributes[1].value="sliderImages[start]"
  img.setAttribute("src", sliderImages[start]);
}
setInterval(slider, 3000);

const liList = document.querySelectorAll("li");

liList.forEach((li) => {
  li.addEventListener("click", () => {
    liList.forEach((other) => {
      other.style.opacity = ".5";
    });

    li.style.opacity = "1";
  });
});

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// // When the button is clicked, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.style.transition = "all 2s";
  // window.scrollBy(0, 100); //scroll to down
});

let icon=document.querySelectorAll(".icn");

icon.forEach((item)=>{
  item.addEventListener("click",()=>{
    console.dir(item.classList[0]);
    item.classList.toggle("fa-solid");
    item.classList.toggle("fa-regular");
  })
})




let homeBtn=document.getElementById('def')
console.log(homeBtn)

window.addEventListener('scroll',()=>{
  let value=window.scrollY;
  // console.log(value);
  if(value<100){
    liList.forEach((li)=>{
      li.style.opacity=".5"
    })
    homeBtn.style.opacity="1";
  }
})

const subs=document.getElementById("myInp");
function sub(){
  const placeholderText = subs.getAttribute('placeholder');
  console.log(subs)
  alert(`The placeholder text is: "${placeholderText}"`);
}






// scrollToTopBtn.addEventListener("click", function () {
//     // Get the current scroll position
//     const currentScroll = document.documentElement.scrollTop;

//     // Define the target scroll position (in this case, 0 for the top)
//     const targetScroll = 0;

//     // Calculate the distance to scroll
//     const distance = targetScroll - currentScroll;

//     // Define the duration of the scroll animation in milliseconds
//     const duration = 1000; // 2 seconds

//     // Get the current time
//     const startTime = performance.now();

//     // Use requestAnimationFrame to update the scroll position smoothly
//     function scrollAnimation(currentTime) {
//         const elapsedTime = currentTime - startTime;

//         // Calculate the next scroll position using a easing function (e.g., easeInOutQuad)
//         const nextScroll = easeInOutQuad(elapsedTime, currentScroll, distance, duration);

//         // Set the scroll position
//         document.documentElement.scrollTop = nextScroll;

//         // Continue the animation if the duration hasn't elapsed
//         if (elapsedTime < duration) {
//             requestAnimationFrame(scrollAnimation);
//         }
//     }

//     // Start the animation
//     requestAnimationFrame(scrollAnimation);
// });

// // Easing function for smooth animation (you can use a different one if you prefer)
// function easeInOutQuad(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
// }
