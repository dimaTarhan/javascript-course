// const element = document.querySelector('.element[element]');
// const element = document.querySelectorAll('.element');
// console.dir(element[0]);

// const element = document.querySelector('#element-2');
// const element = document.getElementById('element-2');
// const elements = document.getElementsByTagName('div');
// const elements = document.getElementsByClassName('element');
// const element = document.querySelector('#element-2');
// element.classList.add('test-class');
// element.classList.remove('element');
// element.classList.toggle('class-toggle');
// element.classList.replace('class-toggle', 'element');
// element.textContent = 'Element 3';
// element.style.color = 'green';
// element.style.marginTop = '20px';
// element.style.color = null;
// console.dir(element);

// const containerElement = document.querySelector('.container');
// console.log(containerElement.children);

// const element = document.querySelector('#element-2');
// console.dir(element.previousElementSibling);


// const containerElement = document.querySelector('.container');
// containerElement.dataset.position = '5';
// console.dir(containerElement.dataset.position);


// const newElem = document.createElement('div');
// newElem.classList.add('new-element');
// newElem.textContent = 'New Element';
// const containerElement = document.querySelector('.container');
// containerElement.append(newElem);
// containerElement.prepend(newElem);

// const containerElement = document.querySelector('.container');
// console.log(containerElement.innerHTML);
//
// const newContainerElement = document.createElement('div');
// newContainerElement.classList.add('new-container');
// const oldContainerHtml = containerElement.innerHTML;
// newContainerElement.innerHTML = oldContainerHtml;
// document.body.append(newContainerElement);

// const containerElement = document.querySelector('.container');
// const newBlockElementStr = `
//   <div>
//     <div class="new-block">New Block Span 1</div>
//     <div class="new-block">New Block Span 2</div>
//   </div>
// `;
//
// console.log(newBlockElementStr);
// containerElement.insertAdjacentHTML('beforeend', newBlockElementStr);

// Завдання 1
// Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];
//
// const btnElementsArr = colors.map((buttonData) => {
//   const btnElement = document.createElement('button');
//   btnElement.textContent = buttonData.label;
//   btnElement.style.color = buttonData.color;
//   const containerElement = document.createElement('div');
//   containerElement.append(btnElement);
//   containerElement.style.marginBottom = '10px';
//   return containerElement;
// })
// console.log(btnElementsArr);
// document.body.append(...btnElementsArr);

// Завдання 2
// Створити список технологій що вивчаються на курсі Fullstack за допомогою js

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const itemsArr = technologies.map((technology) => {
//   return `<li>${technology}</li>`;
// })
// console.log(itemsArr);
// const listElement = `<ul>${itemsArr.join('')}</ul>`;
// document.body.insertAdjacentHTML('beforeend', listElement);

// Завдання 3
// Створити сайт з такою розміткою використовуючи лише JS. В html файлі має бути пусто

// <main id="main">
//   <h1 id="title">- Michel Legrand -</h1>
//
//   <figure id="img-div">
//     <img id="image"
//          src="https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg"
//          alt="Michel Legrand conducting his orchestra.">
//       <figcaption id="img-caption">Michel Legrand conducting his orcherstra.</figcaption>
//   </figure>
//
//   <article id="tribute-info">
//     <div id="intro">
//       <p>Michel Legrand (1932 - 2019) was a famous French musician.</p>
//     </div>
//
//     <p><u>Here are some major facts about him:</u></p>
//
//     <ul>
//       <li>He was born in Paris, France on February 24th, 1932.</li>
//       <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.</li>
//       <li>His sister was a Soprano and a member of the Swingle Singers.</li>
//       <li>Along his career, he composed more than two hundred film and television scores.</li>
//       <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
//       <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
//       <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the
//         American Hospital of Paris.</li>
//       <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
//     </ul>
//
//     <blockquote id="quote">
//       <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
//       <cite>-- Michel Legrand</cite>
//     </blockquote>
//   </article>
// </main>

// const article = {
//   title: '- Michel Legrand -',
//   image: {
//     src: 'https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg',
//     desc: 'Michel Legrand conducting his orchestra.'
//   },
//   intro: 'Michel Legrand (1932 - 2019) was a famous French musician.',
//   facts: {
//     label: 'Here are some major facts about him:',
//     items: [
//       'He was born in Paris, France on February 24th, 1932.',
//       'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
//       'His sister was a Soprano and a member of the Swingle Singers.',
//       'Along his career, he composed more than two hundred film and television scores.',
//       'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
//       'He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.',
//       'He died of sepsis during the night of the 25th to 26th January 2019 in the American Hospital of Paris.',
//       'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.',
//     ]
//   },
//   quote: {
//     text: 'Writing is a mental thing, while playing is essentially a physical feeling.',
//     author: '-- Michel Legrand'
//   }
// }
//
// const titleElement = `
//   <h1 id="title">${article.title}</h1>
// `;
//
// const imgElement = `
//   <figure id="img-div">
//     <img id="image" src="${article.image.src}" alt="${article.image.desc}">
//       <figcaption id="img-caption">${article.image.desc}</figcaption>
//   </figure>
// `;
//
// const introElement = `
//   <div id="intro">
//     <p>${article.intro}</p>
//   </div>
// `;
//
// const listTitleElement = `<p><u>${article.facts.label}</u></p>`;
// const factsArr = article.facts.items.map((fact) => {
//   return `<li>${fact}</li>`
// })
//
// const quoteElement = `
//     <blockquote id="quote">
//       <p>${article.quote.text}</p>
//       <cite>${article.quote.author}</cite>
//     </blockquote>
// `;
//
// const mainElement = `
//   <main id="main">
//     ${titleElement}
//     ${imgElement}
//     <article id="tribute-info">
//        ${introElement}
//        ${listTitleElement}
//        <ul>
//          ${factsArr.join('')}
//        </ul>
//        ${quoteElement}
//     </article>
//   </main>
// `;
//
// document.body.insertAdjacentHTML('afterbegin', mainElement);
