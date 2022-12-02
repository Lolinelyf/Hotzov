const tabs = document.querySelector(".js-wrapper");
const tabButton = document.querySelectorAll(".js-tabs");
const contents = document.querySelectorAll(".js-content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(item => {
      item.classList.remove("active");
    });
    const elementContent = document.getElementById(id);
    elementContent.classList.add("active");
  }
}