
import './App.css';
import NavRoutes from './Routers';
import { UserContextProvider } from './Context/userContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <NavRoutes/>
      </UserContextProvider>
    </div>
  );
}

export default App;