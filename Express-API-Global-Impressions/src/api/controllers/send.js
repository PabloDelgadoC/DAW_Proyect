const sendController = {};
const nodemailer = require('nodemailer');

sendController.enviar = (req, res) => {
    const output = `
    <p>Petición desde Contáctanos</p>
    <h3>Detalles</h3>
    <ul>  
      <li>Nombre: ${req.body.datospersonales}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.msg}</p>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'dawap2020@gmail.com', // generated ethereal user
            pass: 'allan123AP'  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Contáctanos GI" <dawap2020@gmail.com>', // sender address
          to: 'pabelcozv@gmail.com', // list of receivers
          subject: 'Petición de contacto', // Subject line
          text: 'Contactáme', // plain text body
          html: output // html body
      };
    
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          
        res.redirect('http://localhost:4200/Contactanos');
        //   res.send(output);
      });
  }
module.exports = sendController;