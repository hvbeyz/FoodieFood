// Filtreleme fonksiyonu
function filterRestaurantss() {
    var breakfastCheckbox = document.getElementById('breakfastCheckbox');
    var lunchCheckbox = document.getElementById('lunchCheckbox');
    var dinnerCheckbox = document.getElementById('dinnerCheckbox');
    var restaurants = document.getElementsByClassName('restaurant');
  
    // Her restoranı dönerek filtreleme işlemini gerçekleştir
    for (var i = 0; i < restaurants.length; i++) {
      var restaurant = restaurants[i];
      var meal = restaurant.getAttribute('data-meal');
  
      // Checkbox durumuna göre restoranların görünürlüğünü ayarla
      if ((breakfastCheckbox.checked && meal === 'breakfast') ||
          (lunchCheckbox.checked && meal === 'lunch') ||
          (dinnerCheckbox.checked && meal === 'dinner')) {
        restaurant.style.display = '';
      } else {
        restaurant.style.display = 'none';
      }
    }
  }
  
  // Filtreleme işlemini tetikleyen olay dinleyicilerini ekle
  var breakfastCheckbox = document.getElementById('breakfastCheckbox');
  var lunchCheckbox = document.getElementById('lunchCheckbox');
  var dinnerCheckbox = document.getElementById('dinnerCheckbox');
  breakfastCheckbox.addEventListener('change', filterRestaurantss);
  lunchCheckbox.addEventListener('change', filterRestaurantss);
  dinnerCheckbox.addEventListener('change', filterRestaurantss);
  