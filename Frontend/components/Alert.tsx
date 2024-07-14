
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface AlertProps {
    message: string;
    type: 'success' | 'error' | '';
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
    const alertVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 8000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            className={`fixed top-4 right-4 p-4 rounded shadow-md z-50 flex items-center justify-between ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={alertVariants}
        >
            <p>{message}</p>
            <button onClick={onClose} className="ml-4 font-bold">Cerrar</button>
        </motion.div>
    );
};

export default Alert;
