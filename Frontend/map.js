mapboxgl.accessToken = "sk.eyJ1Ijoic3ViaGVrc2hhYmg5OCIsImEiOiJjbWkzNDF6N2EwZWYwMmtxdmE4MGE1NHp5In0.mebYtks1SP2uViXiy1lbLQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-4.0, 56.8],
  zoom: 5.2
});

async function uploadFile() {
  const file = document.getElementById("fileInput").files[0];
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  // Example plotting mock coordinates
  data.forEach(row => {
    new mapboxgl.Marker()
      .setLngLat([ -3.18, 55.95 ])
      .addTo(map);
  });
}
<script src="map.js"></script>
