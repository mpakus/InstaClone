const Token = {
  // check token valid or not
  isValid: (token) => token && token !== 'none',

  // authentication headers with json format
  headers: (token) => {
    return {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    };
  }
};

export default Token;
