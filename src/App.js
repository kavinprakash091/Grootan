import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Qrcode from './components/Qrcode';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Qrcode />} />
        <Route path="/signin" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
