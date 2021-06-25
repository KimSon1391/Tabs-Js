const tabList = document.querySelectorAll(".news__tabs-list .tab");
const tabItem = document.querySelectorAll(".news-wrap");

tabList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tabList.forEach((_btn) => _btn.classList.remove("active"));
    e.target.classList.add("active");
    tabItem.forEach((contentItem) => contentItem.classList.remove("active"));
    document
      .querySelector(`.news-wrap[data-tab='${e.target.id}']`)
      .classList.add("active");
  });
});
