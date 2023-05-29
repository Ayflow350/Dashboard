const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const API_KEY = 'LOlczKa0BL47aU2O1n5xA7ZMhrMSnz8n47CDEdbC';

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: "GET,POST,PUT,DELETE",
}));

app.get('/sexoffenders/Zip', async (req, res) => {
  try {
    const { exact_zipcode } = req.query;
    const url = `https://api.crimeometer.com/v3/sex-offenders/records?exact_zipcode=${exact_zipcode}`;
    const response = await axios.get(url, { headers: { 'x-api-key': API_KEY } });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/sexoffenders/alias', async (req, res) => {
  try {
    const { alias } = req.query;
    const url = `https://api.crimeometer.com/v3/sex-offenders/records?alias=${alias}`;
    const response = await axios.get(url, { headers: { 'x-api-key': API_KEY } });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/sexoffenders/exactName', async (req, res) => {
  try {
    const { name } = req.query;
    const url = `https://api.crimeometer.com/v3/sex-offenders/records?name=${name}`;
    const response = await axios.get(url, { headers: { 'x-api-key': API_KEY } });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/sexoffenders/nameAndZip', async (req, res) => {
  try {
    const { zipcode, name } = req.query;
    const url = `https://api.crimeometer.com/v3/sex-offenders/records?zipcode=${zipcode}&name=${name}`;
    const response = await axios.get(url, { headers: { 'x-api-key': API_KEY } });
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
}); 