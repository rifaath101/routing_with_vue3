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
    },
  ],
  /* You can add a config called linkActiveClass to change the given class - router-link-active to a name of your choosing. Eg - linkActiveClass: 'active' */
});

const app = createApp(App);

app.use(router); /* Activates the router*/

app.mount('#app');