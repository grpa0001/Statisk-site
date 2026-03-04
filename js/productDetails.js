console.log("Productdetails virker");
const id = new URLSearchParams(window.location.search).get("id");

const container = document.querySelector(".product-page");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}

function showData(product) {
  console.log(product);

  container.innerHTML = `
    <a class="back-link" href="javascript:history.back()">← Back</a>
    <article class="product-detail">
      <div class="product-image-wrapper">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="${product.productdisplayname}"
          class="product-image-large"
        />
      </div>
      <h1>${product.productdisplayname}</h1>
      <p class="brand">Brand: ${product.brandname}</p>
      <div class="price-block">
        <span class="price">${product.price} Kr.</span>
        ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ""}
      </div>
      <p class="stock-status">${product.soldout ? "Ikke på lager" : "På lager"}</p>
      <button class="add-to-basket" type="button">Læg i kurv</button>
      <p class="category">Kategori: ${product.category}</p>
      <p class="description">${product.description}</p>
    </article>
  `;
}

getData();
