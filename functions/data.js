const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try{
    const response = await fetch('https://jsonbox.io/box_10807316f9b18c89c4cb');
    const data     = await response.json();

    return {
      statusCode: 200,
      body: data
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
