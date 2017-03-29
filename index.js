const express = require('express');
let app = express();

app.set('port', (process.env.PORT || 5011));

app.get('/', (req, res) => {
    res.end("Hello world");
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});

