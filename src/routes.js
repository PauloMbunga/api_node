const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');


routes.get('/products',ProductController.index);
routes.get('/products/:id',ProductController.show);
routes.post('/products',ProductController.store);
routes.put('/products/:id',ProductController.update);
routes.delete('/products/:id',ProductController.delete);

    // Product.create({
    //   title:'React Native',
    //   description:'Build native apps with React',
    //   url: 'http://github.com/facebook/react-native'

    // });

  // return res.send('Hello world,Paulo Mbunga');
//}


//);

module.exports=routes;