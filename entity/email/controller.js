const mongoose = require('mongoose');
const { check,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const nodemailer = require('nodemailer');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {useNewUrlParser: true});
require('../../models/email');
const Email = mongoose.model('emails');
const emailService = require('../../service/email');
const config = require('../../config/config');




exports.send = (req, res) => {
        
   /*    const errors = validationResult(req);
       
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } */ 
        
        
        new Email({
            from: req.body.name,
            emailAddress: req.body.email,
            subjectLine: req.body.subject,
            body: req.body.message,
            date: Date()
        })
        .save(/* function (err, doc) {
            if (err)
                res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:rg3646@outlook.com">rg3646@outlook.com');
            else
                res.send(`Thanks for reaching out ${req.body.name}!`);
        } */);

        const msg = {
            to: config.nodemailer.auth.user || process.env.MAIL_USER,
            from: req.body.email,
            emailAddress: req.body.email,
            subject: req.body.subject,
            text: req.body.message,
            html: `<h1>from: ${req.body.name}</h1>
                    <p>Email From: ${req.body.email}</p>
                  <p>${req.body.message}</p>`
        };
        emailService.send(msg, (err, info) => {
            if (err) {
                console.log(err);
                return res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:enzohorquin@gmail.com">enzohorquin@gmail.com');
            }

            return res.send(`Thanks for reaching out ${req.body.name}!`);
        });
    };
