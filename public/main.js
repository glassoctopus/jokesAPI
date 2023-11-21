// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/promises';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#jokeSetup').innerHTML = `
    <button class="btn btn-danger" id="jokeStart">Get A Joke</button><br />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#jokeStart')
    .addEventListener('click', () => {
      getJoke().then((data) => {
        renderToDom('#jokeSetup', data.setup);
        renderToDom('#jokePunchline', data.delivery);
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
