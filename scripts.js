document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // 스크롤 애니메이션
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 모바일 메뉴 닫기
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 모바일 환경 감지 및 적용
    function checkMobile() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 992;
        if (isMobile) {
            document.body.classList.add('mobile-view');
            
            // iOS 기기에 대한 추가 처리
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                document.body.classList.add('ios-device');
                
                // 특정 iOS 버전에 대한 처리 (iPhone 12 등)
                if (/iPhone13|iPhone12/i.test(navigator.userAgent)) {
                    document.body.classList.add('iphone12');
                }
            }
        }
    }
    
    // 초기 실행
    checkMobile();
    
    // 서비스 아이템에 호버 효과 추가
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
        
        // 클릭 가능한 아이템으로 만들기
        item.style.cursor = 'pointer';
        
        // 클릭 시 링크로 연결
        item.addEventListener('click', function() {
            const serviceText = this.querySelector('.service-text p').textContent;
            
            // 각 서비스에 따른 링크
            if (serviceText.includes('Woodworking')) {
                window.location.href = "https://booking.naver.com/booking/6/bizes/823502?area=pll";
            } else if (serviceText.includes('STAY #1')) {
                window.location.href = "https://www.airbnb.co.kr/h/sozemok1";
            } else if (serviceText.includes('STAY #2')) {
                window.location.href = "https://www.airbnb.co.kr/h/sozemok2";
            } else if (serviceText.includes('Inquiring')) {
                window.location.href = "https://pf.kakao.com/_QbExhxj";
            }
        });
    });
    
    // 소셜 아이템 클릭 이벤트
    const socialItems = document.querySelectorAll('.social-item');
    
    socialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
        
        // 클릭 가능한 아이템으로 만들기
        item.style.cursor = 'pointer';
        
        // 클릭 시 인스타그램으로 연결
        item.addEventListener('click', function() {
            const socialText = this.querySelector('.social-text p').textContent;
            const instagramUrl = `https://www.instagram.com/${socialText.slice(1)}`;
            window.location.href = instagramUrl;
        });
    });
    
    // 모바일 반응형을 위한 코드
    function checkScreenSize() {
        const productImage = document.querySelector('.product-image img');
        
        if (window.innerWidth <= 992) {
            productImage.style.maxHeight = '450px';
        } else {
            productImage.style.maxHeight = '90%';
        }
    }
    
    // 초기 실행 및 화면 크기 변경 시 실행
    checkScreenSize();
    window.addEventListener('resize', function() {
        checkScreenSize();
        checkMobile();
    });
    
    // 방향 전환 감지 (아이폰 가로/세로 모드 전환 시)
    window.addEventListener('orientationchange', function() {
        checkMobile();
        checkScreenSize();
    });
}); 