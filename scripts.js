var scrollbar=0,opacityVal;
function load(){
  navreveal();
  const bg = document.querySelector('.slide');
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5 ;
  bg.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;
    const bg = document.querySelector('.background-image');
    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
  window.addEventListener('wheel', function(event){
  navbar();
});
  setTimeout(initial0,500);
  setTimeout(initial0,2000);
  setTimeout(initial1,2500);
  setInterval(hover,500);
  setTimeout(unhide,3100);
  load1();
  setInterval(load1,8000);
}
function hover(){
  document.getElementById('arr').classList.toggle("hov");
}
function load1(){
  //setTimeout(initial3,3000);
  //setTimeout(initial3,6000);
  setTimeout(initial2,3000);
  setTimeout(initial2,6000);
  setTimeout(initial3,7000);
  setTimeout(initial3,10000);
}
function unhide(){
  document.getElementById('pl_1_p').classList.add("active");
  document.getElementById('pl_1_l').classList.add("active");
  document.getElementById('arr').classList.add("active");
  document.getElementById('lnks1').classList.add("active");
  document.getElementById('lnks2').classList.add("active");
  document.getElementById('lnks3').classList.add("active");
  document.getElementById('lnks4').classList.add("active");
  document.getElementById('nav').style.opacity=1;
}
function initial0(){
  document.getElementById("pl_1_logo").classList.toggle("active1");
}
function initial1(){
  document.getElementById("pl_1_dark").classList.add("deactive");
  document.getElementById("pl_1_logo").classList.add("active2");
}
function initial2(){
  document.getElementById("pl_1_p1").classList.toggle("active");
  document.getElementById("pl_1_l1").classList.toggle("active");
}
function initial3(){
  document.getElementById("pl_1_p2").classList.toggle("active");
  document.getElementById("pl_1_l2").classList.toggle("active");
}
function underline(){
  document.getElementById("nav_home").classList.toggle("active");
}
function navbar(){
  document.getElementById("pl_1_p").style.opacity=1-(window.scrollY/300);
  document.getElementById("pl_1_l").style.opacity=1-(window.scrollY/300);
  if(event.deltaY < 0){
  navreveal();
}
 else if (event.deltaY > 0){
  document.getElementById('nav').classList.remove("active");
  document.getElementById('nav_logo').classList.add("hide");
  document.getElementById('nav_home').classList.add("hide");
  document.getElementById('nav_ohome').classList.add("hide");
  document.getElementById('nav_partner').classList.add("hide");
  document.getElementById('nav_about').classList.add("hide");
  document.getElementById('nav_switch').classList.add("hide");
}
}
function navreveal(){
  if(window.scrollY==0){
    document.getElementById('nav').classList.remove("active");
    document.getElementById('nav_logo').classList.add("default");
    document.getElementById('nav_home').classList.add("default");
    document.getElementById('nav_ohome').classList.add("default");
    document.getElementById('nav_partner').classList.add("default");
    document.getElementById('nav_about').classList.add("default");
    document.getElementById("nav_logo").src="Images/logo.png";
  }
  else{
  document.getElementById('nav').classList.add("active");
  document.getElementById('nav_switch').classList.remove("hide");
  document.getElementById('nav_logo').classList.remove("hide","default");
  document.getElementById('nav_ohome').classList.remove("hide","default");
  document.getElementById('nav_home').classList.remove("hide","default");
  document.getElementById('nav_partner').classList.remove("hide","default");
  document.getElementById('nav_about').classList.remove("hide","default");
  document.getElementById("nav_logo").src="Images/logo3.png";
  }
}
function med(zz){
  switch(zz){
    case 0:document.getElementById("medal1").classList.toggle("medal");break;
    case 1:document.getElementById("medal2").classList.toggle("medal");break;
  }
}
