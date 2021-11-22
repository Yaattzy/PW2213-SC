const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./config/connection');

app.use(require('./routes/personasRoute'));

app.listen(app.get('port'), (error) => {
    if(error) {
        console.log("error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});