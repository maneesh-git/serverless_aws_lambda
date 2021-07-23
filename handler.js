'use strict';

const emojis = [
  '😄','😃','😀','😊','😉','😍','🔶','🔷', '🚀'
];

module.exports.hello = async (event) => {
  
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[ rank >= emojis.length ? emojis.length - 1 : rank ];

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless my friend! Your function executed successfully!',
        input: rankEmoji ,
      },
      
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
