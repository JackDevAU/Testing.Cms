import { DocumentRendererProps, DocumentRenderer } from "@keystatic/core/renderer";
import { getHighlighter } from "shiki";
import { Renderers } from "../renderers";


type CustomDocumentRendererProps = DocumentRendererProps & {};

export const CustomDocumentRenderer = async (props: CustomDocumentRendererProps) => {
	const highlighter = await getHighlighter({
		theme: "github-dark",
	});
	const {
		renderers = Renderers(highlighter),
		...consumerProps
	} = props;
	return (
		<DocumentRenderer  renderers={renderers} {...consumerProps} />
	)
}