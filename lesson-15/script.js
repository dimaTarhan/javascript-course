// const scrollElem = document.querySelector('.scroll');
// const scrollValueElem = document.querySelector('.scroll-value');
//
// const throttleHandler = _.throttle(setScrollValue, 500, { leading: false });
//
//
// scrollElem.addEventListener('scroll', throttleHandler);
// function setScrollValue(event) {
//   scrollValueElem.textContent = `${Math.ceil(scrollElem.scrollTop)}px`
// }

// const inputElem = document.querySelector('input');
// const searchValueElem = document.querySelector('.search-value');
// const debounceHandler = _.debounce(setSearchValue, 500, { maxWait: 2000 });
// inputElem.addEventListener('input', debounceHandler);
// function setSearchValue() {
//   searchValueElem.textContent = inputElem.value;
// }

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250
// });
//
// document.addEventListener('keyup', closeGallery);
// function closeGallery(event) {
//   console.log(event.code);
//
//   if (event.code === 'Space') {
//     lightbox.close();
//   }
// }

// Завдання 1
// Написати форму логіна та паролья де буде відбуватися валідація
// полів на довжину після закінчення введення тексту. (Використати дебаунс)

// const loginElem = document.querySelector('input[name="login"]');
// const passwordElem = document.querySelector('input[name="password"]');
// const debounceHandler = _.debounce(checkValidation, 300);
//
// loginElem.addEventListener('input', debounceHandler);
// passwordElem.addEventListener('input', debounceHandler);
//
// function checkValidation(event) {
//   console.log(event);
//   console.log(event.target.name);
//   if (event.target.name === 'login') {
//     event.target.value.length < 10
//       ? loginElem.nextElementSibling.textContent = 'Field length must be min 10 chars'
//       : loginElem.nextElementSibling.textContent = '';
//   } else {
//     event.target.value.length < 15
//       ? passwordElem.nextElementSibling.textContent = 'Field length must be min 15 chars'
//       : passwordElem.nextElementSibling.textContent = '';
//   }
// }

// Завдання 2
// Реалізувати нескінченне завантаження за допомогою intersection observer

// ПОЧАТКОВІ ДАННІ ДЛЯ СТОРІНКИ
const defaultArticleContent = [
  {
    title: 'Close-Up Photography of Sleeping Tabby Cat',
    img: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
  },
  {
    title: 'Photo of Grey Tabby Kitten Lying Down',
    img: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
  },
  {
    title: 'Orange Kitten',
    img: 'https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
  },
  {
    title: 'Photo of Tabby Cat Sleeping On Chair',
    img: 'https://images.pexels.com/photos/2817421/pexels-photo-2817421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
  }
];

// МЕТОД СТВОРЕННЯ ТЕМПЛЕЙТУ З ДАННИХ
function getContentTemplate(dataArr) {
  const contentArr = dataArr.map((item) => {
    return `
      <h3>${item.title}</h3>
      <img class="lazyload" data-src="${item.img}" alt="${item.title}">
      <p>${item.description}</p>
    `;
  })

  return contentArr.join('');
}

// ВСТАВЛЯЮ ПОЧАТКОВИЙ КОНТЕНТ НА СТОРІНКУ В КОНТЕЙНЕР З КЛАСОМ article
document.body.insertAdjacentHTML('afterbegin', `<div class="article">${getContentTemplate(defaultArticleContent)}</div>`)

// ІМІТУЮ ДАННІ, ЯКІ БУДУТЬ ЗАВАНТАЖУВАТИСЯ З БЕКУ
const paginationData = {
  '2': [
    {
      title: 'Brown Cat With Green Eyes',
      img: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    },
    {
      title: 'Photo of Grey Tabby Kitten Lying Down',
      img: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    },
    {
      title: 'Close-Up Photography of Sleeping Tabby Cat',
      img: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    },
    {
      title: 'Orange Kitten',
      img: 'https://images.pexels.com/photos/1440403/pexels-photo-1440403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    }
  ],
  '3': [
    {
      title: 'Photo of Tabby Cat Sleeping On Chair',
      img: 'https://images.pexels.com/photos/2817421/pexels-photo-2817421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    },
    {
      title: 'Close-Up Photography of Sleeping Tabby Cat',
      img: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    },
    {
      title: 'Photo of Grey Tabby Kitten Lying Down',
      img: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    },
    {
      title: 'Brown Cat With Green Eyes',
      img: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=960',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugiat, error quisquam alias eaque officia cum quasi enim libero a molestiae repudiandae repellat deserunt debitis deleniti vel accusantium. Aut enim doloremque ullam quibusdam consequatur in repellendus beatae? Aspernatur sequi fugit vero provident ea perspiciatis eos officia non reiciendis adipisci ipsa, nemo, similique, molestias rerum totam debitis nulla a iure inventore! Eum, voluptatem, sit corrupti at molestiae rerum nulla ratione optio est alias perspiciatis quas. Aliquam libero placeat, distinctio unde deleniti minus commodi at maiores officiis doloremque quae voluptates quia aliquid doloribus, vero aspernatur, aperiam corrupti dicta eligendi rerum? In, voluptate.'
    }
  ]
}


const articleElem = document.querySelector('.article');

// МЕТОД ДЛЯ ПОШУКУ ОСТАННЬОГО ВУЗЛОВОГО ЕЛЕМЕНТА В БЛОЦІ articleElem
function getLastElem() {
  return articleElem.lastElementChild;
}

// ІНІЦІАЛІЗАЦІЯ ОБЗЕРВЕРА З ПАРАМЕТРАМИ
const observer = new IntersectionObserver(loadContent, { root: null, rootMargin: '0px 0px 400px 0px', threshold: 0 });

// ВІДРАЗУ ПОЧИНАЄМО СЛІДКУВАТИ ЗА ОСТАННІМ ЕЛЕМЕНТОМ БЛОКУ
observer.observe(getLastElem());

let currentPage = 1;

// ІМІТУЮ ПІДВАНТАЖЕННЯ ДАННИХ НА СТОРІНКУ - ЦЕ КОЛБЕК ФУНКЦІЯ ЯКА ВІДПРАЦЬОВУЄ З ОБЗЕРВЕРА
// entries - ЦЕ ПАРАМЕТР, ЯКИЙ ПЕРЕДАЄ ОБЗЕРВЕР (МОЖНА ПОДИВИТИСЯ В ДОЦІ)
function loadContent(entries) {
  // ПЕРЕВІРЯЄМО ЧИ ЗНАХОДИТЬСЯ ЕЛЕМЕНТ, ЩО ВІДСТІЛКОВУЄТЬСЯ В ПОЛІ ЗОРУ ОБЗЕРВЕРА
  // ПРИ ВСТАНОВЛЕНІ ОБЗЕРВЕРА, ВІДРАЗУ ВИКЛИКАЄТЬСЯ КОЛБЕК
  if (!entries[0].isIntersecting) return;
  currentPage += 1;
  // ВІДПИСУЮСЬ ВІД ОСТАННЬОГО ЕЛЕМЕНТА, ТОМУ ЩО ВІН ВЖЕ БУДЕ НЕ ОСТАННІМ
  observer.unobserve(getLastElem());

  if (currentPage < 4) {
    // ДОБАВЛЯЮ НА СТОРІНКУ НОВИЙ КОНТЕНТ
    const newContent = getContentTemplate(paginationData[currentPage]);
    articleElem.insertAdjacentHTML('beforeend', newContent);
    // ПІДПИСУЮ ОБЗЕРВЕР НА НОВИЙ ОСТАННІЙ ЕЛЕМЕНТ
    observer.observe(getLastElem());
  }
}


