import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        return (
            <div>

                <Helmet>
                    <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
                    <meta name="description" content={get(this, 'props.data.site.siteMetadata.description')} />
                </Helmet>

                <div className="banner banner--home">
                    <div className="banner__content text-center">
                        <div className="pb-8">
                            <h1 className="text-uppercase mb-3"><strong>Geoffrey Mureithi</strong></h1>
                            <h2 className="mb-3">Full Stack Developer | Nairobi-Kenya</h2>
                        </div>
                        <div className="banner__arrow animation-fadeInOut">
                            <span className="fi-chevron-down h2"></span>
                        </div>
                    </div>
                </div>

                <div className="container">

                    {posts.map(post => {
                        if (post.node.path !== '/404/') {
                            const title = get(post, 'node.frontmatter.title') || post.node.path
                            return (
                                <article className="post" key={post.node.frontmatter.path} itemScope itemType="http://schema.org/Article">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Link to={post.node.frontmatter.path} className="u-hover-fade">
                                                <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="mt-4 mt-lg-0" itemProp="name headline">
                                                <Link to={post.node.frontmatter.path}>
                                                    {post.node.frontmatter.title}
                                                </Link>
                                            </h3>
                                            <p className="mb-4"><small itemProp="datePublished">{post.node.frontmatter.date}</small></p>
                                            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                                        </div>
                                    </div>
                                    <meta itemProp="author" content="Geoffrey Mureithi" />
                                </article>
                            )
                        }
                    })}

                </div>

                <section className="section section--shaded py-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="py-4 text-center">
                                    <h3 className="mb-4">Wanna Talk?</h3>
                                    <p className="mb-4">Do you have an interesting project, idea or article related to React.js, Vue.js, Spring, Android, ReactNative or Javascript and Java in general?</p>
                                    <p><a href="tel:+254713622599" className="btn btn-outline-secondary">Contact Me</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section py-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="py-4">
                                    <p>My name is Geoffrey Mureithi and I've been a professional fullstack developer for over 6 years. I started writting code at the age of 15 and have worked on interesting projects revolving around Mobile, Web and Desktop apps.  I'm currently working full time as a Full Stack Developer at <a href="https://www.msurvey.com/" target="blank">mSurvey</a>.</p>
                                    <p>I enjoy web design and development because everyday is a new and fast-paced learning experience with unique challenges to overcome. Outside of work, I dream about seeing the world and experiencing all that it has to offer. My favorite things include traveling, painting, photography and swimming</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <Img sizes={this.props.data.aboutHunter.sizes} />
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                author
                description
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM DD, YYYY")
                        image {
                            childImageSharp{
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
        aboutHunter: imageSharp(id: { regex: "/about-mureithi/" }) {
            sizes(maxWidth: 690) {
              ...GatsbyImageSharpSizes
            }
        }
        gatsbyTemplate: imageSharp(id: { regex: "/gatsby-template/" }) {
            sizes(maxWidth: 690) {
              ...GatsbyImageSharpSizes
            }
        }
    }
`
