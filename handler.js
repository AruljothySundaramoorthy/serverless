

const axios = require("axios");

module.exports.hello = (event, context, callback) => {
    console.log('event', event, 'Context', context)
    const response = { statusCode: 200, body: 'Go Serverless!' };
    callback(null, response);
};
module.exports.test = async (event, context, callback) => {
    // console.log('event', event, 'Context', context)
    // await 
    const user = await axios.get('https://randomuser.me/api/')
    console.log(user.data)
    const response = { statusCode: 200, body: JSON.stringify(user.data.results) };
    console.log(response)
    callback(null, response);
};