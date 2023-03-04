import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history:
    createWebHistory() /* Tracks the history of the pages you're accessing so that if you click previous or forward you'll be directed to the correct page */,
  routes: [
    {
      path: '/',
      redirect: '/teams', // If the user goes to your web page on a link that has no params he will be redirected to a web page with the params of '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      } /* You can use components instead of component in order to display more components*/,
      children: [
        /* You can use the children config to include nested routes. The children routes won't work unless a router-view component is registered in the parent component. TeamsList would be the component to register the router-view component for this child*/
        {
          name: 'team-members',
          path: ':teamId',
          /* Adding this - ':' before a word means that anything you type will direct you to the following component. Eg - path: '/teams/:lolo' if you now type in the url the following - teams/:lasdfasd you will get the component specified */
          component: TeamMembers,
          props: true,
          // This tells the vue router that the dynamic parameters (:teamId) should be passed into this component as props
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      // beforeEnter(to, from, next) {
      //   console.log('text before entering users page');
      //   console.log(to, from);
      //   next();
      // }, /* You can define this hook in this config object or in the component itself as shown in UsersList.vue*/
    },

    {
      path: '/:notFound(.*)',
      redirect: '/teams', // If a user types in a param that doesn't match the above params he will be redirected to the page with the '/teams' param. Make sure to have this path in the bottom as it will override the other paths if it is above a path. (.*) is a regular expression that means anything.
    },
  ],
  /* You can add a config called linkActiveClass to change the given class - router-link-active to a name of your choosing. Eg - linkActiveClass: 'active' */
  scrollBehavior(to, from, savedPosition) {
    /* to is an object providing details on the page you're at, from is an object providing details about the page you were previously on*/
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition; /* If a saved position exists lets let users be automatically scrolled there otherwise let them be scrolled to the top */
    }
    return { left: 0, top: 0 };
  },
});

/* The beforeEach function will run before each navigation so before you navigate to a different page */
// router.beforeEach(function (to, from, next) {
//   console.log(to, from);
//   // if (to.name === 'team-members') {
//   //   next();
//   // } else {
//   //   next({ name: 'team-members', params: { teamId: 't2' } });
//   // }
//   next();
// });

const app = createApp(App);

app.use(router); /* Activates the router*/

app.mount('#app');
