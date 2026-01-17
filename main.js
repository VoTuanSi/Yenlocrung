let currentFilter = 'all';

function showSection(sectionId) {
    // Ẩn tất cả các page
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Hiển thị page được chọn
    const activePage = document.getElementById(sectionId);
    if (activePage) {
        activePage.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Cập nhật active class cho nav links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
}

function filterCategory(category) {
    // Cập nhật filter button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Lọc sản phẩm
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterProducts(category) {
    currentFilter = category;
    
    // Cập nhật active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    displayProducts();
}

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    const filtered = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    productGrid.innerHTML = filtered.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <p class="price">${product.price}</p>
            <a href="https://zalo.me/0979502951" class="btn btn-primary">Đặt hàng ngay</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị trang chủ mặc định
    showSection('home');
    displayProducts();
});