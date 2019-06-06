module.exports = {
    port: 5000,
    secret:'xxxx',
    nodemailer: {
        host: process.env.CHALLENGE_MAIL_SERVICE || 'xxxxxxxx',
        auth: {
            type: 'xxxxx',
            clientId: 'xxxxxxxx',
            clientSecret: 'xxxxxxxxxxxx',
            user: process.env.CHALLENGE_MAIL_USER || 'xxxxxxxxxxx',
            pass: process.env.CHALLENGE_MAIL_PASS || 'xxxxxxxxxxx',
            refreshToken:'xxxxxxxxxxxxxxxxxxx'
        }
    },
    tokenTime: process.env.CHALLENGE_TOKEN_TIME || 30000,
    resetTime: process.env.CHALLENGE_RESET_TIME || 30000
};