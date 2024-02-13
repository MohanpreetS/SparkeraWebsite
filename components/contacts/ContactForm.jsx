import React, { useState } from 'react';

export default function ContactForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        console.log(formData);

        try {
            // fetch('https://matheng-server-97f213847229.herokuapp.com/spark', {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])

            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
        // .then(res => res.json()).then(data => { console.log(data); })

        // setName("")
        // setPhone("")
        // setEmail("")
        // setMessage("")
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
                            id='form-name'
                            type="text"
                            name="name"
                            placeholder="Name..."
                        />
                    </div>
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Email Address
                        </label>
                        <input
                            required
                            id='form-email'
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Phone Number
                        </label>
                        <input
                            required
                            id="form-phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number :  0000000000"
                            pattern="[0-9]{10}"
                        />
                    </div>
                    <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Message...
                        </label>
                        <textarea
                            id='form-message'
                            name="message"
                            placeholder="Message"
                            rows="8"
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


// import React, { useState } from 'react';

// export default function ContactForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [message, setMessage] = useState('');


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (name === "" || email === "" || phone === "") {
//             return
//         }

//         const msg = {
//             name: name,
//             email: email,
//             phone: phone,
//             message: message,
//         };

//         // console.log(msg);
//         console.log(JSON.stringify(msg));

//         try {
//             // fetch('https://matheng-server-97f213847229.herokuapp.com/spark', {
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 mode: "no-cors",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(msg)
//             })

//             if (!response.ok) {
//                 console.log("falling over")
//                 throw new Error(`response status: ${response.status}`);
//             }
//             const responseData = await response.json();
//             console.log(responseData['message'])

//             alert('Message successfully sent');
//         } catch (err) {
//             console.error(err);
//             alert("Error, please try resubmitting the form");
//         }
//         // .then(res => res.json()).then(data => { console.log(data); })

//         // setName("")
//         // setPhone("")
//         // setEmail("")
//         // setMessage("")
//     }

//     return (
//         <div className="col-lg-6 row">
//             <div className="col-auto px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
//                 <h3 className="text-24 fw-500">Send us a Message</h3>
//                 <p className="mt-15 pr-20">
//                     Send us a message with your details and we'll get back to you shortly via phone or email.
//                 </p>

//                 <form
//                     className="contact-form row y-gap-30 pt-30 lg:pt-40"
//                     onSubmit={handleSubmit}
//                 >
//                     <div className="col-12">
//                         <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
//                             Name
//                         </label>
//                         <input
//                             required
//                             type="text"
//                             name="title"
//                             placeholder="Name..."
//                             value={name}
//                             onChange={e => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-12">
//                         <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
//                             Email Address
//                         </label>
//                         <input
//                             required
//                             type="text"
//                             name="title"
//                             placeholder="Email..."
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-12">
//                         <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
//                             Phone Number
//                         </label>
//                         <input
//                             required
//                             type="tel"
//                             name="title"
//                             placeholder="Phone Number :  0000000000"
//                             pattern="[0-9]{10}"
//                             value={phone}
//                             onChange={e => setPhone(e.target.value)}
//                         />
//                     </div>
//                     <div className="col-12">
//                         <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
//                             Message...
//                         </label>
//                         <textarea
//                             name="comment"
//                             placeholder="Message"
//                             rows="8"
//                             value={message}
//                             onChange={e => setMessage(e.target.value)}
//                         ></textarea>
//                     </div>
//                     <div className="col-12">
//                         <button
//                             type="submit"
//                             name="submit"
//                             id="submit"
//                             className="button -md -purple-1 text-white"
//                         >
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
