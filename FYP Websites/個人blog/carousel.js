// carousel.js - 完全修正版
document.addEventListener('DOMContentLoaded', function() {
    
    const images = document.querySelectorAll('.image-original');
    
    if (images.length === 0) return;
    
    let currentIndex = 0;
    
    // 重要：強制將所有圖片嘅 display 還原，確保佢哋係 block 元素
    images.forEach(img => {
        img.style.display = 'block';
    });
    
    // 1. 建立輪播容器
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    carouselWrapper.style.position = 'relative';
    carouselWrapper.style.margin = '20px 0';
    
    // 2. 將所有圖片放入 wrapper（用 parentNode 重新插入）
    const parent = images[0].parentNode;
    parent.insertBefore(carouselWrapper, images[0]);
    
    images.forEach(img => {
        carouselWrapper.appendChild(img);
    });
    
    // 3. 設定圖片容器樣式，確保圖片正常顯示
    images.forEach(img => {
        img.style.margin = '0';
        img.style.width = '100%';
    });
    
    // 4. 顯示特定索引嘅圖片
    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }
    
    // 5. 建立按鈕
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '❮';
    prevBtn.style.cssText = `
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        background-color: rgba(0,0,0,0.5);
        color: white;
        border: none;
        font-size: 1.8rem;
        padding: 8px 15px;
        cursor: pointer;
        border-radius: 8px;
        z-index: 10;
    `;
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '❯';
    nextBtn.style.cssText = `
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background-color: rgba(0,0,0,0.5);
        color: white;
        border: none;
        font-size: 1.8rem;
        padding: 8px 15px;
        cursor: pointer;
        border-radius: 8px;
        z-index: 10;
    `;
    
    // 6. 按鈕功能
    prevBtn.onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };
    
    nextBtn.onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };
    
    // 7. 加入按鈕
    carouselWrapper.appendChild(prevBtn);
    carouselWrapper.appendChild(nextBtn);
    
    // 8. 顯示第一張
    showImage(0);
    
    console.log('輪播成功啟動！當前顯示第 1 張');
});