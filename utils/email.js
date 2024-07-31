import emailjs from 'emailjs-com';

emailjs.init('h6Cc_aXbhvcHzJM0t');

export const sendWelcomeEmail = (email) => {
    const templateParams = {
        to_email: email,
    };

    emailjs.send('service_hob5t21', 'template_skvpmki', templateParams)
        .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
        })
        .catch((err) => {
            console.error('Failed to send email. Error: ', err);
        });
};
