console.log("Productlist virker");

const kategori = new URLSearchParams(window.location.search).get("category");
console.log("Kategori:", kategori);

const container = document.querySelector(".product-grid");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${kategori}`;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}

function showData(data) {
  console.log(data);

  let markup = "";

  data.forEach((element) => {
    markup += `
      <article class="product-card ${element.soldout ? "is-soldout" : ""} ${
        element.discount ? "is-offer" : ""
      }">
        <a href="product.html?id=${element.id}">
          <div class="image-wrapper">
            ${element.soldout ? `<span class="sold-label">Udsolgt</span>` : ""}

            ${element.discount ? `<span class="offer-label">Tilbud</span>` : ""}

            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
              alt="${element.productdisplayname}"
            />
          </div>

          <h2>${element.productdisplayname}</h2>
          <p class="brand">${element.brandname}</p>

          <div class="discount">
            <p class="price">${element.price} Kr.</p>
          </div>
        </a>
      </article>
    `;
  });

  container.innerHTML = markup;
}

getData();
