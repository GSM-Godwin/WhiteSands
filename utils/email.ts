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
            address: "whitesandsagencyky@gmail.com"
        },
        to: email,
        subject: "Welcome to Whitesands Agency!",
        html: `
        <strong>Welcome to Whitesands Agency!</strong>
        <p>We are thrilled to have you as a valued partner. At Whitesands Agency, we pride ourselves on providing top-notch logistics solutions tailored to meet your unique needs. Our team is dedicated to ensuring your experience with us is seamless and efficient.</p>
        <p>Here’s a quick overview of what you can expect from us:</p>
        <ul>
            <li><strong>Personalized Service:</strong> Our dedicated account managers are here to understand your business requirements and provide customized logistics solutions.</li>
            <li><strong>24/7 Support:</strong> Our customer service team is available around the clock to assist with any inquiries or issues you may have.</li>
        </ul>
        <strong>Your USA mailing address is to be used as follows: <br />
            Woodvine - Your name <br />
            5600 NW 72nd Ave <br />
            #669461 <br />
            Miami, FI <br />
            33166
        </strong>
        <p>Thank you for choosing Whitesands Agency. We look forward to a successful partnership and are committed to supporting your logistics needs every step of the way.</p>
        <p>Best regards,</p>
        <p>Whitesands Agency</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent!");
    } catch (error) {
        console.error("Failed to send email. Error:", error);
    }
};
