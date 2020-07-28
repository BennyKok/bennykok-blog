import PropTypes from "prop-types";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { hybrid } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Gist from 'react-gist';
import { Collapse } from 'react-collapse';
import { MdExpandMore } from 'react-icons/md';
import cn from 'classnames';

export default function CodeBlock({ language, value }) {
    const useGist = value.startsWith("[GIST]")

    if (useGist) {
        var gist

        const params = value.slice(6).trim().split(",")
        const id = params[0]
        const file = params[1]
        const collapsed = params[2] == 'true'

        if (id && file)
            gist = (<Gist id={id} file={file} />)
        else if (id)
            gist = (<Gist id={id} />)

        if (collapsed) {
            let [isOpened, setIsOpened] = React.useState(false);
            return (
                <div>
                    <div className='cursor-pointer text-sm p-2 bg-gray-100 transition-shadow duration-150 shadow-sm hover:shadow-md rounded-sm border flex flex-row items-center justify-between' onClick={() => {
                        setIsOpened(!isOpened)
                    }}>
                        <div className='ml-2'>
                            {`${file} expand to see file or`}&nbsp; <a href={`https://gist.github.com/${id}`} target='_blank'>view on Github</a>
                        </div>
                        <div className={cn('mr-2', {
                            'transform transition-transform rotate-0 duration-150': !isOpened,
                            'transform transition-transform rotate-180 duration-150': isOpened,
                        })}><MdExpandMore /></div>
                    </div>
                    <Collapse isOpened={isOpened}>
                        <div style={{ margin: '-8px' }}>
                            {gist}
                        </div>
                    </Collapse>
                </div>
            )
        }

        return (
            <div style={{ margin: '-8px' }}>
                {gist}
            </div>
        )
    }

    return (
        //border rounded-md
        <div className="" >
            {/* , background:"white"  */}

            <SyntaxHighlighter language={language} style={hybrid} customStyle={{ margin: '0rem', padding: '1rem' }}>
                {value}
            </SyntaxHighlighter>

            {/* <Highlight language={language}>
                {value}
            </Highlight> */}
        </div>
    )
}