const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
  
//   if(node.internal.type === 'MarkdownRemark' ) {
//     const slug = path.basename(node.fileAbsolutePath, 'md')

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions

  //1.get path to template
  const singlePost = path.resolve('./src/templates/single-page-post.js')

  //2.get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node{
            slug
          }
        }
      }
    }
  `)
  
  //3.create new page
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: singlePost,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}