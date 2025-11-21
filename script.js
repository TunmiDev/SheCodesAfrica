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

const productsSection = document.querySelector(".products-section");
const productsGrid = document.querySelector(".product-grid");
featuredBags.forEach((bag) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${bag.image}" alt="${bag.name}" class="product-image" />
    <h3 class="product-name">${bag.name}</h3>
    <p class="product-price">${bag.price}</p>
  `;
  productsGrid.appendChild(card);
});
