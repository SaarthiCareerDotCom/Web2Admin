var nodemailer = require('nodemailer');
require('dotenv').load();

var mail_app = function(req,res,next){

  var status = {
    "Error" : "False",
    "Success" : "False"
  };        

  var mail_transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
      user : 'markanushil@gmail.com',
      pass : 'eecohjnbdodnrtmu'
    }
  });

  var mail_options = {
    from: 'markanushil@gmail.com',
    to: 'ajaya2v2verma@gmail.com',
    subject: req.body.subject,
    text:"name : "+req.body.name+"\nemail : "+req.body.email+"\nmessage : "+req.body.message
  };

  mail_transporter.sendMail(mail_options,function(err,data){
    if(err){
        status["Error"] = "True";
        res.send(status);
    }
    else {
        status["Success"] = "True";
        res.send(status);
    }
  });

}

module.exports = mail_app;
