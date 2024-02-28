import "./css/home.css";

// prettier-ignore
document.querySelector('#app').innerHTML = //html
`
  <div>
   <!-- LOADER#1 START -->
   <div class="container_loader">
   <div id="loader"></div>
</div>
<!-- LOADER#1 END -->
</div>
  
  <div style="display:none;" id="containerView1" class="animate-bottom">
        
        <!-- VIEW #1  start-->
        
        <div class="container_menu_hamburgueza">
          
            <div class="center">
                <div class="menu no_animation">
                    <div class="top active no-anim"></div>
                    <div class="middle active no-anim"></div>
                    <div class="bottom active no-anim"></div>
                </div>
            </div>
            <div class="containerWindow"></div>
        </div>
    
  <div class="containerTwo">
    

    <!-- modal -->  
    <!-- Trigger/Open The Modal -->
    <!-- <button id="myBtn">Open Modal</button> -->
<!-- The Modal -->
<div id="myModal" class="modal">


<!-- Modal content -->
<div class="modal_content">
<span class="close">&times;</span>
<img src="./" alt="" />
<!--<img src="./images/hina-cyborg-perfil-1.png" alt="hina">-->

<div class="user_cards" data-card-container>


<template data-template-users>
<div class="card">
<div class="header" data-header-card>
name
<div class="body_card" data-body-card>
vdc@gmail.com
</div></div></div>
</template>
</div>
</div>



</div>

<!--SEARCH HERE-->
<div class="search_engine"></div>
    <br />
    
    <br>



    <div class="portada">
        <div class="img_portada">
            <img src="./images/vinne-anime-recortada.png" alt="vinne">
        </div>
    </div>
</div>
</div>
  </div>

`

// MENU ANIMATION,CONFIG START
const menu = document.getElementsByClassName("menu")[0];
const container_menu_hamburgueza = document.getElementsByClassName(
  "container_menu_hamburgueza"
)[0];
const bars = menu.children;

container_menu_hamburgueza.addEventListener("click", () => {
  for (const element of bars) {
    element.classList.remove("no-anim");
    element.classList.toggle("active");
  }
});
// MENU ANIMATION END
const menuActive = document.getElementsByClassName("active_menu");
const menuDisplay = menuActive;
const bars2 = menu.classList;

const leftActive = document.getElementsByClassName("center")[0];
const linksInsideWindow = document.getElementsByClassName("containerWindow")[0];
function behavior_of_containerWindow() {
  menu.classList.toggle("active_menu");
  // document.getElementsByClassName('active_menu')[0].style.display='block';
  container_menu_hamburgueza.classList.toggle("fullScreenContainer");
  leftActive.classList.toggle("center_active");
  if (menu.classList.contains("active_menu")) {
    linksInsideWindow.style.display = "block";
    linksInsideWindow.innerHTML =
      //html
      `
        <div class="containerWindow">
        <div>home</div>
        <div>about</div>
        <div>contact</div>
        </div>
        `;
  } else {
    linksInsideWindow.style.display = "none";
  }
}
container_menu_hamburgueza.addEventListener("click", () => {
  behavior_of_containerWindow
    ? behavior_of_containerWindow()
    : container_menu_hamburgueza.removeEventListener(
        "click",
        behavior_of_containerWindow
      );
});
