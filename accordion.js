document.addEventListener( 'DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordions');
  [].forEach.call(accordions, function(accordion) {
    var items = accordion.querySelectorAll('.accordion');
    [].forEach.call(items, function(item) {
      item.querySelector('.toggle').addEventListener('click', e => {
        e.preventDefault();
        let currentItem = e.target.parentNode.parentNode;
        if (!currentItem.classList.contains('is-active')) {
          let activeItem = accordion.querySelector('.accordion.is-active');
          if (activeItem) {
            activeItem.classList.remove('is-active');
          }
          currentItem.classList.add('is-active');
        } else {
          currentItem.classList.remove('is-active');
        }
      });
    });
  });
});
