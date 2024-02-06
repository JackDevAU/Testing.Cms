import { Highlighter } from "shiki";
import { Code } from "./code/code";
import { InlineCode } from "./inline-code/inline-code";
import { DocumentRendererProps } from "@keystatic/core/renderer";

/**
 * Override default renderers provided by @keystatic/core/renderer
 */
export const Renderers = (highligher: Highlighter) => {
	return {
		block: {
			code(props) {
				return <Code {...props} highlighter={highligher} />;
			},
		},
		inline: {
			code(props) {
				return <InlineCode {...props} />;
			}
		},
	} satisfies DocumentRendererProps['renderers'];
};