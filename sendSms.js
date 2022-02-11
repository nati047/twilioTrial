const accountSid = 'ACf200703aa2fd43f4ecf5f4178b2cb3a2';
const authToken = '3b038fa02ce2ecbb83816339c3df3f4c';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+16479049791',
  from: '+14377478266',
  body: 'well i dont know what to say so...'
})
.then((msg) =>{
  console.log(msg);
}).catch(err => {
  console.log(err);
})