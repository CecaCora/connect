const Nav = (() => {
  console.log('Nav component successfully activated!');

  let accordions = document.querySelectorAll('.acc-header');
  let panels = document.querySelectorAll('.acc-panel');

  panels.forEach((panel) => {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  });

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
      let panel = e.target.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
})();

export default Nav;
