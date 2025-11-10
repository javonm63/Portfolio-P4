import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript';
import { useEffect } from 'react';
import '../styles/snippets.css'

function CodeSnippet({ code, width, height, position, left }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="pre" style={{width: width, height: height, position: position, left: left}}>
      <code className="language-javascript" style={{width: width}}>
        {code}
      </code>
    </pre>
  );
}

export default CodeSnippet;