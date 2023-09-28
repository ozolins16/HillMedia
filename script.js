
// function sendEmail(){
//     const name = document.getElementById('text')
//     const email = document.getElementById('email')
//     const message = document.getElementById('message')



//     Email.send({
//         Host: "smtp.elasticemail.com",
//         SecureToken:  'ffc5241e-e2d8-46a5-b6ff-720797857538',
//         To : 'linardsozolins16@gmail.com',
//         From : email,
//         Subject: name,
//         Body : message
//     }).then(
//       message => alert(message)
//     );
// }

// const carousel = document.querySelector(".carousel");
// const firstImg = document.getElementById('first-img');
// const arrowIcons = document.querySelectorAll('.wrapper i');

// let isDragStart = false;
// let prevPageX, isDragging = false, prevScrollLeft, positionDiff = 0;

// arrowIcons.forEach(icon => {
//   let firstImgWidth = firstImg.clientWidth;
//   icon.addEventListener('click', () => {
//     if (icon.id == 'left') {
//       carousel.scrollLeft -= firstImgWidth;
//     } else {
//       carousel.scrollLeft += firstImgWidth;
//     }
//   })
// })


// video
// const video = document.getElementById('portfolio-video');
// const playButton = document.getElementsByClassName('play-btn')[0];

// function hideVideo() {
//   video.setAttribute("id", "corner-video")
// }

// function showVideo() {
//   video.style.display = 'block';
//   video.setAttribute("id", "portfolio-video")
// }

// function playVideo() {
//   showVideo();
//   video.play();
//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   } else if (video.mozRequestFullScreen) {
//     video.mozRequestFullScreen();
//   } else if (video.webkitRequestFullscreen) {
//     video.webkitRequestFullscreen();
//   } else if (video.msRequestFullscreen) {
//     video.msRequestFullscreen();
//   }

//   video.addEventListener('ended', function () {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//       hideVideo(); // Hide the video when exiting fullscreen
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//       hideVideo();
//     } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//       hideVideo();
//     }
//   });
// }

// video.addEventListener('fullscreenchange', function () {
//   if (!document.fullscreenElement) {
//     hideVideo(); // Hide the video when exiting fullscreen through the controls
//   }
// });

// playButton.addEventListener('click', playVideo);


// scroll animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
const hiddenRightElements = document.querySelectorAll('.hidden-right');

hiddenLeftElements.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));

// hamburger

const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  navButton.classList.remove('active')
  navLinks.classList.remove('active')
}));






