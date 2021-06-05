function checkTokenValidity() {
  let token = localStorage.getItem("jwt");
  let expiration = localStorage.getItem("expiration");
  let now = new Date().getTime();
  if (token && expiration * 1000 > now) {
    return true;
  } else return false;
}

function unvalidateToken() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  return false;
}

module.exports = {
  checkTokenValidity,
  unvalidateToken,
};
