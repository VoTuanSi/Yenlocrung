const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw_3TQQo0qeqDrtGKGm4q8VdKGRXUb1VWUXAKYn0upwlp-iMKzOQWruAiuL8VMKQNL-/exec';

async function loadNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();

        if (data && data.length > 0) {
            container.innerHTML = ''; 

            // Đảo ngược để tin mới nhất lên đầu
            data.reverse().forEach(row => {
                // Xử lý ngày tháng đẹp hơn
                const dateObj = new Date(row[1]);
                const formattedDate = isNaN(dateObj) ? row[1] : `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

                const html = `
                    <article class="news-item">
                        <div class="news-img-wrapper">
                            <img src="${row[3] || 'https://via.placeholder.com/200'}" alt="${row[0]}" onerror="this.src='https://via.placeholder.com/200'">
                        </div>
                        <div class="news-info">
                            <span class="news-date">${formattedDate}</span>
                            <h3>${row[0]}</h3>
                            <p>${row[2] || 'Cập nhật kiến thức sống khỏe cùng Yến Lộc Rừng...'}</p>
                            <a href="#" class="read-more">XEM CHI TIẾT</a>
                        </div>
                    </article>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });
        }
    } catch (error) {
        console.error('Lỗi load tin:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadNews);