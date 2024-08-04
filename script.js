//your code here
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");

  let dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = "0.4";
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }

  function handleDragEnter() {
    this.classList.add("selected");
  }

  function handleDragLeave() {
    this.classList.remove("selected");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
  }

  function handleDragEnd() {
    this.style.opacity = "1";
    images.forEach((image) => {
      image.classList.remove("selected");
    });
  }

  images.forEach((image) => {
    image.addEventListener("dragstart", handleDragStart);
    image.addEventListener("dragenter", handleDragEnter);
    image.addEventListener("dragover", handleDragOver);
    image.addEventListener("dragleave", handleDragLeave);
    image.addEventListener("drop", handleDrop);
    image.addEventListener("dragend", handleDragEnd);
  });
});
