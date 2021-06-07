export default {
  methods: {
    checkTokenValidity: function() {
      var connectionValide = false;
      let token = localStorage.getItem("jwt");
      let user = localStorage.getItem("user");
      if (user) {
        var expirationDate = new Date(JSON.parse(user).lastConnection);
        let expiration = localStorage.getItem("expiration");
        expirationDate.setSeconds(expirationDate.getSeconds() + expiration);
        let now = new Date().getTime();
        if (token && expirationDate > now) {
          connectionValide = true;
        }
      }
      return connectionValide;
    },
    unvalidateToken: function() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return false;
    },
  },
};
