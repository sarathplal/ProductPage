import './App.css';
import Product from './components/products/Product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/products/RootLayout';
import Dashboard from './components/products/Dashboard';
import Cart from './components/products/Cart'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}>
      </Route>
      <Route path='/cart' element={<Cart />}>
      </Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
