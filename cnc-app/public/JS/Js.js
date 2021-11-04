/*

JS COPIADO DEL PROYECTO ANTERIOR DE HTML CSS Y JS

export default class Js {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([])
        const [total, setTotal] = useState(0)


        let categories = ['Tortas', 'Postres', 'Alfajores', 'Masitas', 'Galletas', 'Cupcakes', 'Otros']
    
        productHolder.innerHTML = ''
        cartHolder.innerHTML = ''
        totalHolder.innerHTML = total

        let products = [
            new Product(1, 'Torta temática simple', 'Torta de un piso para 20 personas, con merengue y decoracion en fondant', 1400, 10, null, 'Tortas'),
            new Product(2, 'Cheesecake', 'Postre cheesecake de frutillas para 18 personas', 950, 4, null, 'Postres'),
            new Product(3, 'Alfajores de salchichon', 'Salchichon de chocolate relleno de dulce de leche bañado de chocolate amargo o blanco. Se venden de a 6 unidades', 240, 150, null, 'Alfajores'),
            new Product(4, 'Alfajores de maicena', 'Los mejores alfajores de maicena que podrás probar. Se venden de a 6 unidades', 280, 100, null, 'Alfajores'),
            new Product(5, 'Alfajores de chocolate', 'La bomba de chocolate que necesitabas, se venden de a 6 unidades', 280, 100, null, 'Alfajores'),
            new Product(6, '1/2 kilo de masitas', 'Masitas surtidas', 300, 15, null, 'Masitas'),
            new Product(7, '1 kilo de masitas', 'Masitas surtidas', 580, 15, null, 'Masitas'),
            new Product(8, 'Donas', 'Las mejores donas que vas a probar. Se venden de a 6 unidades', 300, 50, null, "Otros"),
            new Product(9, 'Galletas con fondant', 'Galletas tematicas decoradas con fondant. Se venden por docena', 580, 10, null, 'Galletas'),
            new Product(10, 'Cupcakes con merengue', 'Cupcakes decorados con merengue y decoracion simple en fondant. Se vende de a 6 unidades.', 250, 10, null, 'Cupcakes'),
            new Product(11, 'Paletas de oreo', 'De chocolate blanco o negro, relleno de oreo c/dulce de leche. Minimo 4 unidades. Precio por tematicas varia segun diseño.', 300, 50, null, 'Otros'),
        ]


        fetch("http://localhost:4000/products")
            .then(data => console.log(data))
            .catch(error => console.log(error))
            
           

        products.forEach(product => {
            innerHTMLForProductHolder += product.asInnerHTMLForMainList()
        })

        productHolder.innerHTML = innerHTMLForProductHolder
            

        function searchProduct() {
            let input = document.getElementById('searchBar').value
            let filteredProduct = products.filter(product => product.name.includes(input))
            if(input.length !== 0) {
                filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(input.toLowerCase()) ||
                    product.description.toLowerCase().includes(input.toLowerCase()) ||
                    product.id == input
                )
            }else {
                filteredProducts = products
            }

            /*CON EL HOLDER INNERHTML BORRA LO QUE HAYA ESCRITO. BORRA Y REESCRIBE*/
            /*productHolder.innerHTML = ''

            filteredProducts = filteredProducts.sort((a,b) => a.name.localeCompare(b.name))
                
            innerHTMLForProductHolder = ''

            filteredProducts.forEach(product => {
                innerHTMLForProductHolder += product.asInnerHTMLForMainList()
            })
            productHolder.innerHTML = innerHTMLForProductHolder;
        } 

        document.getElementById('searchBar').addEventListener('keyup',searchProduct)

        let cart = []

        function addToCart(props){
            let product = products.find(cartLine => cartLine.id == props)
            cart.push({
                product: product,
                quantity: 1
            })
            renderCart()
        }

        function renderCart(){
            cartHolder.innerHTML = '' 
            totalHolder.innerHTML = 0
            total = 0;
            cart.forEach(cartLine => {
                total += cartLine.product.price * cartLine.quantity;
                cartHolder.innerHTML += `<li>
                        <p>${cartLine.product.name}</p>
                        <input id="quantity${cartLine.product.id}" cartLine=${cartLine.quantity}>
                        <p id="priceById${cartLine.product.id}">${cartLine.product.price * cartLine.quantity}</p>
                    </li>`
                document.getElementById(`quantity${cartLine.product.id}`).addEventListener('keyup',(event) => editQuantity(e, cartLine.product.id));
            })
            totalHolder.innerHTML = total
        }

        function editQuantity(event, productId){
            let quantity = event.target.value;
            let cartLine = cart.find(cartLine => cartLine.product.id == productId)

            cartLine.quantity = quantity
            document.getElementById(`priceById${productId}`).innerHTML = cartLine.product.price * quantity
            total = 0

            cart.forEach(cartLine => {
                total += cartLineproduct.price * cartLine.quantity;
            })

            totalHolder.innerHTML = total
        }
}
*/