import React from 'react';
import QRCode from 'qrcode.react';
export default function Qrcode() {
  return (
    <div>
      <QRCode
        value="https://grootan1.onrender.com/signin"
        style={{ marginRight: 50 }}
      />{' '}
      <p> Grootan </p>{' '}
    </div>
  );
}
