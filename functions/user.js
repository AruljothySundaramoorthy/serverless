

const axios = require("axios");
module.exports.getuser = async (event, context, callback) => {
    const user = await axios.get('https://randomuser.me/api/')
    const response = { statusCode: 200, body: JSON.stringify(user.data.results) };
    callback(null, response);
};