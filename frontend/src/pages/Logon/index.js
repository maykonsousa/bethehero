import React, {useState} from 'react'; //import do react
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'; // import css
//impor imagens
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
  const [id, setId] = useState('');
  const history = useHistory()
  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('session', {id});
      console.log(response.data.name)
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongname', response.data.name);
      history.push('/Profile')

    } catch (error) {
      alert('Login não autorizado. Tente novamente')
    }

  }
  return (
   <div className="logon-container">
     <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form onSubmit={handleLogin} >
          <h1>Faça seu Logon</h1>
          <input 
          placeholder="Sua ID"
          value={id}
          onChange={e=> setId(e.target.value)}
          />
          <button className="button-danger" type="submit">entrar</button>

          <Link className="form-link"to="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
            </Link>
          
        </form>
     </section>
     <img src={heroesImg} alt="Heroes"/>
   </div>
  );
}