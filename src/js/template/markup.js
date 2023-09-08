//------------------Create markup of All Books---------------------------------------
function markupAllBooks(arr) {
  return arr
    .map(
      ({ _id, book_image, title, author }) =>
        `
      <li class="item-book card-set-item" data-id="${_id}">      
      <a href="" >

      <img src="${book_image}" alt="${title}" img-id="${_id}" loading="lazy" class="book-img"/>
        <h3 class="book-name">${title}</h3>
        <p class="book-author">${author}</p>
      </a></li>
    `
    )
    .join('');
}

//------------------ Create markup Top Books ---------------------------------------

function markupList(books) {
  return books
    .map(({ _id, book_image, title, author }) => {
      return `<li class="item-books card-set-item" id="${_id}">
      <a href="" >

        <img src="${book_image}" alt="${title}" img-id="${_id}" loading="lazy" class="book-img"/>
          <h3 class="book-name">${title}</h3>
          <p class="book-author">${author}</p>
      </a></li>`;
    })
    .join('');
}

function markupBlock(data) {
  return data
    .map(({ list_name, books }) => {
      return `<div class="home-wrapper"><h2 class="list-name">${list_name}</h2>
        <ul class="book-list">${markupList(books)}</ul>
        <btn class="btn-books" btn-id="${list_name}">See more</btn></div>`;
    })
    .join('');
}

export { markupAllBooks, markupBlock };
