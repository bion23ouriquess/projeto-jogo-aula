import JogoCubo from '../JogoCubo/JogoCubo';
import './Body.css';

function Body() {
  const anoAtual = new Date().getFullYear();

  return (
    <div className='container-body'>
      <JogoCubo />
      <footer>
        Copyright © {anoAtual} - Todos os direitos reservados
      </footer>
    </div>
  )
};

export default Body;