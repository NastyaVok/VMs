import './App.css';
import { Routes, Route } from 'react-router-dom';

import routesConfig from '../routes/routesConfig';
import { Header } from '../pages/HeaderPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route 
            key={index}
            path={route.path} 
            element={route.element} 
          />
        ))}
      </Routes>
    </>
  );
};
