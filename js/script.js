document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenus = document.querySelectorAll(".hamburger-menu");

  hamburgerMenus.forEach((hamburgerMenu) => {
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");

      document.body.classList.toggle("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const classes = [
    "herro",
    "labaratory",
    "servicess",
    "welcome",
    "specialists",
    "comanda",
    "contacts",
  ];
  let index = 0; // Начнем с 'hero', так как это первый класс
  let touchStartX = null;

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };
  const handleTouchMove = (event) => {
    if (!touchStartX) return;

    const touchEndX = event.touches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX < -50 && index < classes.length - 1) {
      // Двигаем влево до последнего класса
      // Удаляем текущий класс
      document.body.classList.remove(classes[index]);

      // Увеличиваем индекс
      index++;

      // Добавляем новый текущий класс
      document.body.classList.add(classes[index]);

      // Сбрасываем начальную точку касания
      touchStartX = null;
    } else if (touchDiffX > 50 && index > 0) {
      // Двигаем вправо до первого класса
      // Удаляем текущий класс
      document.body.classList.remove(classes[index]);

      // Уменьшаем индекс
      index--;

      // Добавляем новый текущий класс
      document.body.classList.add(classes[index]);

      // Сбрасываем начальную точку касания
      touchStartX = null;
    }
  };

  document.body.addEventListener("touchstart", handleTouchStart);
  document.body.addEventListener("touchmove", handleTouchMove);
});
window.addEventListener("scroll", () => {
  console.log(`Scroll Y: ${window.scrollY}px`);
});

const spans = document.querySelectorAll(".span-stil, .span-put, .span-mir");
let index = 1; // Начинаем с 1, потому что первый элемент уже виден

function showNextSpan() {
  spans.forEach((span, i) => {
    if (i === index) {
      span.classList.add("visible");
      // Force reflow to restart animation
      void span.offsetWidth;
      span.classList.add("fade-in");
    } else {
      span.classList.remove("fade-in");
      span.classList.remove("visible");
    }
  });
  index = (index + 1) % spans.length;
}

setInterval(showNextSpan, 3000); // Меняем элемент каждые 4 секунды

let arrow = document.getElementById("arrow");
let hero = document.getElementById("hero");
let preview = document.getElementById("preview");

arrow.addEventListener("click", () => {
  document.body.classList.add("herro");
  preview.style.display = "none";
});

let buttons = {
  heroBtn: "herro",
  labBtn: "labaratory",
  serBtn: "servicess",
  comBtn: "comanda",
  contBtn: "contacts",
};

let prevClass = "";

// Функция для изменения цвета и размера dot
function updateDot(dot, color, size) {
  dot.style.backgroundColor = color;
  dot.style.width = size;
  dot.style.height = size;
}

// Изменение цвета и размера dot для первого элемента списка
document
  .querySelector(".bar--list .bar--item:first-child")
  .addEventListener("click", () => {
    let dot = document.querySelector(".bar--list .bar--item:first-child .dot");
    if (dot) {
      updateDot(dot, "#3A65FF", "10px");
    }
  });

for (let btn in buttons) {
  document.querySelector(`.${btn}`).addEventListener("click", () => {
    if (prevClass) {
      document.body.classList.remove(prevClass);
    }
    let newClass = buttons[btn];
    document.body.classList.add(newClass);
    document.body.classList.remove("active");
    prevClass = newClass;
  });
}
