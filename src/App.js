import './App.scss';
import AppRoutes from './router/Routes';
import Header from './components/common/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
