import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history:
    createWebHistory() /* Tracks the history of the pages you're accessing so that if you click previous or forward you'll be directed to the correct page */,
  routes: [
    {
      path: '/',
      redirect: '/teams', // If the user goes to your web page on a link that has no params he will be redirected to a web page with the params of '/teams'
    },
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/users',
      component: UsersList,
    },
    {
      path: '/teams/:teamId',
      /* Adding this - ':' before a word means that anything you type will direct you to the following component. Eg - path: '/teams/:lolo' if you now type in the url the following - teams/:lasdfasd you will get the component specified */
      component: TeamMembers,
      props: true,
      // This tells the vue router that the dynamic parameters (:teamId) should be passed into this component as props
    },
    {
      path: '/:notFound(.*)',
      redirect: '/teams', // If a user types in a param that doesn't match the above params he will be redirected to the page with the '/teams' param. Make sure to have this path in the bottom as it will override the other paths if it is above a path. (.*) is a regular expression that means anything.
    },
  ],
  /* You can add a config called linkActiveClass to change the given class - router-link-active to a name of your choosing. Eg - linkActiveClass: 'active' */
});

const app = createApp(App);

app.use(router); /* Activates the router*/

app.mount('#app');
