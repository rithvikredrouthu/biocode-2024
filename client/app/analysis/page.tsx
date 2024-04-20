'use client';

import { useState } from 'react';

export default function Page() {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        history: '',
        race: '',
        calcium: '',
        vitamin_d: '',
        physical_activity: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            // if (response.ok) {
            //     // Form data successfully submitted
            //     console.log('Form data submitted successfully');
            //     // Reset form fields if needed
            //     setFormData({
            //         age: '',
            //         sex: '',
            //         history: '',
            //         race: '',
            //         calcium: '',
            //         vitamin_d: '',
            //         physical_activity: ''
            //     });
            // } else {
            //     // Handle error response
            //     console.error('Error submitting form:', response.statusText);
            // }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="div-block-6">
            <section className="hero-heading-left">
                <div className="container-2 container-1">
                    <div>
                        <h1 className="heading-5">You have a high risk, contact your health care provider</h1>
                    </div>
                    {/* <div>
                        <div className="w-form">
                            <form onSubmit={handleSubmit} className="form">
                                <input className="text-field w-input" maxLength="256" name="age" placeholder="Age" type="text" value={formData.age} onChange={handleChange} />
                                <div className="flex gap-2">
                                    <select className="text-field w-select" name="sex" value={formData.sex} onChange={handleChange}>
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <select className="text-field w-select" name="history" value={formData.history} onChange={handleChange}>
                                        <option value="">Family History</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <select className="text-field w-select" name="race" value={formData.race} onChange={handleChange}>
                                        <option value="">Race/Ethnicity</option>
                                        <option value="White">White</option>
                                        <option value="African American">African American</option>
                                        <option value="Asian">Asian</option>
                                        <option value="Caucasian">Caucasian</option>
                                        <option value="Hispanic">Hispanic</option>
                                    </select>
                                </div>
                                <textarea placeholder="Describe your daily diet..." name="calcium" value={formData.calcium} onChange={handleChange} className="text-field textform w-input"></textarea>
                                <textarea placeholder="Describe your physical activity..." name="physical_activity" value={formData.physical_activity} onChange={handleChange} className="text-field textform w-input"></textarea>
                                <input type="submit" data-wait="Please wait..." className="button-primary w-button" value="Get Results" />
                            </form>
                            <div className="w-form-done" tabIndex="-1" role="region" aria-label="Form success">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail" tabIndex="-1" role="region" aria-label="Form failure">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}
