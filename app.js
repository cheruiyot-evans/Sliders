import people from './data.js';
import getElement from './utils/getElement.js';

const container = getElement('.slide-container');
const nextBtn = getElement('.next-btn');
const prevBtn = getElement('.prev-btn');

const displayReview = () => {
  const peopleDisplay = people
    .map((person, slideIndex) => {
      // console.table(person);
      const { img, name, job, text } = person;
      let position = 'next';
      if (slideIndex === 0) {
        position = 'active';
      }
      if (slideIndex === people.length - 1) {
        position = 'last';
      }
      return `
   <article class="slide ${position}">
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>
  `;
    })
    .join('');
  container.innerHTML = peopleDisplay;
};

displayReview();

const startSlider = (type) => {
  const active = getElement('.active');
  const last = getElement('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(['next']);
    next.classList.add('last');
    return;
  }

  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};

nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});
