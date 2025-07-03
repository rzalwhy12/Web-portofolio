// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'rzalcorp05@gmail.com',
                subject: `New Message from Portfolio: ${subject}`,
                html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            };

            await transporter.sendMail(mailOptions);

            console.log('Email sent successfully!');
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error: unknown) { // Secara eksplisit menandai error sebagai unknown
            console.error('Error sending email:', error);

            let errorMessage = 'An unknown error occurred.';

            // =========================Type Guard untuk Error=========================
            // Memeriksa apakah error adalah instance dari Error, yang memiliki properti 'message'
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === 'string') {
                // Jika error adalah string (walaupun jarang, bisa terjadi)
                errorMessage = error;
            }

            res.status(500).json({ message: 'Error sending email', error: errorMessage });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}