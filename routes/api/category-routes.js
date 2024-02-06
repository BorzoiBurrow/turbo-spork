const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    console.log("request made for all categories.")
    const categories =  Category.findAll({
      include: [{ model: Product }],
      
    });

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category_name = req.params.id;
    console.log(`request made for id ${req.params.id}`)
    const category = await Category.findOne({
      where: { id: category_name },
      include: [{ model: Product }],
    });

    return res.status(200).json(category);
  } catch (error) {
    console.log(error)
    return res.status(500).json({error});
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
