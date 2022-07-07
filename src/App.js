import React from 'react';
import './App.scss';
import AppRoutes from './router/Routes';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <div className="content">
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
