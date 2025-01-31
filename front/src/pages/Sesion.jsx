import { Formulario } from "../components/Datos.jsx";
import Registro from "../components/registro.tsx";
import Dashboard from "../pages/Dashboard"
import { useState } from 'react';

function Login() {
  const [user, setUser] = useState([])
  const [showRegister, setShowRegister] = useState(false)

  const handleLoginClick = () => {
    setShowRegister(false)
  }

  if (user.length > 0) {
    return <Dashboard />
  }

  return (
    <div>
      {showRegister ? (
        <Registro 
          onLoginClick={handleLoginClick}
          setUser={setUser}
        />
      ) : (
        <Formulario 
          setUser={setUser}
          onRegisterClick={() => setShowRegister(true)}
        />
      )}
    </div>
  )
}

export default Login

