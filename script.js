document.addEventListener('DOMContentLoaded', function() {
  const sportBlocks = document.querySelectorAll('.sport-block');

  sportBlocks.forEach(block => {
      const header = block.querySelector('.sport-header');
      const details = block.querySelector('.sport-details');
      const toggleIcon = block.querySelector('.toggle-icon');

      header.addEventListener('click', function() {
          const isOpen = details.style.display === 'block';
          details.style.display = isOpen ? 'none' : 'block';
          toggleIcon.textContent = isOpen ? '+' : '−'; // Changes + to − when open
      });
  });
});
