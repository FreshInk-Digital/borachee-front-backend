const express = require('express');
const { createTransport } = require('nodemailer');
var cors = require('cors')



const app = express();

app.use(cors());



app.use(express.json());

const transporter = createTransport({    
    host: "mail.borachee.co.tz",
    secure: true, 
    port: 465, 
    auth: {
        user: "sales@borachee.co.tz",
        pass: "ZAw?70}TS4nS",
    },
    tls: {
        rejectUnauthorized: false
    }

});




app.get('/', async(req, res) => {
    
    res.status(200).json({ noma: "hatare sana"});

});



app.post('/', async(req, res) => {
    
    const { name, email, phone,  message } = req.body;


    const ipact = `${name} afu ${email} kuna ${phone} nope ${message}`;
    
    const mailOptions = {
        from: "sales@borachee.co.tz",
        to: "sales@borachee.co.tz",
        subject: "Hii itakua email ya kwanza from my node server",
        text: ipact,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if ( error ) {
            console.log(error);
        } else {
            console.log("email sent successfully: " + info.response);
        }
    });


    res.status(200).json({ nodemailler: "Imetisha sana alhami leo"});
    console.log("izi apa apis", req.body);

})



app.listen(4000, () => {
    console.log("Listening to port 4000");
})




