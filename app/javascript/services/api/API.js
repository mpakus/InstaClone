const API = {
  url: `/api/v1`,
  toQuery: (params) => {
    return Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');
  }
};

export default API;
