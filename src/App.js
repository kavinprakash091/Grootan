import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Form from './components/Form';
import Qrcode from './components/Qrcode';
import { useContext } from 'react';
import { Store } from './Store';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Qrcode />} />
        <Route path="/signin" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
