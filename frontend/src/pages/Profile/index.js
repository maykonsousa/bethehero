import React, {useEffect, useState} from 'react'; //import do react
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../..//services/api'
import './styles.css'; // import css
//import imagens
import logoImg from '../../assets/logo.svg';


export default function Profile(){
  const [incidents, setIncidents] = useState([])
  const history = useHistory();

    const ongName = localStorage.getItem('ongname')
    const ongId = localStorage.getItem('ongId')
    //carrega os dados no momento em que a rota é chamada
    //e exibe a lista de casos da ong logada
    useEffect(()=>{
      api.get('profile', {
        headers:{
          Authorization:ongId,
        }
      }).then(response =>{
        setIncidents(response.data);
      })
    },[ongId])
    //deleta um caso da ong logada
    async function handleDeleteincident(id){
      try {
        await api.delete(`incidents/${id}`, {
          headers:{
            Authorization:ongId,
          }
        });
        //recarrega a página sem o caso deletado
        setIncidents(incidents.filter(incident=>incident.id!==id))

        //retorna erro caso haja falha ao deletar um incident
      } catch (error) {
        alert('Erro ao deletar caso. Tente novamente')
        
      }
    }

    async function handleLogout(){
      localStorage.clear();
      history.push('/')
    }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
  <span>Bem-vinda, {ongName}</span>
        <Link className="button-danger" to="/Incidents/New"> Cadastrar novo caso</Link>
  <button type="button" onClick={handleLogout}><FiPower size={18} color="#e02041"/></button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
       {incidents.map(incident =>(
          <li kei={incident.id}>
          <strong>Caso:</strong>
          <p>{incident.title}</p>
          <strong>Descrição</strong>
          <p>{incident.description}</p>
          <strong>Valor</strong>
          <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)}</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" onClick={()=>handleDeleteincident(incident.id)}/>
          </button>
        </li>
       ))}
      </ul>
    </div>
  )
}