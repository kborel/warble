const app = require('./App');

require('dotenv').config();

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Application running on PORT ${server.address().port}`);
});
