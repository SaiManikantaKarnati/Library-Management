const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0c8e346fcbmshefe3d6c1f6bcfeap172f25jsn0f7979b8b900',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};

const fetchBooks = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("total data: ", data);
    const results = data.results;
    const totalBooks = document.querySelector(".bookContainer");
    results.forEach((book) => {
      let bookCard = document.createElement("div");
      bookCard.classList = "book-card";
      const href = `./bookdetails.html?
        author=${book.authors[0]}&
        title=${book.title}&
        summary=${book.summary}&
        categories=${book.categories[0]}&
        img=${book.published_works[0].cover_art_url}&
        isbn=${book.published_works[0].isbn}`;

      bookCard.innerHTML = `
        <div class="book-image">
          <img src="${book.published_works[0].cover_art_url}" alt="Book Cover">
        </div>

        <div class="book-details">
          <p class="book-title">${book.title}</p>
          <p class="book-author"><b>Author :</b> ${book.authors[0]}</p>
          <p class="book-pages"><b>Number of pages :</b> ${book.published_works[0].page_count} pages</p>
          <p class="book-isbn"><b>ISBN Number :</b> ${book.published_works[0].isbn}</p>
          <p class="book-genre"><b>Genre :</b> ${book.categories[0]}</p>
          <a href=${href} class="more-details" target="_blank">More details</a>
        </div> `;
      bookCard.addEventListener("click", () => show({ 
        author: `${book.authors[0]}`, 
        title: `${book.title}`, 
        summary: `${book.summary}`,
        categories: `${book.categories[0]}`,
        isbn: `${book.published_works[0].isbn}`,
        img: `${book.published_works[0].cover_art_url}`
      }));
      totalBooks.appendChild(bookCard);
      //bookCard.onclick = () => redirectToBookDetails(book);
    });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

const show = (details) => {
  window.open(`./bookdetails.html?author=${details.author}&title=${details.title}&summary=${details.summary}&categories=${details.categories}&isbn=${details.isbn}&img=${details.img}`,'_newtab');
}

fetchBooks();

document.addEventListener("DOMContentLoaded", function() {
  var navbarContainer = document.querySelector(".navbar");
  var username = localStorage.getItem("Full name");
  var profileDropdownElement = navbarContainer.querySelector("#profileDropdown");
  if (profileDropdownElement) {
    profileDropdownElement.textContent = "Hi, " + username;
  }
});
