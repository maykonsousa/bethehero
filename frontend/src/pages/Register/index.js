import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  //cadastrar ONG
  async function handleRegister(e){
    e.preventDefault();

    const data = {name, email, whatsapp, city, uf}
    try {
      const response = await api.post('ongs', data)
    alert(`ONG cadastrada com sucesso. Seu ID de acesso é ${response.data.id}`)
    history.push('/')
    } catch (error) {
    alert('Erro no cadastro, tente novamente')  
    }
    
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

          <Link className="form-link"to="/">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Logon
            </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
          type="text" 
          placeholder="Nome da Ong"
          value={name}
          onChange={e=>setName(e.target.value)}
          />
          <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          />
          <input 
          type="text" 
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={e=>setWhatsapp(e.target.value)}
          />
          <div style={{display:"flex"}}>
          <input 
          type="text" 
          placeholder="Cidade"
          value={city}
          onChange={e=>setCity(e.target.value)}
          />
          <input 
          type="text" 
          placeholder="UF" 
          style={{width:80, marginLeft:8}}
          value={uf}
          onChange={e=>setUf(e.target.value)}
          />
          </div>
          <button type="submit" className="button-danger">Cadastrar</button>
        </form>
      </div>
    </div>

  )
}