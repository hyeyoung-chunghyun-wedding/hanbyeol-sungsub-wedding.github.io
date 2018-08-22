// 모바일 에이전트 구분
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) == null ? false : true;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function openMap(platform) {
    if (!isMobile.any()) {
        if (platform == "kakao") {
            window.location = 'https://place.map.daum.net/24484800';
        }
        else {
            window.location = 'https://map.naver.com/local/siteview.nhn?code=34177589';
        }
    }
    else {
        if (platform == "kakao") {
            window.location = 'daummaps://place?id=24484800';
        }
        else {
            window.location = 'navermaps://?menu=location&pinType=place&lat=35.188026&lng=129.080478&title=W웨딩 목화웨딩컨벤션'
        }
    }
}

function createMap() {
    var markerPosition = new daum.maps.LatLng(35.188026, 129.080478);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var markers = [
        {
            position: markerPosition,
            text: 'W웨딩 목화웨딩컨벤션'
        }
    ]

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new daum.maps.LatLng(35.188026, 129.080478), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨,
            marker:markers
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new daum.maps.StaticMap(mapContainer, mapOption);
}

function openPhotoSwipe(p_index) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'images/1.jpg',
            w: 1200,
            h: 1476
        },
        {
            src: 'images/2.jpg',
            w: 1201,
            h: 1032
        },
        {
            src: 'images/3.jpg',
            w: 1200,
            h: 1800
        },
        {
            src: 'images/4.jpg',
            w: 1200,
            h: 812
        },
        {
            src: 'images/5.jpg',
            w: 1200,
            h: 826
        },
        {
            src: 'images/6.jpg',
            w: 1200,
            h: 830
        },
        {
            src: 'images/7.jpg',
            w: 1200,
            h: 800
        },
        {
            src: 'images/8.jpg',
            w: 1200,
            h: 796
        },
        {
            src: 'images/9.jpg',
            w: 915,
            h: 1394
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: p_index // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

window.onload = function () {
    createMap();
}