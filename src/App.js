import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Form from './components/Form';
import Qrcode from './components/Qrcode';
import { useContext } from 'react';
import { Store } from './Store';
const { state, dispatch: ctxDispatch } = useContext(Store);
const { userInfo } = state;
function App() {
  return (
    <div>
      <Routes>
        <Route path="https://grootan1.onrender.com" element={<Qrcode />} />
        <Route path="https://grootan1.onrender.com/signin" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
