let tabsNode = document.getElementsByClassName("tab");
let contentsNode = document.getElementsByClassName("content");
let lineBorder = document.querySelector(".line-border");

let tabsLength = tabsNode.length;

for (let index1 = 0; index1 < tabsLength; index1++) {
  tabsNode[index1].onclick = function () {
    tabsNode[index1].classList.add("active");
    contentsNode[index1].classList.add("active");
    Object.assign(lineBorder.style, {
      width: "25%",
      left: `${index1 * 25}%`
    });
    for (let index2 = 0; index2 < tabsLength; index2++) {
      if (index2 !== index1) {
        if (tabsNode[index2].classList.contains("active")) {
          contentsNode[index2].classList.remove("active");
          tabsNode[index2].classList.remove("active");
        }
      }
    }
  };
}
