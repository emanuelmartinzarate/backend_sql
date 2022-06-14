var express = require('express');
var router = express.Router();

let products = []

router.get('/', function(req, res, next) {
  // res.json(products);
  res.render('products',{formProduct:'Products List', products:products})
});

router.get('/:id', function(req, res, next) {
  const { id } = req.params
  let product = null
  products.forEach(item =>{
      if(item.id === Number(id)){
        product = item
      }
  })

  if(!product){
    return res.status(400).send({error: `El producto con id ${id} no existe`})
  }

  res.json(product);
});

router.post('/', function(req, res, next) {
  const { title, price, thumbnail} =req.body
  const id = products.length
  let product = {"id":id +1, "title":title, "price": price, "thumbnail":thumbnail}
  products.push(product)
  res.render('index',{ title: 'E-commerce',formProduct:'Enter new Product' })
});

router.put('/', function(req, res, next) {
  const { id, title, price, thumbnail} =req.body
  const index = products.findIndex(product => product.id === id)

  products[index].title = title
  products[index].price = Number(price)
  products[index].thumbnail = thumbnail

  res.json(products[index])

});

router.delete('/:id', function(req, res, next) {
  const { id } = req.params
  let productsFiltrado = products.filter(item => item.id !== Number(id))
  products = productsFiltrado;
  res.json( {msg: `Se elimino el ${id} de la lista de productos`})
});

module.exports = router;
