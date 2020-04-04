import * as singleSpa from 'single-spa';
const app1name = 'app1';
const app2name = 'app2';

/* The app can be a resolved application or a function that returns a promise that resolves with the javascript application module.
 * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.
 * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.
 */
const app1Loader = () => import('microfrontend-app1');
const app2Loader = () => import('microfrontend-app2');

let activeTab = 1;

const showApp1Handler = (location) => {
    console.log('showApp1Handler. Location:', location);
    return activeTab === 1;
};

const showApp2Handler = (location) => {
    console.log('showApp2Handler. Location:', location);
    return activeTab === 2;
};

singleSpa.registerApplication(app1name, app1Loader, showApp1Handler);
singleSpa.registerApplication(app2name, app2Loader, showApp2Handler);

singleSpa.start();


// Add listeners to toggle microfrontends 
document.getElementById('tab-app1').addEventListener('click', () => {
    activeTab = 1;
    singleSpa.triggerAppChange();
})
document.getElementById('tab-app2').addEventListener('click', () => {
    activeTab = 2;
    singleSpa.triggerAppChange();
})