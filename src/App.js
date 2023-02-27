
import './App.css';
import NavRoutes from './Routers';
import { UserContextProvider } from './Context/userContext';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
function App() {
  return (
    <div className="App">
      <ReactNotifications/>
      <UserContextProvider>
      <NavRoutes/>
      </UserContextProvider>
    </div>
  );
}

export default App;