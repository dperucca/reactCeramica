const products = [ {
    id: 1,
    name: 'cemento',
    price: 950,
    category : 'construccion',
    img :'https://www.hierrosan.com/images/000004000000004090870cemento-avellaneda.jpg',
    stock: 100,
    description : 'cemento avellaneda',
},
{
    id: 2,
    name: 'hidralit',
    price: 750,
    category : 'construccion',
    img :'https://arcencohogar.vtexassets.com/arquivos/ids/302066-800-800?v=637665766994770000&width=800&height=800&aspect=true',
    stock: 150,
    description : 'cemento albanileria',
},
{
    id: 3,
    name: 'cal',
    price: 550,
    category : 'construccion',
    img :'https://arcencohogar.vtexassets.com/arquivos/ids/284491-500-auto?v=637651647111100000&width=500&height=auto&aspect=true',
    stock: 50,
    description : 'cal hidratada',
},
{
    id: 4,
    name: 'gales',
    price: 1150,
    category : 'ceramica',
    img :'https://depisos.com/wp-content/uploads/2021/07/gales-arena-38x38-mosaico-600x600.jpg',
    stock: 500,
    description : 'ceramica Cerro Negro, Gales ',
},
{
    id: 5,
    name: 'belen negro',
    price: 1260,
    category : 'ceramica',
    img :'https://cerronegro.com.ar/images/productos/original//belen-negro_belen-negro-38x38.jpg',
    stock: 1500,
    description : 'ceramica Cerro Negro, Belen Negro ',
}
]

const categories = [
    {id: 'construccion', description: 'Construccion'},
    {id: 'ceramica', description: 'Ceramica'},
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}