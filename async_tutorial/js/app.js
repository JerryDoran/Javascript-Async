// fetch('https://dog.ceo/api/breeds/list/all')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let timer;
let deleteFirstPhotoDelay;

async function getDogData() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log(data);
    createBreedList(data.message);
  } catch (e) {
    console.log('There was a problem fetching the breed list');
  }
}

function createBreedList(breedList) {
  const breed = document.getElementById('breed');
  breed.innerHTML = `
    <select onchange="loadByBreed(this.value)">
      <option>Choose a dog breed</option>
      ${Object.keys(breedList)
        .map((breed) => {
          return `<option>${breed}</option>`;
        })
        .join('')}
    </select>  
  `;
}

async function loadByBreed(breed) {
  if (breed !== 'Choose a dog breed') {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    createSlideShow(data.message);
  }
}

function createSlideShow(images) {
  let currentPosition = 0;
  clearInterval(timer);
  clearTimeout(deleteFirstPhotoDelay);

  if (images.length > 1) {
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
    `;
    currentPosition += 2;
    if (images.length === 2) currentPostion = 0;
    timer = setInterval(nextSlide, 3000);
  } else {
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide"></div>
    `;
  }

  function nextSlide() {
    const slideshow = document.getElementById('slideshow');
    slideshow.insertAdjacentHTML(
      'beforeend',
      `<div class='slide' style="background-image: url('${images[currentPosition]}')"></div>`
    );
    deleteFirstPhotoDelay = setTimeout(() => {
      document.querySelector('.slide').remove;
    }, 1000);
    if (currentPosition + 1 >= images.length) {
      currentPosition = 0;
    } else {
      currentPosition += 1;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => getDogData());
