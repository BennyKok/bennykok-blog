// import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import PostTitle from '../components/post-title'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./code-block";

export default function PostBody({ content, title, author, date }) {
  return (
    // sm:z-10 sm:relative
    <div className="mt-0 lg:-mt-28 relative" >
      <div className="bg-white rounded overflow-hidden p-8 shadow-lg max-w-4xl mr-auto ml-0 lg:ml-10">
        {/* className={markdownStyles['markdown']} */}
        {/* markdown-body */}
        <div className="prose max-w-none">
          <ReactMarkdown
            source={RichText.asText(content)}
            renderers={{ code: CodeBlock }}
          />
        </div>
        {/* <RichText render={content} /> */}
      </div>

    </div>
  )
}
