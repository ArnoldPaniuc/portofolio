document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuList = document.querySelector("ul");

  // Initially hide the menu by setting its display to "none"
  menuList.style.display = "none";

  menuIcon.addEventListener("click", function () {
      // Toggle the display property between "grid" and "none"
      if (menuList.style.display === "grid") {
          menuList.style.display = "none";
      } else {
          menuList.style.display = "grid";
      }
  });
});

  