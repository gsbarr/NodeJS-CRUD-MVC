const app = require('./server.js');
require('./db.js');

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
 
