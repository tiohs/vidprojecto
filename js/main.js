let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
}

window.addEventListener('scroll', ()=>{
  navbar.classList.remove('active');
});

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
  btn.onclick = () =>{
    let src = btn.getAttribute('data-src');
    document.querySelector('.about .video-container .video').src = src;
  }
});

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cont = document.querySelector(".cont");
cont.addEventListener("click", () => {

  modalOverlay.classList.add("active");
  modal.classList.add("active");
  document.querySelector("body").style.overflow = "hidden";
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
