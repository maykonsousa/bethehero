import connection from '../database/connection'

export default {
  //lista apenas os casos da ong logada
  async index(req, res){
    const {page=1} = req.query;
    const ong_id = req.headers.authorization;
    const incidents = await connection('incidents')
    .where('ong_id', ong_id)
    .limit(5)
    .offset((page-1)*5)
    .select('*')
    return res.json(incidents)
  }
}