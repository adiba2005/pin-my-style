window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMorePins();
  }
});

const loadMorePins = async () => {
  try {
    const response = await fetch('/load-more-pins'); // Adjust URL as needed
    const newPins = await response.json();
    displayPins(newPins);
  } catch (error) {
    console.error('Error loading more pins:', error);
  }
};

const displayPins = (pins) => {
  const gridContainer = document.querySelector('.grid-container');
  pins.forEach(pin => {
    const pinElement = document.createElement('div');
    pinElement.className = 'grid-item';
    pinElement.innerHTML = `<img src="${pin.image.original.url}" alt="${pin.note}">`;
    gridContainer.appendChild(pinElement);
  });
};
