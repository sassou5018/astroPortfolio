import nodeMailer from 'nodemailer';

export interface EmailData {
    from: string;
    text: string;
}

const sendEmail = async (emailData: EmailData) => {
    const data = {
        from: emailData.from,
        to: import.meta.env.USER,
        subject: `Message From ${emailData.from}`,
        text: emailData.text
    }
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: import.meta.env.USER,
            pass: import.meta.env.PWD
        }
    });
    return transporter
        .sendMail(data);
        
};

export default sendEmail;