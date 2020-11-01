const accBtn = document.querySelectorAll(".acc-btn");

accBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const accContent = btn.parentElement.nextElementSibling;
    if (accContent.style.maxHeight) {
      accContent.style.maxHeight = null;
      btn.classList = "acc-btn far fa-plus-square";
    } else {
      accContent.style.maxHeight = accContent.scrollHeight + "px";
      btn.classList = "acc-btn far fa-minus-square";
    }
  });
});
