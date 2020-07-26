import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <h2 className="mt-6 mb-6 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
        Blog
      </h2> */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 col-gap-8 row-gap-8 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            tags={node._meta.tags}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
