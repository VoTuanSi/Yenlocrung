const API_URL = "https://script.google.com/macros/s/AKfycbydenCDd3TlvqKP3GXzlPl9Lqs-l6zWhOyMmX1c7jl-a3_EwmoOn8AVg29N6rXHAAiK/exec";

function mapCategory(cat) {
    if (!cat || typeof cat !== "string") return "nutritional";
    var c = cat.toLowerCase();
    if (/dinh dưỡng|dinh duong/.test(c)) return "nutritional";
    if (/chăm sóc|cham soc|toc|tóc|dau goi|dầu gội|rua mat|rửa mặt|danh rang|đánh răng|co the|cơ thể/.test(c)) return "care";
    if (/thảo mộc|thao moc|ha thu|hà thủ/.test(c)) return "herbal";
    return "nutritional";
}

function formatDriveUrl(url) {
    if (!url || typeof url !== 'string') return "";
    if (url.includes('drive.google.com')) {
        const match = url.match(/\/d\/(.+?)\/(view|edit|usp)/) || url.match(/\/d\/(.+?)$/);
        if (match && match[1]) {
            // Sử dụng link trực tiếp từ máy chủ ảnh Google
            return `https://lh3.googleusercontent.com/d/${match[1]}`;
        }
    }
    return url;
}

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Kết nối thất bại');
        
        const products = await response.json();
        const container = document.getElementById('product-container');
        
        if (!container || !products) return;

        container.innerHTML = products.map(item => {
            var img = formatDriveUrl(item.img || '');
            var name = (item.name || '').replace(/</g, '&lt;').replace(/"/g, '&quot;');
            var desc = (item.desc || '').replace(/</g, '&lt;').replace(/"/g, '&quot;');
            var price = (item.price || 'Liên hệ').replace(/</g, '&lt;');
            var cat = (item.category || item.Category || '').toString().trim();
            return '<div class="product-card" data-category="' + mapCategory(cat) + '">' +
                '<img src="' + img + '" alt="' + name + '">' +
                '<h3>' + name + '</h3>' +
                '<p class="desc">' + desc + '</p>' +
                '<p class="price">' + price + '</p>' +
                (cat ? '<small class="product-category">' + cat.replace(/</g, '&lt;') + '</small>' : '') +
                '<a href="https://zalo.me/0979502951" class="btn" target="_blank" rel="noopener">ĐẶT HÀNG NGAY</a>' +
                '</div>';
        }).join('');
    } catch (error) {
        console.error("Lỗi hiển thị:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);