document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".slide");
  const delay = 200;

  let visibleSections = [];

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function animateSections() {
    sections.forEach(function (section, index) {
      const isVisible = isInViewport(section);

      if (isVisible && !visibleSections.includes(section)) {
        visibleSections.push(section);
        setTimeout(function () {
          section.classList.add("slide-in-visible");
          section.classList.remove("slide-out");
        }, index * delay);
      } else if (!isVisible && visibleSections.includes(section)) {
        visibleSections = visibleSections.filter(function (item) {
          return item !== section;
        });
        section.classList.remove("slide-in-visible");
        section.classList.add("slide-out");
        setTimeout(function () {
          section.classList.remove("slide-out");
        }, delay);
      }
    });
  }

  window.addEventListener("scroll", function () {
    animateSections();
  });

  animateSections();
});
