const nodemailer = require("nodemailer");

//定义邮箱服务器，QQ邮箱更容易配置些
let transporter = nodemailer.createTransport({
	host: 'smtp.qq.com',
	service: 'qq',
	secure: true,
	//这里需要登陆到网页邮箱中，配置SMTP和POST服务器的密码
	auth: {
		user: 'xxxx@qq.com',
		pass: 'xxxxxxxbbghb'
	}
});

exports.send = (to, subject, html) => {
	let mailOptions = {
        //发送地址同上
		from: 'xxxx@qq.com',
		to: to,
		subject: subject,
		html: html
	};
	return new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				reject(error);
		    } else {
		        console.log("Message sent: " + info.response);
		        resolve();
		    }
		});
	})

}

