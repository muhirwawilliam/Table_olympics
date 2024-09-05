document.addEventListener('DOMContentLoaded', function() {
  // Fetch the sports data from the JSON file
  fetch('sportsData.json') // Replace with the correct path to your JSON file
    .then(response => response.json())
    .then(data => {
      const sportsContainer = document.getElementById('sportsContainer');

      // Loop through each sport and create its block
      data.sports.forEach((sport, i) => {
        // Create sport block elements
        const sportBlock = document.createElement('div');
        sportBlock.classList.add('sport-block');

        const sportHeader = document.createElement('div');
        sportHeader.classList.add('sport-header');

        const sportName = document.createElement('span');
        sportName.classList.add('sport-name');
        sportName.textContent = `${sport.name}`; // Starting index at 1

        const toggleIcon = document.createElement('span');
        toggleIcon.classList.add('toggle-icon');
        toggleIcon.textContent = '+';

        sportHeader.appendChild(sportName);
        sportHeader.appendChild(toggleIcon);
        sportBlock.appendChild(sportHeader);

        // Create sport details block
        const sportDetails = document.createElement('div');
        sportDetails.classList.add('sport-details');
        sportDetails.style.display = 'none'; // Hidden initially

        // Create a list for countries
        const countryList = document.createElement('ul');
        sport.countries.forEach((country, i) => {
          const countryItem = document.createElement('li');
          countryItem.innerHTML = `<strong>${i + 1}</strong> ${country.name} - ${country.gold} Gold, ${country.silver} Silver, ${country.bronze} Bronze`; // Using strong for bold
          countryList.appendChild(countryItem);
        });

        sportDetails.appendChild(countryList);
        sportBlock.appendChild(sportDetails);

        // Add click event to toggle details
        sportHeader.addEventListener('click', function() {
          const isOpen = sportDetails.style.display === 'block';
          sportDetails.style.display = isOpen ? 'none' : 'block';
          toggleIcon.textContent = isOpen ? '+' : '-';
        });

        // Append the sport block to the container
        sportsContainer.appendChild(sportBlock);
      });
    })
    .catch(error => {
      console.error('Error fetching the sports data:', error);
    });
});
