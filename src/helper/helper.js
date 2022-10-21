import corset1 from '../assets/corset1.jpeg'
import corset2 from '../assets/corset2.jpeg'
import hoodie1 from '../assets/hoodie1.jpeg'
import spoderosas from '../assets/spoderosas.jpeg'
import conjuntobicolor from '../assets/conjuntobicolor.jpeg'
import pantalon1 from '../assets/pantalon1.jpeg'
import buzo from '../assets/buzo.png'

const productos = [
    
    {id: 1, name: 'Hoodie', img: [buzo], tipe: 'Vintage', price: 600, season: 'Winter', description: 'Hoodie Blanco simple, estilo vintage con cortes que lo caracterizan por la moda de los 90' },
    {id: 2, name: 'Corset uwu', img: [corset1], tipe: 'Vintage', price: 500, season: 'Winter', description: 'Corset simple'},
    {id: 3, name: 'Corset Dark', img: [corset2], tipe: 'Vintage', price: 600, season: 'Winter', description: 'Corset Dark'},
    {id: 4, name: 'Hoodie Black And Yellow', img: [hoodie1], tipe: 'Vintage', price: 450, season: 'Winter' , description: 'Hoodie Black And Yellow'},
    {id: 5, name: 'Pants algodón', img: [pantalon1], tipe: 'Vintage', price: 420, season: 'Winter', description: 'Pantalon de algodón'},
    {id: 6, name: 'Corset Chicas Super Poderosas', img: [spoderosas], tipe: 'Vintage', price: 318, season: 'Winter', description: 'Corset'},
    {id: 7, name: 'Conjunto Bicolor', img: [conjuntobicolor], tipe: 'Vintage', price: 318, season: 'Winter', description: 'Conjunto Bicolor'},
    {id: 8, name: 'Hoodie 2', img: [buzo], tipe: 'Vintage', price: 420, season: 'Winter', description: 'Hoodie 2'},
    {id: 9, name: 'Hoodie 3', img: [buzo], tipe: 'Vintage', price: 600, season: 'Winter', description: 'Hoodie 3'}

]


//promesa que devuelva 'productos' cuando se llame
 const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch