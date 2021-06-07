export default {
  methods: {
    checkTokenValidity: function() {
      let token = localStorage.getItem("jwt");
      let expiration = localStorage.getItem("expiration");
      let now = new Date().getTime();
      if (token && expiration * 1000 > now) {
        return true;
      } else return false;
    },
    unvalidateToken: function() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return false;
    },
  },
};
