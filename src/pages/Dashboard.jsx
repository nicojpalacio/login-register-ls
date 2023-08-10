
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  
  
  return (
    <div>
      <h2>Dashboard</h2>
      {props.userData ? (
        <div>
          <h3>Tus datos:</h3>
          <p>DNI: {props.storedUserData.dni}</p>
          <p>Número de teléfono: {props.storedUserData.phoneNumber}</p>
          <p>Tipo de usuario: {props.storedUserData.userType}</p>
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

