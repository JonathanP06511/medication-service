const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const medicationService = require('./services/medicationService');

const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));


const wsdlPath = path.join(__dirname, 'soap', 'medicationService.wsdl');

app.post('/soap/medicationService', (req, res) => {
    const wsdl = fs.readFileSync(wsdlPath, 'utf8');
    soap.listen(app, '/soap/medicationService', medicationService, wsdl);
    res.end();
});

app.listen(port, () => {
    console.log(`Servidor SOAP ejecutándose en http://localhost:${port}/soap/medicationService`);
});
