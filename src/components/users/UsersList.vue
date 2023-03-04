<template>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return { changesSaved: false };
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('text before entering users page');
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure you want to leave?');
      next(userWantsToLeave);
    }
  }, // The beforeRouteLeave is a function that can be called before a user leaves a page.
  methods: {
    saveChanges() {
      this.changesSaved = true;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>

<!-- If you want to be able to navigate to a different page via a certain action this is how you would do it. In your method call this.$router.push('pathName') and then once your method is executed, your page will change. There are plenty more options availabe in the docs for vue-router  -->
