const {Client}  = require('pg');
const config = {
    host: 'localhost',
    database: 'productos',
    user: 'postgres',
    password:'admin'
}


async function getProducts(req, res){
    try {
        const client = new Client(config)
        await client.connect();
        const result = await client.query("select * from public.productos")
        console.log(result.rows);
        await client.end();
        res.status(200).send(result.rows);
    }catch(error){
        console.error('No se ha podido conectar a BD')
        res.sendStatus(510)
        
}}


let products = [
    {
      "id": 1,
      "name": "Torta temática simple", 
      "description": "Torta de un piso para 20 personas, con merengue y decoracion en fondant", 
      "price": 1400, 
      "stock": 10, 
      "offer": null, 
      "category": "Tortas",
      "img": "images/tortatematica.jpg"}, 
    {
      "id":2, 
      "name":"Cheesecake", 
      "description": "Postre cheesecake de frutillas para 18 personas", 
      "price": 950, 
      "stock": 4, 
      "offer": null, 
      "category": "Postres",
      "img": "images/cheescake.jpg"
    },
    {
      "id": 3, 
      "name":"Alfajores de salchichon", 
      "description": "Salchichon de chocolate relleno de dulce de leche bañado de chocolate amargo o blanco. Se venden de a 6 unidades", 
      "price": 350, 
      "stock": 150, 
      "offer": null, 
      "category": "Alfajores",
      "img": "images/alfsalchichon.jpg"
    },
    {
      "id": 4, 
      "name":"Alfajores de maicena", 
      "description": "Los mejores alfajores de maicena que podrás probar. Se venden de a 6 unidades", 
      "price": 280, 
      "stock": 100, 
      "offer": null, 
      "category": "Alfajores",
      "img": "images/alfmaicena.jpg"
    },
    {
      "id": 5, 
      "name":"Alfajores de chocolate", 
      "description": "La bomba de chocolate que necesitabas, se venden de a 6 unidades", 
      "price": 280, 
      "stock": 100, 
      "offer": null, 
      "category": "Alfajores",
      "img": "images/alfchocolate2.jpg"
    },
    {
      "id": 6, 
      "name":"1/2 kilo de masitas", 
      "description": "Masitas surtidas", 
      "price": 300, 
      "stock": 15, 
      "offer": null, 
      "category": "Masitas",
      "img": "images/mediomasitas.jpg"
    },
    {
      "id": 7, 
      "name":"1 kilo de masitas", 
      "description": "Masitas surtidas", 
      "price": 580, 
      "stock": 15, 
      "offer": null, 
      "category": "Masitas",
      "img": "images/kilomasitas.jpg"
    },
    {
      "id": 8, 
      "name":"Donas", 
      "description": "Las mejores donas que vas a probar. Se venden de a 6 unidades", 
      "price": 300,  
      "stock": 50, 
      "offer": null, 
      "category": "Otros",
      "img": "images/donas.jpg"
    },
    {
      "id": 9, 
      "name":"Galletas con fondant", 
      "description": "Galletas tematicas decoradas con fondant. Se venden por docena", 
      "price": 580, 
      "stock": 10, 
      "offer": null, 
      "category": "Galletas",
      "img": "images/galletasfondant.jpg"
    },
    {
      "id": 10, 
      "name":"Cupcakes con merengue", 
      "description": "Cupcakes decorados con merengue y decoracion simple en fondant. Se vende de a 6 unidades.", 
      "price": 250, 
      "stock": 10, 
      "offer": null, 
      "category": "Cupcakes",
      "img": "images/cupcakes.jpg"
    },
    {
      "id": 11, 
      "name":"Paletas de oreo", 
      "description": "De chocolate blanco o negro, relleno de oreo c/dulce de leche. Minimo 4 unidades. Precio por tematicas varia segun diseño.", 
      "price":300, 
      "stock":50, 
      "offer": null, 
      "category": "Otros",
      "img": "images/paletas.jpg"
    }
  ]


module.exports = {getProducts}