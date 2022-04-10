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
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}