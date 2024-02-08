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
    console.log(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category_id = req.params.id;
    console.log(`request made for id ${req.params.id}`)
    const category = await Category.findOne({
      include: [{ model: Product }],
      where: { id: category_id },
    });

    return res.status(200).json(category);
  } catch (error) {
    console.log(error)
    return res.status(500).json({error});
  }
});

router.post('/', async (req, res) => {
  try {
    const Category = await Category.create(req.body);
    return res.status(200).json(newCategory);

  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const ID = req.params.id;
    let update = await Category.update(req.body, {
      where: { id: ID },
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const category_name = req.params.id;
    const deleted = await Category.destroy({
      where: { id: category_name },

    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});


module.exports = router;
