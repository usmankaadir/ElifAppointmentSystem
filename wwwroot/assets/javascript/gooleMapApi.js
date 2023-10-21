let map;
let infoObj = [];
let centerCords = { lat: 30.1798, lng: 66.975 };

//   Markers Placement on Map
var MarkersOnMap = [
  {
    placeName: "Quetta",
    name: "Dr. Ruby Perrin",
    image: "/assets/imgs/doctor-01.jpg",
    details: "MDS - Periodontology and Oral Implantology, BDS",
    Contry: "Florida",
    Time: "2 march",
    Money: "20,000",
    LatLng: [{ lat: 30.1798, lng: 66.975 }],
  },
  {
    placeName: "Multan",
    name: "Dr. Arthur Levis",
    image: "/assets/imgs/doctor-02.jpg",
    details: "MDS - Periodontology and Oral Implantology, BDS",
    Country: " Louisiana, USA",
    Time: "2 march",
    Money: "20,000",
    LatLng: [{ lat: 30.1575, lng: 71.5249 }],
  },
  {
    placeName: "Bahawalpur",
    name: "Dr. Deborah Angel",
    image: "/assets/imgs/doctor-04.jpg",
    details: "MBBS, MS - General Surgery, MCh - Urology",
    Country: "Canada",
    Time: "2 march",
    Money: "20,000",
    LatLng: [{ lat: 29.3544, lng: 71.6911 }],
  },
];

window.onload = function () {
  initMap();
};

// Adding Marker info function
function addMarkerInfo() {
  // Icon image
  let customIcon = {
    url: "/assets/imgs/map-icon.png",
    size: new google.maps.Size(32, 42),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 32),
    scaledSize: new google.maps.Size(32, 42),
  };
  for (var i = 0; i < MarkersOnMap.length; i++) {
    let contentString = `
          <div class="info-window">

        <div>
                      <div class="card-body">
                        <div class="article-img m-0">
                          <div class="grid-img">
                            <a>
                              <img
                                src="${MarkersOnMap[i].image}"
                                class="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div class="map-left-content">
                          <h3>
                            <a href="/doctor-profile.html">${MarkersOnMap[i].name}</a>
                            <i class="fas fa-check-circle verified"></i>
                          </h3>
                          <p class="fw-normal mb-1">
                            ${MarkersOnMap[i].details}
                          </p>
                          <div class="rating position-relative">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"> </i>
                            <i class="fas fa-star"> </i>
                            <span class="average-rating">(17)</span>
                          </div>
                          <ul class="available-info">
                            <li>
                              <i class="fas fa-map-marker-alt"></i> ${MarkersOnMap[i].Country}
                            </li>
                            <li>
                              <i class="far fa-clock"></i> ${MarkersOnMap[i].Time}
                            </li>
                            <li>
                              <i class="far fa-money-bill-alt"></i>${MarkersOnMap[i].Money}
                             
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
        </div>

          `;
    let marker = new google.maps.Marker({
      position: MarkersOnMap[i].LatLng[0],
      icon: customIcon,
      map: map,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });
    marker.addListener("click", () => {
      closeOtherInfo();
      infoWindow.open(marker.get("map"), marker);
      infoObj[0] = infoWindow;
    });
  }
}
function closeOtherInfo() {
  if (infoObj.length > 0) {
    infoObj[0].set("marker", null);
    infoObj[0].close();
    infoObj[0].length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: centerCords,
  });
  addMarkerInfo();
}

// search soctor 2 map

$(document).ready(function () {
  $("#map-location").on("click", function () {
    $("#container").toggleClass("container container-fluid");
    $("#map-right").toggleClass("d-none d-block");

    // Add appropriate classes to #mainContent and #map
    $("#map-view").toggleClass("col-xl-9 col-lg-12");
    $("#map-right").toggleClass("col-xl-3 col-lg-12");
  });
});
