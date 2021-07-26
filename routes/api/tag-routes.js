const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { Op } = require('sequelize');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll()
  res.json(tags)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  const tags = await Tag.findAll({
    where: {
      id: req.params.id
    }
  })

});

router.post('/', (req, res) => {
  // create a new tag

  Tag.create({
    tag_name: req.body
  })
  .then(tag => {
    res.json(tag)
  })

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Tag.update({
    tag_name: req.body
  },
  {
  where: {
    id: req.params.id
  }
  })

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tag =>{
    res.json(tag)
  })

});

module.exports = router;
