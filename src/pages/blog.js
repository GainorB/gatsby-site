import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(post => (
    <div key={post.node.id}>
      <h3>{post.node.frontmatter.title}</h3>
      <small>
        Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
      </small>
      <br />
      <br />
      <Link to={post.node.frontmatter.path}>Read More</Link>
      <br />
      <br />
      <hr />
    </div>
  ))
  return (
    <div>
      <h1>Latest Posts</h1>
      {posts}
    </div>
  )
}

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
