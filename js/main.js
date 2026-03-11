const navList = document.querySelector(".nav-list");
const allLinks = document.querySelectorAll(".nav-link");

const handleClick = (event) => {
  const clickedLink = event.target.closest(".nav-link");

  if (!clickedLink) return;

  allLinks.forEach((link) => {
    link.classList.remove("active");
  });

  clickedLink.classList.add("active");
};

navList.addEventListener("click", handleClick);

// modal
const openModalBtn = document.querySelector(".hero-button");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");
const handleModalOpen = () => {
  modalBackdrop.classList.add("is-open");
};
const handleModalClose = () => {
  modalBackdrop.classList.remove("is-open");
};
openModalBtn.addEventListener("click", handleModalOpen);
closeModalBtn.addEventListener("click", handleModalClose);

// mob-menu
const openMenuBtn = document.querySelector(".burger-btn");
const closeMenuBtn = document.querySelector(".mob-close-btn");
const mobMenu = document.querySelector(".mob-menu");

const handleOpenMenu = () => {
  mobMenu.classList.add("is-open");
};
const handleCloseMenu = () => {
   mobMenu.classList.remove("is-open");
};

openMenuBtn.addEventListener("click", handleOpenMenu)
closeMenuBtn.addEventListener("click", handleCloseMenu)