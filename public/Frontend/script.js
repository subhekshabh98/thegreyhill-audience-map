
mapboxgl.accessToken = "sk.eyJ1Ijoic3ViaGVrc2hhYmg5OCIsImEiOiJjbWkzNDF6N2EwZWYwMmtxdmE4MGE1NHp5In0.mebYtks1SP2uViXiy1lbLQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-3.5, 57],
  zoom: 5.3
});

fetch("http://localhost:3000/upload", {
  method: "POST",
  body: formData
})

