// Lấy các phần tử cần sử dụng
const slider = document.querySelector('.image-slider');
const slidesContainer = slider.querySelector('.slides-container');
const prevBtn = slider.querySelector('.prev-slide');
const nextBtn = slider.querySelector('.next-slide');

// Xử lý sự kiện khi nhấn nút sang trái
prevBtn.addEventListener('click', () => {
  const firstSlide = slidesContainer.children[0];
  slidesContainer.appendChild(firstSlide);
});

// Xử lý sự kiện khi nhấn nút sang phải
nextBtn.addEventListener('click', () => {
  const lastSlide = slidesContainer.children[slidesContainer.children.length - 1];
  slidesContainer.prepend(lastSlide);
});
