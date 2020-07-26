import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className="rounded-md"
      // className={cn('shadow-small', {
      //   'hover:shadow-medium transition-shadow duration-200 rounded-lg': slug,
      // })}
    />
  )
  return (
    <div className="mt-2  sm:mx-0 md:ml-0 md:mr-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
