import React, { useState } from 'react';
import './Booking.css';
import SecondaryPageBanner from './SecondaryPageBanner';
import Header from './Header'; 
import Footer from './Footer'; 


function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        time: '',
        email: '',
        phone: '',
        specialInstructions: ''
    });

    const [isBooked, setIsBooked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsBooked(true);
    }

    return (
        <>


        <SecondaryPageBanner heading3={"Booking Page"} bannerImage={'../Images/CoffeeBeansImage.jpg'} altStyling={"35%"} /> 

        <div className={`Booking-container ${isBooked ? 'booked' : ''}`}>
            <h2 className='Booking-h2'>Make a Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="Booking-form-group">
                    <label className='Booking-label'>Name:</label>
                    <input className='Booking-input'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="Booking-form-group">
                    <label className='Booking-label'>Time:</label>
                    <input className='Booking-input'
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="Booking-form-group">
                    <label className='Booking-label'>Email:</label>
                    <input className='Booking-input'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="Booking-form-group">
                    <label className='Booking-label'>Phone:</label>
                    <input className='Booking-input'
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="Booking-form-group">
                    <label className='Booking-label'>Special Instructions:</label>
                    <textarea className='Booking-textarea'
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        rows="4"
                    />
                </div>
                <button type="submit" className="Booking-submit-button">Submit</button>
            </form>
            {isBooked && <p className="Booking-success">Booked successfully!</p>}
        </div>

    

        </>
    );
}

export default Booking;