document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.querySelector("ul");
  
    menuIcon.addEventListener("click", function () {
      menuList.classList.toggle("hidden");
    });
  });
  