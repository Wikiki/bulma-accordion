let accordions = document.querySelectorAll('.accordions');
if (accordions) {
  accordions.forEach(accordion => {
    let items = accordion.querySelectorAll('.accordion');
    if (items) {
      items.forEach(item => {
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
    }
  });
}
