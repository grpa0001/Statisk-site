const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const container = document.querySelector(".categories-grid");

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}

function showData(data) {
  let markup = "";

  data.forEach((productCategory) => {
    markup += `
      <a class="category-card" 
         href="productlist.html?category=${productCategory.category}">
         ${productCategory.category}
      </a>
    `;
  });

  container.innerHTML = markup;
}

getData();
