module.exports = {
  APIPath:
    process.env.NODE_ENV === "production"
      ? "http://www.computhand.com"
      : "http://localhost:5000"
};
