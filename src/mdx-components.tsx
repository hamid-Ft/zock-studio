import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
		h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
		p: ({ children, ...props }) => <p {...props}>{children}</p>,
		ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
		li: ({ children, ...props }) => <li {...props}>{children}</li>,
		blockquote: ({ children, ...props }) => (
			<blockquote {...props}>{children}</blockquote>
		),
		...components,
	};
}
