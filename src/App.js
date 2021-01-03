import './App.scss';
import Header from './components/common/header/Header';
import AppRoutes from './router/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;


/* project structure
--components
----- common
----- pages
----- shared
--helpers
----- browser-history
--redux
----- actions
----- reducers
--router
----- index
*/