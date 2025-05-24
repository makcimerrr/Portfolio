"use client"

import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import Link from "next/link"

const components = {
  Image,
  a: ({ href, ...props }) => {
    if (href && href.startsWith("/")) {
      return <Link href={href} {...props} />
    }

    if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
      return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    }

    return <a href={href} {...props} />
  },
  pre: (props) => <pre className="overflow-auto p-4 rounded-lg bg-muted my-4" {...props} />,
  code: (props) => <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />,
}

export function MDXContent({ code }) {
  let MDXComponent
  try {
    MDXComponent = useMDXComponent(code || "")
  } catch (error) {
    MDXComponent = () => (
      <div className="prose dark:prose-invert">
        <p>Failed to render MDX content.</p>
      </div>
    )
  }

  return (
    <div className="mdx">
      {code ? (
        <MDXComponent components={components} />
      ) : (
        <div className="prose dark:prose-invert">
          <p>
            This is a placeholder for the project content. In a real implementation with Contentlayer properly set up,
            this would render the MDX content from the project file.
          </p>
        </div>
      )}
    </div>
  )
}

