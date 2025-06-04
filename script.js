const categories = [
  { id: 'gift', name: 'لوازم کادویی' },
  { id: 'kitchen', name: 'آشپزخانه' },
  { id: 'plastic', name: 'پلاسکو' },
  { id: 'bedroom', name: 'خواب' },
  { id: 'accessory', name: 'اکسسوری' },
  { id: 'electronic', name: 'برقی' },
];

const products = [];
let id = 1;
categories.forEach(category => {
  for (let i = 1; i <= 20; i++) {
    products.push({
      id: id++,
      name: `${category.name} محصول ${i}`,
      category: category.id,
      price: Math.floor(Math.random() * 1000000) + 100000,
      discount: Math.random() > 0.7 ? Math.floor(Math.random() * 20) + 10 : 0,
      description: `توضیحات برای ${category.name} محصول ${i}`,
      image: `product${i}.jpg`,
    });
  }
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems) return;
  cartItems.innerHTML = cart.length === 0 ? '<p class="text-center">سبد خرید شما خالی است.</p>' : '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <div>
          <h3 class="font-semibold">${item.name}</h3>
          <p>تعداد: ${item.quantity} | قیمت واحد: ${item.price.toLocaleString()} تومان</p>
        </div>
        <button onclick="removeFromCart(${item.id})" class="text-red-600">حذف</button>
      </div>
    `;
  });
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = total.toLocaleString() + ' تومان';
}

function renderProducts() {
  const productList = document.getElementById('product-list');
  const discountList = document.getElementById('discount-list');
  if (!productList || !discountList) return;

  const topProducts = products.slice(0, 8);
  const discountedProducts = products.filter(p => p.discount > 0).slice(0, 4);

  productList.innerHTML = '';
  topProducts.forEach(product => {
    const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    productList.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-gray-600">${categories.find(c => c.id === product.category).name}</p>
          <p class="text-primary font-bold mt-2">${discountedPrice.toLocaleString()} تومان</p>
        </a>
        <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });

  discountList.innerHTML = '';
  discountedProducts.forEach(product => {
    const discountedPrice = Math.round(product.price * (1 - product.discount / 100));
    discountList.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-gray-600">${categories.find(c => c.id === product.category).name}</p>
          <p class="text-red-600 font-bold mt-2">${discountedPrice.toLocaleString()} تومان <span class="line-through text-gray-500">${product.price.toLocaleString()}</span></p>
        </a>
        <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });
}

function filterCategory(categoryId) {
  const categoryList = document.getElementById('category-product-list');
  const categoryTitle = document.getElementById('category-title');
  if (!categoryList || !categoryTitle) return;

  const category = categories.find(c => c.id === categoryId);
  categoryTitle.textContent = `محصولات ${category.name}`;
  categoryList.innerHTML = '';

  const categoryProducts = products.filter(p => p.category === categoryId);
  categoryProducts.forEach(product => {
    const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
    categoryList.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-lg font-semibold">${product.name}</h3>
          <p class="text-gray-600">${category.name}</p>
          <p class="text-primary font-bold mt-2">${discountedPrice.toLocaleString()} تومان</p>
        </a>
        <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const productDetails = document.getElementById('product-details');
  const comments = document.getElementById('comments');
  const relatedProducts = document.getElementById('related-products');
  if (!productDetails || !comments || !relatedProducts) return;

  const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
  productDetails.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="w-full h-64 md:h-96 object-cover rounded-md">
    </div>
    <div>
      <h2 class="text-xl md:text-2xl font-bold font-shabnam mb-4">${product.name}</h2>
      <p class="text-gray-600 mb-4">${product.description}</p>
      <p class="text-primary font-bold text-lg md:text-xl mb-4">${discountedPrice.toLocaleString()} تومان ${
        product.discount ? `<span class="line-through text-gray-500">${product.price.toLocaleString()} تومان</span>` : ''
      }</p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="bg-primary text-white py-2 px-6 rounded hover:bg-blue-700">افزودن به سبد خرید</button>
    </div>
  `;

  comments.innerHTML = `
    <div class="bg-white p-4 rounded-lg shadow-md">
      <p class="font-semibold">علی محمدی</p>
      <p class="text-yellow-500">★★★★☆</p>
      <p>کیفیت عالی و بسته‌بندی شیک، بسیار راضی بودم!</p>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <p class="font-semibold">زهرا احمدی</p>
      <p class="text-yellow-500">★★★☆☆</p>
      <p>محصول خوبیه ولی تحویل کمی طول کشید.</p>
    </div>
  `;

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  relatedProducts.innerHTML = '';
  related.forEach(p => {
    const relatedDiscountedPrice = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
    relatedProducts.innerHTML += `
      <div class="bg-gray-50 p-4 rounded-lg shadow-md">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-lg font-semibold">${p.name}</h3>
          <p class="text-gray-600">${categories.find(c => c.id === p.category).name}</p>
          <p class="text-primary font-bold mt-2">${relatedDiscountedPrice.toLocaleString()} تومان</p>
        </a>
        <button onclick="addToCart(${p.id}, '${p.name}', ${relatedDiscountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
      </div>
    `;
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const productList = document.getElementById('product-list');
    if (!productList) return;
    productList.innerHTML = '';
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm) || categories.find(c => c.id === p.category).name.toLowerCase().includes(searchTerm));
    filteredProducts.slice(0, 8).forEach(product => {
      const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
      productList.innerHTML += `
        <div class="bg-gray-50 p-4 rounded-lg shadow-md">
          <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
            <h3 class="text-lg font-semibold">${product.name}</h3>
            <p class="text-gray-600">${categories.find(c => c.id === product.category).name}</p>
            <p class="text-primary font-bold mt-2">${discountedPrice.toLocaleString()} تومان</p>
          </a>
          <button onclick="addToCart(${product.id}, '${product.name}', ${discountedPrice})" class="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 w-full">افزودن به سبد</button>
        </div>
      `;
    });
  });
}

function setupMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const categoriesToggle = document.getElementById('categories-toggle');
  const categoriesMenu = document.getElementById('categories-menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
  if (categoriesToggle && categoriesMenu) {
    categoriesToggle.addEventListener('click', () => {
      categoriesMenu.classList.toggle('hidden');
    });
  }
}

window.onload = () => {
  if (document.getElementById('product-list')) {
    renderProducts();
    setupSearch();
  }
  if (document.getElementById('product-details')) {
    renderProductPage();
  }
  updateCart();
  setupMenu();
};