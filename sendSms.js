const accountSid = 'AC3820cf994d279c07165aff03e4e6eee4';
const authToken = '1d06a71c4fe717080cc94c965b49cd25';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+16479049791',
  from: '+14372918370',
  body: 'well i dont know what to say so...'
})
.then((msg) =>{
  console.log('sucess', msg);
}).catch(err => {
  console.log('error',err);
})