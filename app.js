const express = require("express");
const nodemailer = require('nodemailer');
const app = express();



const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());


app.get("/",(req,res)=>{
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/',(req,res)=>{
	console.log(req.body);

	var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	        user: 'sg5029784@gmail.com',
	        pass: 'gautam.sid1999'
	    }
	});


	const mailOptions = {
	  from: req.body.from,
	  to: req.body.to,
	  subject: `${req.body.subject}`,
	  html: `Name: ${req.body.name} <br> From: ${req.body.from} <br> Phone: ${req.body.phone} <br> Query: ${req.body.query}`
	};


	transporter.sendMail(mailOptions, function (err, info) {
	   if(err){
	     	console.log(err);
	 		res.send('err');
	 	}
	   else{
	     	console.log(info);
	     	res.send('success');
	   }
	});
});


app.listen(PORT, ()=>{
	console.log(`server is running on port ${PORT}`);
});