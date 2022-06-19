let tabsNode = document.getElementsByClassName("tab");
let contentsNode = document.getElementsByClassName("content");

let tabsLength = tabsNode.length;

for (let index1 = 0; index1 < tabsLength; index1++) {
  tabsNode[index1].onclick = function () {
    let activeTab = document.querySelector(".active");
    let activeContent = document.querySelector(".active-content");

    if (activeTab.classList.contains("active")) {
      activeTab.classList.remove("active");
    }
    if (activeContent.classList.contains("active-content")) {
      activeContent.classList.remove("active-content");
    }

    tabsNode[index1].classList.add("active");
    contentsNode[index1].classList.add("active-content");
  };
}
