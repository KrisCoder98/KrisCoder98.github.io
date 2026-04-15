import './App.css';
import Auth from './components/Auth';
import {useState} from 'react';

export default function App() {
  const [user, setUser] = useState(() => localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null);

  return (
    <div>
      {!user && <Auth setUser={setUser} />}
    </div>
  );
} 