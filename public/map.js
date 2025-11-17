// -- 1) Mapbox access token --
mapboxgl.accessToken =
  "sk.eyJ1Ijoic3ViaGVrc2hhYmg5OCIsImEiOiJjbWkzNDF6N2EwZWYwMmtxdmE4MGE1NHp5In0.mebYtks1SP2uViXiy1lbLQ";

// -- 2) Initialise Map --
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-4.0, 56.8],
  zoom: 5.2,
});

// -- 3) Upload handler --
async function uploadFile() {
  const file = document.getElementById("fileInput").files[0];
  if (!file) {
    alert("Please choose an Excel file first!");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Excel data returned:", data);

    // TEST MARKER - should show every time
    new mapboxgl.Marker().setLngLat([-3.18, 55.95]).addTo(map);

  } catch (err) {
    console.error("Upload error:", err);
  }
}
