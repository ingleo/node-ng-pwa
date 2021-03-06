const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/ng-pwa'));

app.get('/', function (req, res) {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones sobre el puerto ${port}`);
});