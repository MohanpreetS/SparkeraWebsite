
import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    console.log("starting req");

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
        auth: {
            user: 'mps5199mpsn@gmail.com',
            pass: 'yqjmnfxwuflgqdoc',
        },
        secure: true,
    });

    try {

        const info = await transporter.sendMail({
            from: 'mps5199mpsn@gmail.com', // sender address
            to: "sparkeracademy@gmail.com", // list of receivers
            subject: "Sparkera- Contact Request", // Subject line
            text: `Name: ${name} \n Phone: ${phone} \n Email:${email} \n Message: ${message}`, // plain text body
            html: `<p>Name: ${name} </p><p>Phone: ${phone} </p><p>Email:${email} </p><p>Message: ${message}<p>`, // html body
        });

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(`error is ${error}`)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}

// export async function POST(request) {

//     // const name = request.body.name
//     // const email = request.body.email
//     // const phone = request.body.phone
//     // const message = request.body.message

//     const { name, email, phone, message } = request.body;
//     console.log(`email is ${email}`)


//     // create transporter object
//     const transporter = nodemailer.createTransport({
//         port: 465,               // true for 465, false for other ports
//         host: "smtp.gmail.com",
//         auth: {
//             user: 'mps5199mpsn@gmail.com',
//             pass: 'yqjmnfxwuflgqdoc',
//         },
//         secure: true,
//     });

//     try {

//         const info = await transporter.sendMail({
//             from: 'mps5199mpsn@gmail.com', // sender address
//             to: "sparkeracademy@gmail.com", // list of receivers
//             subject: "Sparkera- Contact Request", // Subject line
//             text: `Name: ${name} \n Phone: ${phone} \n Email:${email} \n Message: ${message}`, // plain text body
//             html: `<p>Name: ${name} </p><p>Phone: ${phone} </p><p>Email:${email} </p><p>Message: ${message}<p>`, // html body
//         });

//         return NextResponse.json({ message: "Success: email was sent" })

//     } catch (error) {
//         console.log(`error is ${error}`)
//         NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
//     }


// }