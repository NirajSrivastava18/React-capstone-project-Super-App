import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
