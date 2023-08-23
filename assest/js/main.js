// tin tức
document.getElementById('next').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}
document.addEventListener("DOMContentLoaded", () => {
  //Lấy thẻ HTML có id là "hamburger-menu" và "nav-menu"
  //và lưu vào biến `hamburgermenu` và `navmenu`
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const navMenu = document.querySelector("#nav-menu");
  //Gán một event listener cho nút "hamburger-menu" để xử lý sự kiện click.
  hamburgerMenu.addEventListener("click", () => {
    // //Callback function được gọi khi click xảy ra.
    hamburgerMenu.classList.toggle("active");
    //Trong callback, class "active" được thêm hoặc xóa khỏi `hamburgermenu`
    navMenu.classList.toggle("active");
    //và `navmenu` bằng cách sử dụng `classList.toggle()`
  });
});

// ĐẾM SỐ
const numbers = [
  { id: "daily-count", value: 4000 },
  { id: "star-count", value: 5000 },
  { id: "app-count", value: 150 },
];

numbers.forEach((number) => {
  const element = document.getElementById(number.id);
  element.setAttribute("final-number", number.value);
});

function animateNumber(
  elementId,
  finalNumber,
  duration = 3000,
  startNumber = 0
) {
  let currentNumber = startNumber;
  const increment = Math.ceil(finalNumber / (duration / 17));
  const element = document.getElementById(elementId);
  const interval = setInterval(() => {
      currentNumber = Math.min(currentNumber + increment, finalNumber);
      element.innerText = currentNumber.toLocaleString();
      if (currentNumber >= finalNumber) {
          clearInterval(interval);
      }
  }, 17);
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
  );
}

let animationTriggered = false;

function checkElementsVisibility() {
  const elementsToAnimate = document.querySelectorAll(".count-animate");

  elementsToAnimate.forEach((element) => {
      if (isElementInViewport(element)) {
          if (!element.classList.contains("animated")) {
              const finalNumber = parseInt(
                  element.getAttribute("final-number")
              );
              animateNumber(element.id, finalNumber);
              element.classList.add("animated");
          }
      }
  });

  if (
      !animationTriggered &&
      isElementInViewport(document.getElementById("daily-count"))
  ) {
      numbers.forEach(({ id, value }) => {
          animateNumber(id, value);
      });
      animationTriggered = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", checkElementsVisibility);
  checkElementsVisibility();
});
