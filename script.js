// Filter Rentals
document.getElementById('filterButton').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const priceRange = document.getElementById('priceRange').value;
  const bedrooms = document.getElementById('bedrooms').value;

  const rentals = document.querySelectorAll('.rental-card');

  rentals.forEach((rental) => {
    const rentalLocation = rental.getAttribute('data-location');
    const rentalPrice = parseInt(rental.getAttribute('data-price'));
    const rentalBedrooms = rental.getAttribute('data-bedrooms');

    let matchesLocation = location === 'all' || rentalLocation === location;
    let matchesPrice =
      priceRange === 'all' ||
      (priceRange === '0-500000' && rentalPrice <= 500000) ||
      (priceRange === '500001-1000000' && rentalPrice > 500000 && rentalPrice <= 1000000) ||
      (priceRange === '1000001-2000000' && rentalPrice > 1000000 && rentalPrice <= 2000000) ||
      (priceRange === '2000001+' && rentalPrice > 2000000);
    let matchesBedrooms = bedrooms === 'all' || bedrooms === rentalBedrooms || (bedrooms === '4+' && rentalBedrooms >= 4);

    if (matchesLocation && matchesPrice && matchesBedrooms) {
      rental.style.display = 'block';
    } else {
      rental.style.display = 'none';
    }
  });
});
