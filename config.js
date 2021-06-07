module.exports = {
  APIPath:
    process.env.NODE_ENV === "production"
      ? "https://computhand-api.herokuapp.com"
      : "http://localhost:5000",
};
