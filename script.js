document.addEventListener('DOMContentLoaded', function() {
    // 取得主題切換的滑動開關與互動圖像的元素
    const themeToggle = document.getElementById('theme-toggle');
    const interactiveImage = document.getElementById('interactive-image');
  
    // 點擊圖像時播放脈衝動畫
    interactiveImage.addEventListener('click', function() {
      interactiveImage.style.animation = 'pulse 0.5s ease';
      setTimeout(() => {
        interactiveImage.style.animation = '';
      }, 500);
    });
  
    // 主題切換功能：監聽滑動開關的狀態變化，根據勾選狀態加入或移除 .light-theme 類別
    themeToggle.addEventListener('change', function() {
      document.body.classList.toggle('light-theme', this.checked);
    });
  });
  