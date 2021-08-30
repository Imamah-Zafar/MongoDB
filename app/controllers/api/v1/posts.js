const db = global.db;
const validator = require('../../../lib/validators/posts')

module.exports = (router) => {

    router.post('/', validator.addPosts, async (req, res) => {
       
        req.body.user= req.user._id;
        const posts = await db.Posts.create(req.body);
        if (posts) {
            res.http200({ posts: posts });
        }
        else {
            res.http400();
        }
    });

    router.put('/:id', async (req, res) => {
        const posts = await db.Posts.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      
        if (posts) {
            res.http200({ posts: posts });
        }
        else {
            res.http400();
        }
    });

    router.get('/', async (req, res) => {
        let foundPosts = await db.Posts.find({ user: req.user._id}).populate("posts");
        if (foundPosts) {
            res.http200({ foundPosts });
        }
        else {
            res.http400();
        }
       
    });

    router.get('/:id', async (req, res) => {
        const post = await db.Posts.findOne({ _id: req.params.id })
        if (post) {
            res.http200({ post: post });
        }
        else {
            res.http400("Failure");
        }

    });

    router.delete('/:id', async (req, res) => {
        const posts = await db.Posts.deleteOne({ _id: req.params.id })
        if (posts) {
            res.http200("Successfully Deleted");
        }
        else {
            res.http400();
        }
    });



}