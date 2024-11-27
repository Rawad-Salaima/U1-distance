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

      fragment.appendChild(headerRow);

  cities.forEach((city) => {
    const row = document.createElement("div");
    row.classList.add("row");

    const nameCell = document.createElement("div");
    nameCell.classList.add("cell", "head_row");
    nameCell.textContent = city.name;
    row.appendChild(nameCell);

    cities.forEach((otherCity) => {
      const distanceCell = document.createElement("div");
      distanceCell.classList.add("cell");
      distanceCell.textContent =
        city === otherCity
          ? "—"
          : calculateDistance(city.latitude, city.longitude, otherCity.latitude, otherCity.longitude).toFixed(1);
      row.appendChild(distanceCell);
    });

    fragment.appendChild(row);
  });

  tableElement.appendChild(fragment);
}

function findClosestAndFurthest(cities) {
    let closest = { city: null, distance: Infinity };
  let furthest = { city: null, distance: -Infinity };

  cities.forEach((city) => {
    cities.forEach((otherCity) => {
      if (city === otherCity) return;
      
      const distance = calculateDistance(city.latitude, city.longitude, otherCity.latitude, otherCity.longitude);
      if (distance < closest.distance) {
        closest = { city: otherCity, distance };
      }
      if (distance > furthest.distance) {
        furthest = { city: otherCity, distance };
      }
    });
  });

  closestElement.textContent = closest.city.name;
  furthestElement.textContent = furthest.city.name;
}