let accordions = document.querySelectorAll('.accordion');
if (accordions) {
  accordions.forEach(accordion => {
    let items = accordion.querySelectorAll('.message');
    if (items) {
      items.forEach(item => {
        item.querySelector('.toggle').addEventListener('click', e => {
          e.preventDefault();
          let currentItem = e.target.parentNode.parentNode;
          if (!currentItem.classList.contains('is-active')) {
            let activeItem = accordion.querySelector('.message.is-active');
            if (activeItem) {
              activeItem.classList.remove('is-active');
            }
            currentItem.classList.add('is-active');
          }
        });
      });
    }
  });
}
