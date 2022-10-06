//Mapa con tres punteros 
function initMap() {

  const granVia = { lat: 40.420179, lng: -3.7039276 };
  const krakstad = { lat: 59.6813358, lng: 10.8835983 };
  const zurich = { lat: 47.3666700, lng: 8.5500000 };
  const europa = { lat: 50.989199, lng: 11.9707795};
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: europa,
  });

  const marker = new google.maps.Marker({
    position: granVia,
    map: map,
  });
  
  const marker = new google.maps.Marker({
    position: krakstad,
    map: map,
  });
  
  const marker = new google.maps.Marker({
    position: zurich,
    map: map,
  });
}

window.initMap = initMap;
