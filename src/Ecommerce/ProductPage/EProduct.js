import { useNavigate } from 'react-router-dom';

function EProduct() {
  const navigate = useNavigate();

  // Redirect to http://localhost:3001/ when EProduct component mounts
  navigate('http://localhost:3001/', { replace: true });

  return null; // You can return null since this component is just for redirection
}

export default EProduct;
