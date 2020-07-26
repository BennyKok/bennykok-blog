import PropTypes from "prop-types";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function CodeBlock({ language, value }) {
    return (
        <div className="border rounded p-2">
            <SyntaxHighlighter language={language} style={ascetic} customStyle={{ margin: '0rem' }}>
                {value}
            </SyntaxHighlighter>
        </div>
    )
}