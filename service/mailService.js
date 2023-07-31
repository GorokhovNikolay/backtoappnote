const nodemailer = require('nodemailer')


    
    const transport = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'Nikolay.Gorokhov@yandex.ru',
                pass: 'Vasilisa1609'
            }
        })


    const sendActivationMail = async (to, link) => {
        
        await transport.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на '+ process.env.API_URL,
            text:'',
            html:`
                <div>
                    <h1>Для сброса пароля перейдите по ссылке</h1>
                    <a href="http://localhost:3003/api/activate/${link}">Ссылка</a>
                </div>`
        })
    }

    module.exports = sendActivationMail
