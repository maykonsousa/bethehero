import React from 'react';
import {Feather } from '@expo/vector-icons';
import {View, ScrollView, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import  styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Incidents (){
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  
  const message = `Olá ${incident.name}, Vi o anúncio do caso ${incident.title} e gostaria de ajudar com a quantia de ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}`

  function navigateBack (){
    navigation.goBack();
  }

  function sendmail(){
    MailComposer.composeAsync({
      subject:`Heroi do caso:${incident.title}`,
      recipients:[incident.email],
      body:message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <TouchableOpacity 
          style={styles.arrowLeft}
          onPress={navigateBack}>
          <Feather name="arrow-left" size={35} color='#e02041'/>  
          </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrowView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.incident}>
        <Text style={[styles.incidentProp, {marginTop:0}]}>ONG:</Text>
  <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
        <Text style={styles.incidentProp}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>
        <Text style={styles.incidentProp}>VALOR:</Text>
      <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</Text>
        </View>

       
      </ScrollView>
      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Salve o dia!</Text>
        <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.contactDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity 
          style={styles.action} 
          onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.action} 
          onPress={sendmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
        </View>

      
    </View> 

  )
}