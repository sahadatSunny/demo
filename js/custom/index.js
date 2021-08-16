let accrodion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accrodion.length; i++) {
  accrodion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
