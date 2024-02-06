import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";

export async function Code({
  children,
  language,
}: {
  children: string | undefined;
  language?: string;
}) {
  if (!children) return null;
  return (
    <SyntaxHighlighter
      children={children}
      language={language || "jsx"}
      style={atomOneDark}
    />
  );
}
