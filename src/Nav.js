import { Caret, Focus, Schedule, Labels, Archive } from './Icons';

const Nav = () => {
  let focusHeader = document.querySelector('.focus > h4');
  let focusIcon = Focus();
  focusHeader.insertBefore(focusIcon, focusHeader.childNodes[0]);

  let scheduleHeader = document.querySelector('.schedule > h4');
  let scheduleIcon = Schedule();
  scheduleHeader.insertBefore(scheduleIcon, scheduleHeader.childNodes[0]);

  let labelsHeader = document.querySelector('.labels > h4');
  let labelsIcon = Labels();
  labelsHeader.insertBefore(labelsIcon, labelsHeader.childNodes[0]);

  let archiveHeader = document.querySelector('.archive > h4');
  let archiveIcon = Archive();
  archiveHeader.insertBefore(archiveIcon, archiveHeader.childNodes[0]);

  let accordions = document.querySelectorAll('.acc-header');
  let panels = document.querySelectorAll('.acc-panel');

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

      let caret = e.target.lastElementChild;

      if (caret.style.transform) {
        caret.style.transform = null;
      } else {
        caret.style.transform = 'rotate(-90deg)';
      }
    });
  });

  console.log('Nav component successfully activated!');
};

export default Nav;
