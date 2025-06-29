// ================search==================================

const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
const closeSearch = document.querySelector('.search-close');

searchIcon.addEventListener('click', () => {
  searchBox.style.display = 'flex';
  searchBox.style.alignItems = 'center';
  searchBox.style.justifyContent = 'space-between';
});

closeSearch.addEventListener('click', () => {
  searchBox.style.display = 'none';
});

