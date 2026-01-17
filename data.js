const products = [
    {
        id: 1,
        name: "Bột Sương Sâm Lamoi-Pro (50g)",
        price: "175.000đ",
        category: "nutritional",
        img: "images/botsuongsam.jpg",
        desc: "Bột sương sâm Lamoi-Pro được làm từ lá sương sâm lông tự nhiên, chế biến sạch, giữ hương vị thanh mát đặc trưng. Sản phẩm hỗ trợ thanh nhiệt, giải độc và bổ sung chất xơ hòa tan cho cơ thể."
    },
    {
        id: 2,
        name: "Bột Đậu Ngũ Hành (500g)",
        price: "168.000đ",
        category: "nutritional",
        img: "images/dau-ngu-hanh.jpg",
        desc: "Bột đậu ngũ hành là sự kết hợp của 5 loại đậu rang theo nguyên lý âm dương ngũ hành. Sản phẩm giàu đạm thực vật, chất xơ và khoáng chất, phù hợp cho nhiều đối tượng sử dụng hằng ngày."
    },
    {
        id: 3,
        name: "Bột Sắn Dây (500g)",
        price: "115.000đ",
        category: "nutritional",
        img: "images/botsanday.jpg",
        desc: "Bột sắn dây được làm từ củ sắn dây ta nguyên chất, mịn, dễ hòa tan. Sản phẩm giúp thanh nhiệt, hỗ trợ tiêu hóa và mang lại cảm giác mát lành cho cơ thể."
    },
    {
        id: 4,
        name: "Thông Xoang Tử (20ml)",
        price: "120.000đ",
        category: "care",
        img: "images/thong-xoang.jpg",
        desc: "Thông xoang tử hỗ trợ làm thông mũi, giảm nghẹt mũi và tạo cảm giác dễ chịu khi thời tiết thay đổi. Sản phẩm phù hợp sử dụng hằng ngày để chăm sóc đường hô hấp trên."
    },
    {
        id: 5,
        name: "Bột Dạ Dày (100g)",
        price: "400.000đ",
        category: "herbal",
        img: "images/da-day.jpg",
        desc: "Bột dạ dày được phối trộn từ các thảo mộc truyền thống, hỗ trợ trung hòa axit và bảo vệ niêm mạc dạ dày. Sản phẩm phù hợp cho người hay khó chịu vùng thượng vị và hệ tiêu hóa nhạy cảm."
    },
    {
        id: 6,
        name: "Bổ Tỳ (100g)",
        price: "400.000đ",
        category: "herbal",
        img: "images/bo-ty.jpg",
        desc: "Bổ Tỳ giúp hỗ trợ tiêu hóa, tăng khả năng hấp thu dưỡng chất và cải thiện cảm giác ăn uống. Sản phẩm phù hợp cho người ăn kém, mệt mỏi, cơ thể suy nhược."
    },
    {
        id: 7,
        name: "Bột Đánh Răng Thảo Mộc (10g)",
        price: "Tặng kèm",
        category: "care",
        img: "images/Kemdanhrang.jpg",
        desc: "Bột đánh răng thảo mộc được làm từ lá và rễ cây rừng, giúp làm sạch răng miệng tự nhiên. Sản phẩm hỗ trợ giảm mùi hôi miệng và chăm sóc nướu răng nhẹ dịu."
    },
    {
        id: 8,
        name: "Bột Rửa Mặt Thảo Mộc (50g)",
        price: "90.000đ",
        category: "care",
        img: "images/bot-mat.jpg",
        desc: "Bột rửa mặt được làm từ bột nghệ lên men kết hợp tinh dầu bưởi. Sản phẩm giúp làm sạch da nhẹ nhàng, hỗ trợ sáng da và phù hợp với làn da nhạy cảm."
    },
    {
        id: 9,
        name: "Hà Thủ Ô Đỏ Mật Ong Lên Men (1kg)",
        price: "1.500.000đ",
        category: "herbal",
        img: "images/ha-thu-o.jpg",
        desc: "Hà thủ ô đỏ được chế biến kỹ và lên men cùng mật ong, sử dụng theo liệu trình truyền thống. Sản phẩm hỗ trợ bồi bổ cơ thể, tăng cường sức khỏe và chăm sóc tóc từ bên trong."
    },
    {
        id: 10,
        name: "Vỏ Bưởi Sấy Giòn (150g)",
        price: "75.000đ",
        category: "herbal",
        img: "images/vo-buoi-gion.jpg",
        desc: "Vỏ bưởi non được sấy giòn kết hợp cùng các nguyên liệu tự nhiên. Sản phẩm hỗ trợ giảm cảm giác thèm ăn, hỗ trợ tiêu hóa và mang hương vị dễ dùng."
    },
    {
        id: 11,
        name: "Vỏ Bưởi Sấy Dẻo (200g)",
        price: "113.000đ",
        category: "herbal",
        img: "images/vo-buoi-deo.jpg",
        desc: "Vỏ bưởi sấy dẻo làm từ vỏ bưởi già, chế biến mềm dẻo, dễ nhai. Sản phẩm hỗ trợ tiêu hóa, giúp cơ thể nhẹ nhàng và dễ sử dụng mỗi ngày."
    },
    {
        id: 12,
        name: "Bột Ngâm Chân Mộc An (50g)",
        price: "100.000đ",
        category: "care",
        img: "images/ngam-chan.jpg",
        desc: "Bột ngâm chân Mộc An giúp làm ấm cơ thể, thư giãn gân cốt sau ngày dài vận động. Sản phẩm hỗ trợ giảm mệt mỏi, giúp ngủ ngon và chăm sóc bàn chân."
    },
    {
        id: 13,
        name: "Bột Khử Mùi Mộc Hương (10g)",
        price: "50.000đ",
        category: "care",
        img: "images/khu-mui.jpg",
        desc: "Bột khử mùi Mộc Hương giúp khử mùi cơ thể tự nhiên, đặc biệt vùng dưới cánh tay và bàn chân. Sản phẩm dịu nhẹ, an toàn cho cả người lớn và trẻ em."
    },
    {
        id: 14,
        name: "Dầu Gội Hương Rừng (500ml)",
        price: "275.000đ",
        category: "care",
        img: "images/dau-goi.jpg",
        desc: "Dầu gội Hương Rừng chiết xuất từ thảo mộc thiên nhiên, giúp làm sạch tóc và da đầu nhẹ nhàng. Sản phẩm hỗ trợ giảm gàu, giảm rụng tóc và mang lại hương thơm mộc mạc, dễ chịu."
    }
];