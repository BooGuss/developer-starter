import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'KuntNoot';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
