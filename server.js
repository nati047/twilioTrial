const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms' , (req, res) =>{
  const twiml = new MessagingResponse();
  
  twiml.message('Thanks for your pointless text');
  res.writeHead(200, {'content-type': 'text/xml'});
  res.end(twiml.toString());

})

app.listen(9090, () =>{
  console.log('server listening on port 9090');
})