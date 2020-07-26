import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import { MdKeyboardBackspace, } from "react-icons/md";
import { IconContext } from "react-icons";
import cn from 'classnames'
import Tags from './tags'

export default function PostPreview({
  title,
  tags,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {

  let [over, setOver] = React.useState(false);

  return (
    <div>
      <a>
        <div className="w-full rounded-lg border border-gray-400 bg-white" style={{ height: '30rem' }}>
          <div className="h-64 flex-none bg-cover text-center overflow-hidden rounded-t-lg"
            style={{ backgroundImage: `url(${coverImage.url})` }} title={title}>
          </div>

          <div className="h-56 p-4 py-6 flex flex-col justify-between leading-normal">

            <div className="mb-4">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a
                  className="hover:underline text-gray-800 font-bold text-xl mb-2">
                  <RichText render={title} />
                </a>
              </Link>
              <p className="text-sm leading-relaxed mb-2">{excerpt}</p>
            </div>

            <div>

              <div className="flex flex-row justify-between items-center">
                <div className="text-sm font-bold text-gray-800">
                  <Date dateString={date} />
                </div>
                <div className={over ? "transform translate-x-1 transition-transform duration-150" : "transform transition-transform duration-150"}>
                  <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="flex flex-row items-center" onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
                      <div className={cn(
                        "mr-1 font-bold text-sm",
                        {
                          'underline': over
                        }
                      )}>Read More</div>
                      <div className="transform rotate-180">
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <MdKeyboardBackspace />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <Tags tags={tags} />
              </div>

            </div>

          </div>
        </div>
      </a>
    </div >
  )
}
