const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

require('./config/connection');

app.use(require('./routes/personasRoute'));

app.listen(app.get('port'), (error) => {
    if(error) {
        console.log("error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});