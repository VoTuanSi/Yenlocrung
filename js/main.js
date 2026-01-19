let currentFilter = 'all';
let products = [];

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
    var btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function (b) { b.classList.remove('active'); });
    var activeBtn = document.querySelector('.filter-btn[data-filter="' + category + '"]');
    if (activeBtn) activeBtn.classList.add('active');
    var container = document.getElementById('product-container');
    var cards = container ? container.querySelectorAll('.product-card') : [];
    if (cards.length) {
        var visible = 0;
        cards.forEach(function (c) {
            var cat = (c.getAttribute('data-category') || 'nutritional');
            var show = (category === 'all' || cat === category);
            c.style.display = show ? '' : 'none';
            if (show) visible++;
        });
        var emptyEl = document.getElementById('product-empty-state');
        if (emptyEl) emptyEl.style.display = (visible === 0) ? 'flex' : 'none';
        return;
    }
    displayProducts();
}

function displayProducts() {
    var productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    var list = products || [];
    var filtered = currentFilter === 'all' ? list : list.filter(function (p) { return p && p.category === currentFilter; });
    productGrid.innerHTML = filtered.map(function (product) {
        return '<div class="product-card"><div class="product-image-wrapper"><img src="' + (product.img || '') + '" alt="' + (product.name || '') + '"></div><h3>' + (product.name || '') + '</h3><p class="product-desc">' + (product.desc || '') + '</p><p class="price">' + (product.price || '') + '</p><a href="https://zalo.me/0979502951" class="btn">ĐẶT HÀNG NGAY</a></div>';
    }).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    var grid = document.getElementById('product-grid');
    if (grid && typeof loadProducts === 'function') {
        loadProducts()
            .then(function (p) { products = p; displayProducts(); })
            .catch(function (e) { console.error('Lỗi load sản phẩm:', e); displayProducts(); });
    } else {
        if (document.getElementById('home')) showSection('home');
        displayProducts();
    }
});