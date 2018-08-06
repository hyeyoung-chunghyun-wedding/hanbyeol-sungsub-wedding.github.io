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
    if (isMobile.any()) {
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
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new daum.maps.LatLng(35.188026, 129.080478), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new daum.maps.Map(mapContainer, mapOption);
    map.setZoomable(false);
    map.setDraggable(false);
    var markerPosition = new daum.maps.LatLng(35.188026, 129.080478);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new daum.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다 
        position: markerPosition
    });
    var infowindow = new daum.maps.InfoWindow({
        content: '<div style="width:150px;text-align:center;padding:6px 0;">목화웨딩홀 벨루스홀</div>'
    });
    infowindow.open(map, marker);
    // 지도에 마커를 표시합니다
    marker.setMap(map);
}

window.onload = function () {
    createMap()
}