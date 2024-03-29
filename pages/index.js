import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, allPosts }) {
  // const heroPost = allPosts[0].node
  const morePosts = allPosts
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <link rel="shortcut icon" href="https://www.gravatar.com/avatar/adc52f79841f6f723c53f4305ea7111e?s=20" />
          <title>BennyKok</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            gtag('config', 'UA-154808166-1', {
              'page_title' : 'Blog',
              'page_path': '/blog-home/'
            });
            `,
            }}
          />
        </Head>
        <Container>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverimage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost._meta.uid}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
