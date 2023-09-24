const userItems = document.querySelector(".link-top");
const linkUser = document.querySelector(".link-user");

userItems.onclick = () => {
  linkUser.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!userItems.contains(e.target) && !linkUser.contains(e.target)) {
    linkUser.classList.remove("active");
  }
});

const enterprener = document.querySelector("#enterprener");
const linkEnterprener = document.querySelector(".login-enterprener");

enterprener.onclick = () => {
  linkEnterprener.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!enterprener.contains(e.target) && !linkEnterprener.contains(e.target)) {
    linkEnterprener.classList.remove("active");
  }
});

const menu = document.querySelector("#menu");
const back = document.querySelector(".back");
const navbarLink = document.querySelector(".navbar-link");

menu.onclick = () => {
  navbarLink.classList.toggle("active");
};

back.onclick = () => {
  navbarLink.classList.remove("active");
};

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !back.contains(e.target)) {
    navbarLink.classList.remove("active");
  }
});

const search = document.querySelector("#search");
const inputSearch = document.querySelector("#input-search");

document.addEventListener("click", (e) => {
  if (search.contains(e.target) && inputSearch.type == "hidden") {
    inputSearch.type = "text";
    search.style.display = "none";
  } else {
    inputSearch.type = "hidden";
    search.style.display = "block";
  }
});

document.addEventListener("click", (e) => {
  if (inputSearch.contains(e.target)) {
    inputSearch.type = "text";
    search.style.display = "none";
  }
});
