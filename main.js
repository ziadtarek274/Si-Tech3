const phone = "201127203547";

function buyProduct(name, price) {
  const message =
`السلام عليكم 👋

عايز أشتري المنتج ده:

📦 المنتج: ${name}
💰 السعر: ${price}

ممكن تفاصيل الطلب وطريقة الاستلام؟`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-details")) {
    const card = e.target.closest(".product-card");
    const name = card.querySelector(".product-title").innerText;
    const price = card.querySelector(".product-price").innerText;

    const message =
`السلام عليكم 👋

كنت محتاج تفاصيل أكتر عن المنتج:

📦 المنتج: ${name}
💰 السعر: ${price}

ممكن المواصفات والتفاصيل؟`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
});