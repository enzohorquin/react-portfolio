module.exports = {
    port: 5000,
    secret:'secret',
    nodemailer: {
        host: process.env.CHALLENGE_MAIL_SERVICE || 'smtp.gmail.com',
        auth: {
            type: 'OAuth2',
            clientId: '403056811268-ekh83h95jd6hci99mmbrfl4mtrjvghn0.apps.googleusercontent.com',
            clientSecret: 'YoEqvqc9FJso6YRFwRoV4V47',
            user: process.env.MAIL_USER || 'enzohorquin@gmail.com',
            pass: process.env.MAIL_PASS || '38828881',
            refreshToken:'1/p0ommkotoiFgNpN1rkQ3Rz2KASDPCpJ4DydppLWBzpY'
        }
    },
    tokenTime: process.env.CHALLENGE_TOKEN_TIME || 30000,
    resetTime: process.env.CHALLENGE_RESET_TIME || 30000
};