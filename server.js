const express = require('express');
const serverConfig = require('./configs/server.config');

const app = express();
app.get('/',(req,res) =>{
    res.send({
        message:"server is working fine"
    })
})

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on port ${serverConfig.PORT}`);
});