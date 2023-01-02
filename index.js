
const express = require('express');
const app = require('/src/app');

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo')
});
