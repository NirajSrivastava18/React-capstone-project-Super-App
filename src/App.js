import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register';
import CategoryPage from './pages/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
