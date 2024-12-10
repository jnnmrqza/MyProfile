document.addEventListener("DOMContentLoaded", () => {
  // Typed effect
  const typed = new Typed(".typedText", {
    strings: ["JANNA MARQUEZ", "Aspiring Web Developer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  // Animation
  setTimeout(() => {
    // Animate Header
    document.querySelector(".header").classList.add("animate");

    // Animate About Me Section
    setTimeout(() => {
      document.querySelector(".about-me").classList.add("animate");
      document.querySelector(".image-container").classList.add("animate");
    }, 1000); 
  }, 500); 
});

document.addEventListener("DOMContentLoaded", () => {
  const projectLink = document.getElementById("project-link");
  const projectSection = document.getElementById("project-section");

  projectLink.addEventListener("click", () => {
    // Scroll to the project section
    projectSection.scrollIntoView({ behavior: "smooth" });
  });
});

