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
    
}