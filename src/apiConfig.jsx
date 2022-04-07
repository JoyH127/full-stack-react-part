let apiUrl;
const apiUrls = {
  production: "https://full-stack-lession.herokuapp.com/api",
  development: "https://full-stack-lession.herokuapp.com/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
