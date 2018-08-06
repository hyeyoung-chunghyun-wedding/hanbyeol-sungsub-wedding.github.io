var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

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



// var url;
// daum.maps.event.addListener(map, 'click', function (mouseEvent) {
//     console.log("hi");
//     console.log("ios : " + isMobile.iOS())
//     console.log("android : " + isMobile.Android())
//     if (isMobile().iOS()) {
//         url = 'daummaps://search?q=W웨딩 목화웨딩컨벤션&p=35.188026, 129.080478'
//     }
//     else {
//         url = 'geo:35.188026, 129.080478?q=W웨딩 목화웨딩컨벤션'
//     }
//     window.location = url
// });