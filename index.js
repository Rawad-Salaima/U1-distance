function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = (angle) => angle * (Math.PI / 180);
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
}