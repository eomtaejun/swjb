// header
window.addEventListener("scroll", function(){
  const headerBackground=document.querySelector("#container header");
  const progressWrap=document.querySelector("#container header .progressWrap");
  const headerText=document.querySelectorAll("#container header a");

  if(document.documentElement.scrollTop<720){
    headerBackground.style.backgroundColor="transparent";
    progressWrap.style.backgroundColor="rgba(243, 243, 243, 0.1)";
    headerText.forEach(element => {
      element.classList.toggle("headerActive", false);
    });
  }
  else{
    headerBackground.style.backgroundColor="#0d0d0d";
    progressWrap.style.backgroundColor="rgba(243, 243, 243, 1)";
    headerText.forEach(element => {
      element.classList.toggle("headerActive", true);
    });
  }
});

// progress bar
let progressBar=document.querySelector("header .progressWrap .progressBar");

window.addEventListener("scroll", function(){
    let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollPercentage=(scrollTop/scrollHeight)*100;

    progressBar.style.width=scrollPercentage+"%";
});

// main mouse
const mouseIcon=document.querySelector(".mouse .mouseIcon");
const mouseText=document.querySelector(".mouse .text");

mouseIcon.addEventListener("mouseenter", function(){
    mouseText.classList.toggle("mouseActive", true);
});
mouseIcon.addEventListener("mouseleave", function(){
    mouseText.classList.toggle("mouseActive", false);
});

// main blur
window.addEventListener("scroll", function(){
    let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight=400;
    let blur=8*(1-scrollTop/scrollHeight);
  
    document.querySelector("#container .main").style.backdropFilter="blur("+blur+"px)";
  });

// about me image
aboutImage=document.querySelector(".about .contents .left img");
hiddenText=document.querySelector(".about .contents .right ul .hidden");

aboutImage.addEventListener("mouseenter", function(){
    hiddenText.classList.toggle("hiddenActive", true);
});
aboutImage.addEventListener("mouseleave", function(){
    hiddenText.classList.toggle("hiddenActive", false);
});

// top button
window.addEventListener("scroll", function(){
  const top_btn=document.querySelector(".top-button");
  
  if(document.documentElement.scrollTop<720) top_btn.style.display="none";
  else top_btn.style.display="block";
});

