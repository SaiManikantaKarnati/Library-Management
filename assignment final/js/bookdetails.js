const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const author = urlParams.get('author');
const title = urlParams.get('title');
const summary = urlParams.get('summary');
const img = urlParams.get('img');
const isbn = urlParams.get('isbn');
const categories = urlParams.get('categories');
const bookDetailsEle = document.getElementsByClassName("book-details-container")[0];
bookDetailsEle.innerHTML = `<h3 class="book-details__title">${title}</h3>
                            <img class="book-details__img" src ="${img}"/>
                            <h4 class="book-details__author">Author : ${author}</h4>
                            <p class="book-details__isbn"><b>ISBN Number :</b> ${isbn}</p>
                            <p class="book-details__categories"><b>Categories : </b>${categories}</p>
                            <p class="book-details__summary"><b>Summary :</b>${summary}</p>`;
