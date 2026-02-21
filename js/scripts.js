// Portfolio filtering

document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('[id^="work_"]');
  const items   = document.querySelectorAll('.works-page .works figure');
  const menuLinks = document.querySelectorAll('.filter-menu a');

  buttons.forEach(button => {

    button.addEventListener('click', function () {

      const filter = this.id;

      // Active button state
      menuLinks.forEach(btn => btn.classList.remove('buttonactive'));
      this.classList.add('buttonactive');

      if (filter === "work_all") {
        items.forEach(item => item.classList.remove('dimmed'));
        return;
      }

      items.forEach(item => {
        item.classList.toggle(
          'dimmed',
          !item.classList.contains(filter)
        );
      });

    });

  });

});