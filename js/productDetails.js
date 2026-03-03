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
      <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
        alt="${product.productdisplayname}"
      />

      <h1>${product.productdisplayname}</h1>
      <p class="brand">Brand: ${product.brandname}</p>
      <p class="price">${product.price} Kr.</p>
      <p>Category: ${product.category}</p>
      <p>${product.description}</p>
    </article>
  `;
}

getData();
