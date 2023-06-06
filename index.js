const founding = document.getElementById("gruendung");
const foundingSection = document.querySelector(".gruendung-section");

founding.addEventListener("click", () => {
  foundingSection.style.display = "grid";
  foundingSection.scrollIntoView({ behavior: "smooth" });
  document.getElementById("main").style.display = "none";
});

const closeButton = document
  .querySelector(".close")
  .addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("main").style.display = "grid";
    await(2);
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".gruendung-section").style.display = "none";
  });
