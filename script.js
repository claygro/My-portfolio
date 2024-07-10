let a = document.querySelector("#first");
let b = document.querySelector("#second");
let c = document.querySelector("#third");
let d = document.querySelector(".nav-btn");
a.addEventListener("click", () => {
  document.querySelector("#first").style.color = "#00abf0";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
});
b.addEventListener("click", () => {
  document.querySelector("#second").style.color = "#00abf0";
  document.querySelector("#first").style.color = "white";
  document.querySelector("#third").style.color = "white";
});
c.addEventListener("click", () => {
  document.querySelector("#third").style.color = "#00abf0";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#first").style.color = "white";
});
d.addEventListener("click", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
});
const show = () => {
  document.querySelector(".menu-nav-section").style.display = "flex";
  document.querySelector(".menu-btn").style.display = "none";
};
const hide = () => {
  document.querySelector(".menu-nav-section").style.display = "none";
  document.querySelector(".menu-btn").style.display = "flex";
};
// scroll change effect.
let scroll = document.querySelector(".scroll");
let scroll3 = document.querySelector("#about");
let scroll5 = document.querySelector(".all-work-section");
let scroll7 = document.querySelector(".hire");
scroll.addEventListener("mouseover", () => {
  document.querySelector("#first").style.color = "#00abf0";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.color = "white";
});
scroll.addEventListener("mouseout", () => {
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.color = "white";
});
scroll3.addEventListener("mouseover", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "#00abf0";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.color = "white";
});
scroll3.addEventListener("mouseout", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.color = "white";
});
scroll5.addEventListener("mouseover", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "#00abf0";
  document.querySelector(".nav-btn").style.color = "white";
});
scroll5.addEventListener("mouseout", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.color = "white";
});
scroll7.addEventListener("mouseover", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.backgroundColor = "#00acf0";
});
scroll7.addEventListener("mouseout", () => {
  document.querySelector("#first").style.color = "white";
  document.querySelector("#second").style.color = "white";
  document.querySelector("#third").style.color = "white";
  document.querySelector(".nav-btn").style.backgroundColor = "transparent";
});

// auto text write
