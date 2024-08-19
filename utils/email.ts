// import emailjs from 'emailjs-com';

import { any } from "zod";

// emailjs.init('h6Cc_aXbhvcHzJM0t');

// export const sendWelcomeEmail = (email) => {
//     const templateParams = {
//         to_email: email,
//     };

//     emailjs.send('service_hob5t21', 'template_skvpmki', templateParams)
//         .then((response) => {
//             console.log('Email successfully sent!', response.status, response.text);
//         })
//         .catch((err) => {
//             console.error('Failed to send email. Error: ', err);
//         });
// };
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Correct SMTP host for Gmail
    port: 587, // Standard port for Gmail SMTP
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL, // Your Gmail email address
        pass: process.env.PASSWORD, // Your Gmail app password
    },
});

// Function to send a welcome email
export const sendWelcomeEmail = async (email: string) => {
    const mailOptions = {
        from: {
            name: "Whitesands Agency",
            address: process.env.EMAIL, // Sender's email address
        },
        to: email, // Recipient's email address
        subject: "Welcome to Whitesands Agency!",
        html: `
        <strong>Welcome to Whitesands Agency!</strong>
        <p>We are thrilled to have you as a valued partner. At Whitesands Agency, we pride ourselves on providing top-notch logistics solutions tailored to meet your unique needs. Our team is dedicated to ensuring your experience with us is seamless and efficient.</p>
        <p>Here’s a quick overview of what you can expect from us:</p>
        <ul>
            <li><strong>Personalized Service:</strong> Our dedicated account managers are here to understand your business requirements and provide customized logistics solutions.</li>
            <li><strong>24/7 Support:</strong> Our customer service team is available around the clock to assist with any inquiries or issues you may have.</li>
        </ul>
        <p>To get started, please find attached our welcome packet, which includes essential information about our services and how to access your account. If you have any questions or need immediate assistance, feel free to reach out to us directly at (345)922-3922 or contact our support team at whitesandsky@outlook.com.</p>
        <p>Your USA mailing address is to be used as follows:
            <p>Woodvine- Your name</p>
            <p>5600NW 72nd Ave</p>
            <p>#669461</p>
            <p>Miami, FI</p>
            <p>33166</p>
        </p>
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
