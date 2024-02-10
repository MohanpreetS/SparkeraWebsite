import React, { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = () => {
        e.preventDefault();

        if (name === "" || email === "" || phone === "") {
            return
        }

        const msg = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };

        //console.log(msg);

        fetch('https://matheng-server-97f213847229.herokuapp.com/spark', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify(msg)
        })

        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="col-lg-6 row">
            <div className="col-auto px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
                <h3 className="text-24 fw-500">Send us a Message</h3>
                <p className="mt-15 pr-20">
                    Send us a message with your details and we'll get back to you shortly via phone or email.
                </p>

                <form
                    className="contact-form row y-gap-30 pt-30 lg:pt-40"
                    onSubmit={handleSubmit}
                >
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            name="title"
                            placeholder="Name..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Email Address
                        </label>
                        <input
                            required
                            type="text"
                            name="title"
                            placeholder="Email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Phone Number
                        </label>
                        <input
                            required
                            type="tel"
                            name="title"
                            placeholder="Phone Number :  0000000000"
                            pattern="[0-9]{10}"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Message...
                        </label>
                        <textarea
                            name="comment"
                            placeholder="Message"
                            rows="8"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="col-12">
                        <button
                            type="submit"
                            name="submit"
                            id="submit"
                            className="button -md -purple-1 text-white"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};