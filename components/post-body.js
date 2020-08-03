// import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import PostTitle from '../components/post-title'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./code-block";
import { Collapse } from 'react-collapse';
import { MdInfoOutline, MdExpandMore } from "react-icons/md";
import { IconContext } from "react-icons";
import cn from 'classnames';

export default function PostBody({ content, title, author, date, has_affiliate_link }) {

  var disclosures

  if (has_affiliate_link) {
    let [isOpened, setIsOpened] = React.useState(false);
    disclosures = (
      <div className="max-w-4xl mx-auto shadow-lg">
        <button className={cn('w-full focus:outline-none cursor-pointer text-sm px-4 md:px-6 py-3 bg-gray-100 transition-shadow duration-150 border-t flex flex-row items-center justify-between',
          {
            'rounded-b': !isOpened,
            'rounded-none': isOpened,
          }
        )} onClick={() => {
          setIsOpened(!isOpened)
        }}>
          <div className='ml-2 text-sm'>
            *Affiliate link used!
          </div>
          <div className={cn('mr-2', {
            'transform transition-transform rotate-0 duration-150': !isOpened,
            'transform transition-transform rotate-180 duration-150': isOpened,
          })}> <IconContext.Provider value={{ size: "1.5em" }}>
              <MdExpandMore />
            </IconContext.Provider></div>
        </button>
        <Collapse isOpened={isOpened}>
          <div className="border-t flex flex-row items-center bg-gray-100 overflow-hidden p-6 shadow-sm max-w-4xl rounded-b">
            <div className="">
              <IconContext.Provider value={{ size: "20px", className: "opacity-75" }}>
                <MdInfoOutline />
              </IconContext.Provider>
            </div>
            <div className="ml-3 text-sm text-gray-800 bg-gray-100">
              Greetings! There are some Unity affiliate links used in this blog post, I will receive commission if you purchase through these links. While clicking these links won't cost you a cent, it means a lot to me personally.
            </div>
          </div>
        </Collapse>
      </div>
    )
  }

  return (
    // sm:z-10 sm:relative
    <div className="mt-0 lg:-mt-20 relative" >

      {/* ml-0 lg:ml-10 */}
      <div className={cn(
        "bg-white overflow-hidden px-4 md:px-8 pb-6 pt-6 shadow-lg max-w-4xl mx-auto", {
        'rounded-t': has_affiliate_link,
        'rounded': !has_affiliate_link,
      }
      )} >
        {/* className={markdownStyles['markdown']} */}
        {/* markdown-body */}

        <div className="prose max-w-none">
          <ReactMarkdown
            source={RichText.asText(content)}
            renderers={{ code: CodeBlock }}
            linkTarget='_blank'
          />
        </div>
        {/* <RichText render={content} /> */}
      </div>

      {disclosures}

    </div>
  )
}
