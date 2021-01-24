import Caret from './icons/Caret';

const Nav = (() => {
  console.log('Nav component successfully activated!');

  let accordions = document.querySelectorAll('.acc-header');
  let panels = document.querySelectorAll('.acc-panel');

  // for (let i = 0; i < Array.from(accordions).length; i++) {
  //   Array.from(accordions)[i].appendChild(caret);
  // }

  panels.forEach((panel) => {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  });

  accordions.forEach((accordion) => {
    let caret = Caret();
    accordion.appendChild(caret);

    accordion.addEventListener('click', (e) => {
      let panel = e.target.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }

      let caret = e.target.firstElementChild;
      console.log(caret);

      if (caret.style.transform) {
        caret.style.transform = null;
      } else {
        caret.style.transform = 'rotate(-90deg)';
      }
    });
  });
})();

export default Nav;
