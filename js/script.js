// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navigation menu toggle for mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".navbar") &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Get the target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Smooth scroll to target
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for header height
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Update active navigation link on scroll
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Get all sections
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filterValue = this.getAttribute("data-filter");

      // Filter projects
      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Skill progress bars animation
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent + "%";
    });
  }

  // Animate progress bars when skills section is in viewport
  const skillsSection = document.querySelector("#skills");

  function checkIfInView() {
    const skillsPosition = skillsSection.getBoundingClientRect();

    // If skills section is in viewport
    if (skillsPosition.top < window.innerHeight && skillsPosition.bottom >= 0) {
      animateProgressBars();
      window.removeEventListener("scroll", checkIfInView);
    }
  }

  window.addEventListener("scroll", checkIfInView);
  checkIfInView(); // Check on initial load

  // Form submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For now, we'll just log it to the console
      console.log("Form submitted:", { name, email, subject, message });

      // Show success message (you can customize this)
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Add animation to elements when they come into view
  const animatedElements = document.querySelectorAll(
    ".hero-content, .about-content, .skills-content, .projects-grid, .contact-content"
  );

  function animateOnScroll() {
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect();

      // If element is in viewport
      if (
        elementPosition.top < window.innerHeight &&
        elementPosition.bottom >= 0
      ) {
        element.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Check on initial load
});
