const app = Vue.createApp({
  data() {
    return {
      firstName: 'Andre',
      lastName: 'Peixoto',
      email: 'hi@andrepeixoto.dev',
      gender: 'male',
      picture:
        'https://avatars.githubusercontent.com/u/35813862?s=460&u=4a80bf9994c09de556bbb19f6cfad5d77ff1cc76&v=4',
    };
  },

  methods: {
    async getUser() {
      const response = await fetch('https://randomuser.me/api');
      const { results } = await response.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount('#app');
