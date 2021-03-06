const router = require('express').Router();
const { Category, Product } = require('../../models');
const { Op } = require('sequelize');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll()
  res.json(categories)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
const category = await Category.findAll({
  where: {
    id: req.params.id
  }
})
res.json(category)
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(category => {
    res.json(category)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
  where: {
    id: req.params.id
  }
  }).then(category =>{
    res.json(category)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(category =>{
    res.json(category)
  })
});

module.exports = router;
