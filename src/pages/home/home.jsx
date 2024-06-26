import { Header } from '../../components/Header/header';
import background from '../../assets/background.png';
import ItemList from '../../components/List/ItemList';

import './style.css'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app'/>
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/91354726?s=400&u=7564509044bfe2f42f2a441556ac6709923ad347&v=4" className='profile' alt='Imagem de perfil'/>
            <div>
              <h3>Cezaniltom Silva</h3>
              <span>@Cezaniltom</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className='repositorio'>Repositórios</h4>
            <ItemList title="Teste1" description="teste de descrição"/>
            <ItemList title="Teste1" description="teste de descrição"/>
            <ItemList title="Teste1" description="teste de descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
