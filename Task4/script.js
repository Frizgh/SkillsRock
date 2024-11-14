const img = document.querySelectorAll('.img_container img');
const prevBtn = document.getElementById('prev_btn');
const nextBtn = document.getElementById('next_btn');

let currentIndex = 0;

function activateCarousel() {
    const offset = -currentIndex * 100;   //создание отрицательного  значения на которое будем сдвигать
    document.querySelector('.img_container').style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : img.length - 1; // Проверка текущего индекса,
    activateCarousel();                                                    //если больше нуля, тогда у текущего индекса отнять 1
                                                                           //а сократить длину изубражений на 1
});

nextBtn.addEventListener('click', () => {
   currentIndex = (currentIndex < img.length - 1) ? currentIndex + 1 : 0;
   activateCarousel();
});

// Автоматическое переключение раз в 3с на следующий слайд
setInterval(() => {
   currentIndex = (currentIndex < img.length - 1) ? currentIndex + 1 : 0;
   activateCarousel();
}, 3000)


//PS решал с подсказками (загуглим сам способ translate и идею индекса)