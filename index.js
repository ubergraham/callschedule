const express = require('express');
const onCallApi = require('./api/on-call');

const app = express();
const port = 3000;

app.get('/api/on-call', onCallApi);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});