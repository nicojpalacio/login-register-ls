
import { Link } from 'react-router-dom';
import { useUserContext } from '../utils/UserContext';
const Dashboard = (props) => {
  const { userData } = useUserContext();
  
  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <h3>Tus datos:</h3>
          <p>DNI: {userData.dni}</p>
          <p>Número de teléfono: {userData.phoneNumber}</p>
          <p>Tipo de usuario: {userData.userType}</p>
        </div>
      ) : (
        <p>No se encontraron datos de usuario.</p>
      )}
      <button>
        <Link to="/login">Cerrar sesión</Link>
      </button>
    </div>
  );
};

export default Dashboard;

