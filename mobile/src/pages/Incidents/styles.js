import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  bold:{
    fontWeight:'bold',
  },
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  textHeader:{
    color:'#737380',
    fontSize: 16,
    lineHeight:24
  },

  title:{
    fontSize: 30,
    
    paddingTop: 20,
    paddingBottom: 16,
    color:'#13131a',
  },

  textDescription:{
    color:'#737380',
    fontSize:16,
    lineHeight: 24,
    marginBottom: 8,
  },

  incidentList:{
    paddingTop: 32,
    
  },

  incident:{
    padding:24,
    borderRadius:8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  incidentProp:{
    fontSize: 14,
    color:'#41414d',
    fontWeight:'bold',
  },
  incidentValue:{
    marginTop:8,
    fontSize:15,
    marginBottom:24,
    color:'#737380'
  },
  detailsButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  detailsButtonText:{
    color:'#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },
  componente:{},
  componente:{},
  componente:{},
  
  


});