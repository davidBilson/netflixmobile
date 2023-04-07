let accordion = document.querySelectorAll(".accordion");
let i;
let activeAccordion = null;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    if (activeAccordion && activeAccordion !== this) {
      var activePanel = activeAccordion.nextElementSibling;
      activePanel.style.display = "none";
      activeAccordion.classList.remove("active");
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      activeAccordion = null;
    } else {
      panel.style.display = "block";
      activeAccordion = this;
    }
  });
}