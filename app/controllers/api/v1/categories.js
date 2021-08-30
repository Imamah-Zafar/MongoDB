const db = global.db;
const validator = require('../../../lib/validators/categories');

module.exports = (router) => {

  router.get('/', async (req, res) => {
    const categories = await db.Categories.find({})
      .sort({_id: -1})
      .skip(req.query.offset ? parseInt(req.query.offset) : 0)
      .limit(req.query.limit ? parseInt(req.query.limit) : 0)

    res.http200({categories: categories});
  });

  router.get('/:id', async (req, res) => {
    const category = await db.Categories.findOne({_id: req.params.id})
    res.http200({category: category});
  });

  router.post('/', validator.addCategory, async (req, res) => {
    const category = await db.Categories.create(req.body)
    res.http200({category: category});
  });

  router.put('/:id', async (req, res) => {
    const category = await db.Categories.updateOne({_id: req.params.id}, req.body)
    res.http200({category: category});
  });

  router.delete('/:id', async (req, res) => {
    const category = await db.Categories.remove({_id: req.params.id})
    res.http200({category: category});
  });
}
