import QRCode from 'qrcode.react';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <div>
        <QRCode value="#" style={{ marginRight: 50 }} />
        <p>Tutorialspoint </p>
      </div>
      {/* <Form /> */}
    </div>
  );
}

export default App;
