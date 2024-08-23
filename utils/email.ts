const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export const sendWelcomeEmail = async (email: string) => {
    const mailOptions = {
        from: {
            name: "Whitesands Agency",
            address: process.env.EMAIL
        },
        to: email,
        subject: "Welcome to Whitesands Agency!",
        html: `
        <strong>Welcome to Whitesands Agency!</strong>
        <p>We are thrilled to have you as a valued partner. At Whitesands Agency, we pride ourselves on providing top-notch logistic solutions tailored to meet your unique needs. Our team is dedicated to ensuring your experience with us is seamless and efficient.</p>
        <strong>Your USA mailing address is to be used as follows: <br />
            Woodvine - Your name <br />
            5600 NW 72nd Ave <br />
            #669461 <br />
            Miami, FI <br />
            33166
        </strong>
        <p>Thank you for choosing Whitesands Agency. We look forward to a successful partnership and are committed to supporting your logistics needs every step of the way.</p>
        <p>Best regards, <br />
        Whitesands Agency</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent!");
    } catch (error) {
        console.error("Failed to send email. Error:", error);
    }
};
