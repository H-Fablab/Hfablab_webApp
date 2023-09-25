import dotenv from 'dotenv'
import getBlogPosts from '../middlewares/getBlogPosts.js'

dotenv.config()


 class BlogPostController {
 
  async blogPost(req, res) {

    const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    const locals = await getBlogPosts.single(req.query.id)

    const relative_posts_raw = await getBlogPosts.relatives(req.query.id)
    const relative_posts = [...relative_posts_raw.data]
    
    res.render('pages/post', { locals, relative_posts, currentPage})
  } 
}


export default new BlogPostController()
