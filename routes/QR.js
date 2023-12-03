var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';

    request({ url, encoding: null }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.setHeader('Content-Type', 'image/png');
            res.send(body);
        } else {
            res.status(500).send('Error generating QR code');
        }
    });
});

module.exports = router;
