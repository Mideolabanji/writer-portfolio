function underlineAbout() {
  homepageLink.classList.remove("underline");
  underlineWorkLink.classList.remove("underline");
  underlineContactLink.classList.remove("underline");
  underlineAboutLink.classList.add("underline");
  underlineAboutLink.classList.remove("opacity");
  homepageLink.classList.add("opacity");
  underlineWorkLink.classList.add("opacity");
  underlineContactLink.classList.add("opacity");
}

function underlineWork() {
  homepageLink.classList.remove("underline");
  underlineAboutLink.classList.remove("underline");
  underlineContactLink.classList.remove("underline");
  underlineWorkLink.classList.add("underline");
  underlineWorkLink.classList.remove("opacity");
  homepageLink.classList.add("opacity");
  underlineAboutLink.classList.add("opacity");
  underlineContactLink.classList.add("opacity");
}

function underlineContact() {
  homepageLink.classList.remove("underline");
  underlineAboutLink.classList.remove("underline");
  underlineWorkLink.classList.remove("underline");
  underlineContactLink.classList.add("underline");
  underlineContactLink.classList.remove("opacity");
  homepageLink.classList.add("opacity");
  underlineAboutLink.classList.add("opacity");
  underlineWorkLink.classList.add("opacity");
}

let homepageLink = document.querySelector("#homepageLink");
let underlineAboutLink = document.querySelector("#aboutLink");
let underlineWorkLink = document.querySelector("#workLink");
let underlineContactLink = document.querySelector("#contactLink");
let contactButton = document.querySelector("#contact-button");
let projectButton = document.querySelector("#project-button");

underlineAboutLink.addEventListener("click", underlineAbout);
underlineWorkLink.addEventListener("click", underlineWork);
underlineContactLink.addEventListener("click", underlineContact);
contactButton.addEventListener("click", underlineContact);
projectButton.addEventListener("click", underlineWork);
