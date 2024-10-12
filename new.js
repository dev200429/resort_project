import React from 'react';
import whatsappLogo from 'whatsapp.logo.png'; // Make sure to provide the correct path to the logo

function App() {
    return (
        <div className="fixed-bottom right-100 p-3" style={{ zIndex: 6, left: 'initial' }}>
            <a href="https://wa.me/923011314043?text=Hello%20How%20can%20I%20help%20you?" target="_blank" >
                <img src={whatsappLogo} width="60" alt="WhatsApp Logo" />
            </a>
        </div>
    );
}

export default App;
