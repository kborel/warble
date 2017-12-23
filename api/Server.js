const app = require('./App');

require('dotenv').config();

app.set('port', process.env.PORT || 7777);
app.listen(app.get('port'));
