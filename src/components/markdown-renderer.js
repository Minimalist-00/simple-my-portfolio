import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose prose-sm max-w-none markdown-content">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-lg font-bold mt-6 mb-3">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-md font-bold mt-5 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm font-bold mt-4 mb-2">{children}</h3>
          ),
          p: ({ children }) => {
            // URLを検出してリンク化する関数
            const processText = text => {
              if (typeof text !== 'string') return text
              const urlRegex = /(https?:\/\/[^\s]+)/g
              const parts = text.split(urlRegex)
              return parts.map((part, index) => {
                if (part.match(urlRegex)) {
                  return (
                    <a
                      key={index}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {part}
                    </a>
                  )
                }
                return part
              })
            }

            return (
              <p className="mb-4 leading-relaxed tracking-wide text-gray-800">
                {Array.isArray(children)
                  ? children.map((child, _i) =>
                      typeof child === 'string' ? processText(child) : child
                    )
                  : typeof children === 'string'
                    ? processText(children)
                    : children}
              </p>
            )
          },
          ul: ({ children }) => (
            <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          hr: () => <hr className="my-6 border-gray-300" />,
          img: ({ src, alt, className }) => (
            <img
              src={src}
              alt={alt}
              className={
                className ||
                'max-w-[85%] h-auto my-6 mx-auto rounded-md shadow-sm'
              }
            />
          ),
          div: ({ node: _node, ...props }) => <div {...props} />,
          code: ({ inline, children }) =>
            inline ? (
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm whitespace-nowrap font-mono text-pink-600">
                {children}
              </code>
            ) : (
              <code className="block bg-gray-100 p-4 rounded overflow-x-auto mb-4 font-mono text-sm leading-relaxed">
                {children}
              </code>
            ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4 border border-gray-200">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
              {children}
            </blockquote>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
