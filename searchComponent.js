import "./css/home.css";
import twitchIcon from "./images/twitch-icon-5.png";
import instagramIconImg from "./images/instagram.png";
import searchIcon from "./images/search-icon.png";
import youtubeIcon from "./images/white-youtube.png";

// prettier-ignore
document.querySelector(".search_engine").innerHTML =//html
  `
<div class="container_search_engine inputSelect">
<div class="input_search inputSelect">
<input 
id="input_searchId" class=" inputSelect" title="search" 
            
placeholder="COSITA HERMOZA!,COSITA BIEN HECHA!!!" 
            type="search" data-search
            >
            </div>
        <div class="object1"></div>
        <div class="icon_search">
          <img src="${searchIcon}" alt="icon-search" />
        </div>
        <br>
        <div class="social_networks">
        <div id="twitch_icon" class="icons_social_networks">
          <img src="${twitchIcon}" alt="twitch-icon-5" />
        </div>
        <div id="youtube_icon" class="icons_social_networks">
          <img src="${youtubeIcon}" alt="white-youtube" />
        </div>
        <div id="instagram_icon" class="icons_social_networks">
          <img src="${instagramIconImg}" alt="instagram" />
        </div>
      </div>

    </div>    
`;
// here start the config of cards
const userCardTemplate = document.querySelector("[data-template-users]");
const userCardContainer = document.querySelector("[data-card-container]");
const searchInputCard = document.querySelector("[data-search]");
let users = [];
searchInputCard.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });

  // console.log(users)
});
fetch("http://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header-card]");
      const bodyCard = card.querySelector("[data-body-card]");
      header.textContent = user.name;
      bodyCard.textContent = user.email;
      userCardContainer.append(card);
      // console.log(user);
      return { name: user.name, email: user.email, element: card };
    });
  });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector("#input_searchId");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
let elementsArray = document.querySelectorAll(".inputSelect");
var inputSearch = document.querySelector(".input_search");
btn.oninput = function () {
  if (btn.value !== 0) {
    modal.style.display = "block";
    document.querySelector(".modal").style.paddingTop = "360px";
  }
  btn.innerHTML = btn.value;

  // console.log( btn.innerHTML)-----
};
btn.onclick = function () {
  document.querySelector(".modal").style.paddingTop = "350px";
  modal.style.display = "block";
  // console.log(elementsArray);
  // console.log(document.querySelector('.modal').style.paddingTop)
  // console.log(document.getElementsByClassName("input_search"));
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// CONFIGS AND EFFECTS OF  SOCIALS

const windowOfSearchs = document.getElementById("input_search");
const object1 = document.querySelector(".object1");
const instagramIcon = document.getElementById("instagram_icon");

// console.log(windowOfSearchs);
function modify() {
  if (object1.style.display === "none") {
    object1.style.display = "block";
  } else {
    object1.style.display = "none";
  }
}
function linkConEspera() {
  setTimeout(() => window.open("https://www.instagram.com/victorcode_/"), 3000);
}
instagramIcon.addEventListener("click", linkConEspera, false);
// windowOfSearchs.addEventListener("click",modify,false)
// alert('searching data...')
// const object1=document.createElement('div')
