'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Alert from './Alert';

interface AlertState {
  message: string;
  type: 'success' | 'error' | '';
  visible: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alert, setAlert] = useState<AlertState>({ message: '', type: '', visible: false });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_EMAIL_SERVER_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({ message: 'Mensaje enviado con éxito', type: 'success', visible: true });
      } else {
        setAlert({ message: 'Hubo un error al enviar el mensaje', type: 'error', visible: true });
      }
    } catch (error) {
      console.error('Error:', error);
      setAlert({ message: 'Hubo un error al enviar el mensaje', type: 'error', visible: true });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, visible: false });
  };

  return (
    <div>
      {alert.visible && (
        <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
      )}
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-5 text-white">Contactame</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Tu mensaje"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <button type="submit" className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;