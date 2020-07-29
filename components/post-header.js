import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Tags from './tags'

export default function PostHeader({ has_affiliate_link, title, tags, coverImage, date, author }) {
  return (
    <>
      <div className="mx-auto">
        <div className="mb-6">

          <div className="mt-4 md:mt-6 text-gray-800">
            <PostTitle >{title[0].text}</PostTitle>
          </div>

          <div className="mb-8 mt-4">
            <Tags tags={tags} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {author && <Avatar name={author.name} picture={author.picture} />}
            <div className="text-sm text-center">
              <Date dateString={date} />
            </div>
          </div>

        </div>
      </div>

      <div className="mb-2 md:mb-8 ">
        <CoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
    </>
  )
}
