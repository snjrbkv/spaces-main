document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenus = document.querySelectorAll(".hamburger-menu");

  hamburgerMenus.forEach((hamburgerMenu) => {
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
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
