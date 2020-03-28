import React, {useEffect, useState} from 'react';
import {Feather } from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api'
import  styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Incidents (){
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();
  
    
  function navigateToDetail (incident){
    navigation.navigate('Detail', {incident})
  }

  async function loadIncidents(){

    if (loading) {
      return;
    }

    if (total> 0 && incidents.length===total){
      return;
    }

    setLoading(true);

    const response = await api.get(`incidents?page=${page}`);
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count'])
    setPage(page + 1);
    setLoading(false);

  }
  useEffect(()=>{
    loadIncidents();
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
  <Text style={styles.textHeader}>Total de <Text style={styles.bold}>{total} casos</Text>.</Text>
      </View>
      <Text style={[styles.title, styles.bold]}>Bem vindo(a)</Text>
      <Text style={styles.textDescription}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
      style={styles.incidentList}
      data={incidents}
      keyExtractor={incident => String(incident.id)}
      onEndReached={loadIncidents}
      onEndReachedThreshold={0.2}
      //showsVerticalScrollIndicator={false}
      renderItem={({item : incident})=>(
        <View style={styles.incident}>
        <Text style={styles.incidentProp}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>
        <Text style={styles.incidentProp}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>
        <Text style={styles.incidentProp}>VALOR:</Text>
      <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</Text>
        <TouchableOpacity 
        style={styles.detailsButton}
        onPress={()=>navigateToDetail(incident)}>
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name='arrow-right' size={17} color="#e02041"/>
        </TouchableOpacity>
      </View>
      )}
      /> 
    </View> 

  )
}