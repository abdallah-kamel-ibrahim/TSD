if(localStorage.getItem("loggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "admin.html";
}

function loadProducts() {
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      // هنا هنعرض المنتجات في جدول مع Edit/Delete
      console.log(data);
    });
}

// Add Product
function addProduct(title, price, image, description) {
  let products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push({title, price, image, description});
  localStorage.setItem('products', JSON.stringify(products));
  alert("Product added!");
}

// Edit/Delete نفس الفكرة باستخدام index
