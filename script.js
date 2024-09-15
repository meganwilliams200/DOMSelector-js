// 1. Using getElementById to select the heading and change its text
const heading = document.getElementById('main-heading');
heading.textContent = 'DOM Manipulation Practice';

// 2. Using getElementsByClassName to select paragraphs with class text-content and change their color
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}

// 3. Using querySelector to select the container div and change its background color
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0';

// 4. Using querySelectorAll to select all paragraphs inside the container div and update their text
const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Updated content inside the container.';
});

// 5. Changing the source of the image with id main-image
const mainImage = document.getElementById('main-image');
mainImage.src = 'https://via.placeholder.com/300'; // new image source