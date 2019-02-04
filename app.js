const axios = require('axios');
const token = require('./token');

async function postMessage(messageText) {
    const url = "https://slack.com/api/chat.postMessage";
    const post = {
      channel: "#general",
      text: messageText
    };
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };
    try {
      const response = await axios.post(url,
                                        post, 
                                        { headers: headers });
      console.log(` Response code: ${response.status}`);
    } catch(e) {
      console.log(`Error posting message: ${e}`);
    } 
  }

  postMessage("Hello World!");