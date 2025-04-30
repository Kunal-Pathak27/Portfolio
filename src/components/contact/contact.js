import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-start', // align to left
        alignItems: 'center',
        backgroundColor: '#120f1f',
        padding: '4rem',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1200px',
        width: '100%',
        alignItems: 'center',
        gap: '5rem',
      }}>
        
        <div style={{ flex: 1, paddingLeft: '2rem' }}>
            <div style={{ textAlign: 'left' }}>
                <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                color: 'white',
        }}>
            <span style={{ color: '#cd5ff8' }}>Contact</span> Me
            </h1>
            <p style={{
                color: '#bbb',
                fontSize: '1.2rem',
                maxWidth: '400px',
                marginTop: '1rem',
                marginLeft: '0.2rem',  
    }}>
      Let's get in touch! Fill out the form and I'll get back to you soon.
    </p>
  </div>
</div>


        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            backgroundColor: 'rgba(27, 20, 41, 0.9)',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem', color: 'white' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '.5rem',
                borderRadius: '4px',
                border: '1px solid #623686',
                backgroundColor: '#1b1a2e',
                color: 'white'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem', color: 'white' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '.5rem',
                borderRadius: '4px',
                border: '1px solid #623686',
                backgroundColor: '#1b1a2e',
                color: 'white'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem', color: 'white' }}>Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '.5rem',
                borderRadius: '4px',
                border: '1px solid #623686',
                backgroundColor: '#1b1a2e',
                color: 'white'
              }}
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '.5rem 1.5rem',
              backgroundColor: isHovered ? '#7a4db8' : '#623686',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
