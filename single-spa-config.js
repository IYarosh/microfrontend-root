import * as singleSpa from 'single-spa';
const app1name = 'app1';
const app2name = 'app2';
/* The app can be a resolved application or a function that returns a promise that resolves with the javascript application module.
 * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.
 * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.
 */
const app1 = () => import('./app1.js');
const app2 = () => import('./app2.js');
/* single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you'd like.
 * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.
 */


let isApp1Active = true

function toggle() {
    console.log('toggle');
    isApp1Active = !isApp1Active;
    singleSpa.start();
    setTimeout(() => {
        toggle()
    }, 3000);
}

const app1activeWhen = (location) => isApp1Active;
const app2activeWhen = (location) => !isApp1Active;
singleSpa.registerApplication( 'app1', app1, app1activeWhen);
singleSpa.registerApplication( 'app2', app2, app2activeWhen);
singleSpa.start();

toggle();