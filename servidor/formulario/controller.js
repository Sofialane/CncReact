const {Client}  = require('pg');
const config = {
    host: 'localhost',
    database: 'productos',
    user: 'postgres',
    password:'admin'
}

async function postFormulario(req, res){
    try {
        let formulario = req.body
        const client = new Client(config)
        await client.connect();
        const result = await client.query("insert into public.formulario(nombre, correo, telefono, mensaje) values($1,$2, $3, $4) returning *", 
        [formulario.nombre, formulario.correo, formulario.telefono, formulario.mensaje])
        console.log(result.rows);
        await client.end();
        /*res.status(200).send(result.rows);*/
        res.redirect('http://localhost:3000/Pedidos/');
    }catch(error){
        console.error('No se ha podido conectar a BD')
        res.sendStatus(510)
        
}}


module.exports = {postFormulario}