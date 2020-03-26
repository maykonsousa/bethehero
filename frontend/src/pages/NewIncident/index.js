import React , {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
export default function Newincident(){
  const [title, setTitle] =useState('');
  const [description, setDescription] =useState('');
  const [value, setValue] =useState('');
  const ongId = localStorage.getItem('ongId')
  const history = useHistory();

  //cadastrar um novo Incident
  async function handleNewIncident(e){
    e.preventDefault();
    const data = {title, description, value,};

    try {
      await api.post('incidents', data, {
        headers:{
          Authorization:ongId,
        },
      })
      history.push('/Profile');
    } catch (error) {
     alert('Erro ao cadastrar novo caso.Tente Novamente') 
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastrar Noo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso </p>

          <Link className="form-link"to="/Profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
            </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input  
          placeholder="Título"
          value={title}
          onChange={e=>setTitle(e.target.value)}/>
          <textarea  
          placeholder="Descrição"
          value={description}
          onChange={e=>setDescription(e.target.value)}/>
          <input  
          placeholder="Valor em R$"
          value={value}
          onChange={e=>setValue(e.target.value)}/>
          
          
          
          
          <button type="submit"className="button-danger">Cadastrar</button>
        </form>
      </div>
    </div>

  )
}