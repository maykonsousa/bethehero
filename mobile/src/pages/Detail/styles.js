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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:12,
  },


  incident:{
    padding:24,
    borderRadius:8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProp:{
    fontSize: 14,
    color:'#41414d',
    fontWeight:'bold',
    marginTop:24,
  },


  incidentValue:{
    marginTop:8,
    fontSize:15,
    color:'#737380'
  },


  contactBox:{
    padding:24,
    borderRadius:8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  contactTitle:{
    fontWeight:'bold',
    fontSize:18,
    color:'#13131a',
    lineHeight:25,
  },
  contactDescription:{
    color:'#737380',
    marginTop:12,
    fontSize:15,
  },
  actions:{
    marginTop: 12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  action:{
    height:50,
    backgroundColor:'#e02041',
    width:'48%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 8,

  },

  actionText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
  },

  scrowView:{
    height: '60%',
    marginBottom:12,
  }
})