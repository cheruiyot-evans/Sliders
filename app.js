import people from './data.js';
import getElement from './utils/getElement.js';

const container = getElement('.slider-container');
const nextBtn = getElement('.next-btn');
const prevBtn = getElement('.prev-btn');

const displayReview = () => {
  const slider = getElement('.slider');
  const peopleDisplay = people
    .map((person, slideIndex) => {
      console.table(person);
      const { img, name, job, text } = person;
      return `
   <article class="slide">
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>peter</h4>
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
