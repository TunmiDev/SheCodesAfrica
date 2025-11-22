const featuredBags = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: "₦120",
    image: "src/images/bag1.png",
  },
  {
    id: 2,
    name: "Mini Shoulder Bag",
    price: "₦140",
    image: "src/images/bag2.png",
  },
  {
    id: 3,
    name: "Brown Executive Bag",
    price: "₦180",
    image: "src/images/bag3.png",
  },
  {
    id: 4,
    name: "Vintage Handbag",
    price: "₦90",
    image: "src/images/bag4.png",
  },
  {
    id: 5,
    name: "Luxury Chain Bag",
    price: "₦200",
    image: "src/images/bag5.png",
  },
  {
    id: 6,
    name: "Soft Leather Purse",
    price: "₦80",
    image: "src/images/bag6.png",
  },
  {
    id: 7,
    name: "Elite Tote Bag",
    price: "₦150",
    image: "src/images/bag7.png",
  },
  {
    id: 8,
    name: "Premium Sling Bag",
    price: "₦110",
    image: "src/images/bag8.png",
  },
  {
    id: 9,
    name: "Premium Tote Bag",
    price: "₦110",
    image: "src/images/bag9.png",
  },
  {
    id: 10,
    name: "Classy Bag",
    price: "₦110",
    image: "src/images/bag10.png",
  },
];

const productsGrid = document.querySelector(".product-grid");
const searchInput = document.querySelector(".pinterest-search input");

// debounce that forwards args
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  const filteredBags = featuredBags.filter((bag) =>
    bag.name.toLowerCase().includes(query)
  );
  renderProducts(filteredBags);
}

function renderProducts(productsList) {
  productsGrid.innerHTML = "";

  productsList.forEach((bag) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${bag.image}" alt="${bag.name}" class="product-image" />
      <h3 class="product-name">${bag.name}</h3>
      <p class="product-price">${bag.price}</p>
    `;

    productsGrid.appendChild(card);
  });
}

// wire up search
searchInput.addEventListener("input", debounce(handleSearch, 300));

// initial render
renderProducts(featuredBags);
