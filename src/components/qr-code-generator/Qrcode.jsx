import QRCode from 'react-qr-code';
import './qrcode.css';
import { useState } from 'react';

function Qrcode() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className='qrcode-container'>
      <h1 className='title'>QR Code Generator</h1>
      <div className='input-and-button'>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          name='qr-code'
          value={input}
          placeholder='Enter your value here'
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generator
        </button>
      </div>
      <div className='qrcode'>
        <QRCode id='qr-code-value' value={qrCode} size={300} bgColor='#fff' />
      </div>
    </div>
  );
}

export default Qrcode;
