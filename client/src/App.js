import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  
  const clientID = '246648691460-bsj1rub53iami1btvii0577h1on2je01.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
