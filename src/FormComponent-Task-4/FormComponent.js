import React from 'react'
import { useState } from 'react';
import "./FormComponent.css"

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const validationErrors = {};
        if (formData.name.trim() === '') {
            validationErrors.name = 'Name is required';
        }
        if (formData.email.trim() === '') {
            validationErrors.email = 'Email is required';
        }
        if (formData.age.trim() === '') {
            validationErrors.age = 'Age is required';
        }
        if (formData.phoneNumber.trim() === '') {
            validationErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
            validationErrors.phoneNumber = 'Please enter a valid phone number';
        }
        setErrors(validationErrors);

       
        if (Object.keys(validationErrors).length === 0) {
            console.log(formData); 
            setFormData ({
                name: '',
                email: '',
                age: '',
                phoneNumber: '',
            })
        }
    }

    return (
        <div className='form-container'>
            <h2>Task 4 - Forms and Controlled Components with HandleSubmit and Basic Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent