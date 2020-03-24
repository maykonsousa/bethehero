import crypto from 'crypto'
import connection from '../database/connection'

export default {

 //listar todas as ongs
 async index(req,res){
   const ongs = await connection('ongs').select('*');
   return res.json({ongs})
 },
//criar nova ONG
async create (req, res){
  const {name, email, whatsapp, city, uf} = req.body;
  const id = crypto.randomBytes(4).toString('HEX');
  await connection('ongs').insert({id, name, email, whatsapp, city, uf });
  return res.json({id})
}



}