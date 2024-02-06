import { Components } from "tinacms/dist/rich-text";
import { Code } from "./code/code";

export const customMarkdownComponents: Components<{}> = {
  code_block: (props) => {
    return (
      <Code
        language={props?.lang}
        children={props?.value}
      />
    );
  },
};
