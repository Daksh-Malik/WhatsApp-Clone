import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  
  const clientID = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
