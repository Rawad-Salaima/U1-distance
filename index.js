function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = (angle) => angle * (Math.PI / 180);
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return (2 * R * Math.asin(Math.sqrt(a))) / 1.609;
}

function generateTable(cities) {
    const fragment = document.createDocumentFragment();

    const headerRow = document.createElement("div");
    headerRow.classList.add("row", "head_row");
    const emptyHeader = document.createElement("div");
    emptyHeader.classList.add("cell");
    headerRow.appendChild(emptyHeader);

    cities.forEach((city) => {
        const headerCell = document.createElement("div");
        headerCell.classList.add("cell", "head_column");
        headerCell.textContent = city.name;
        headerRow.appendChild(headerCell);
      });
}