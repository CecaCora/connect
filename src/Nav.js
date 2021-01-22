const Nav = (() => {
  console.log('Nav component successfully activated!');

  let accordions = document.querySelectorAll('.acc-header');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
      let panel = e.target.nextElementSibling;

      console.log(panel);

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
})();

export default Nav;
