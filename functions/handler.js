

module.exports.hello = (event, context, callback) => {
    console.log('event', event, 'Context', context)
    const response = { statusCode: 200, body: 'Go Serverless!' };
    callback(null, response);
};
