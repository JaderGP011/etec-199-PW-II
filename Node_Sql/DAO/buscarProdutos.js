import conexao from "./conexao.js"
 
export async function buscarProdutos(){
    const sql = `SELECT * FROM produtos `
    console.log(query)
    const conn = conexao()
    try {
        // Executar a consulta
        const [rows] = await conn.query(query);
        //console.log('Dados consultados', results.affectedRows);
        await conn.end()
        return rows
      } catch (err) {
        return err.menssage
      }
}