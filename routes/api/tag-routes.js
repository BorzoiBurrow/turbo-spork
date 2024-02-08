const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag, 
        },
      ],
    });
    return res.status(200).json(tag);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagsearch = req.params.id;
    const tag = await Tag.findByPk(tagsearch, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    return res.status(200).json(tag);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    return res.status(201).json(newTag);

  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const updated = await Tag.update(
      { tag_name: req.body.tag_name },
      { where:{ id: tagId }}
    );
    return res.status(200).json();

  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;

    const deleted = await Tag.destroy({
      where: { id: tagId },
    });
    return res.status(200).json();


  } catch (error) {
    console.log(error);
    return res.status(500).json({error});
  }
});

module.exports = router;
