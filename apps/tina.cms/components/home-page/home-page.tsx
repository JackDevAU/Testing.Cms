'use client';

import { useTina } from "tinacms/dist/react";
import { RuleQuery, RuleQueryVariables } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { customMarkdownComponents } from "../tina-markdown-components";

type HomePageProps = {
    data: RuleQuery;
    variables: RuleQueryVariables;
    query: string;
}
function HomePageTina(props:HomePageProps) {
    const {data} = useTina(props);
    return (
        <div>
            This is the Home Page!
            <TinaMarkdown content={data.rule.body} components={customMarkdownComponents} />
        </div>
    );
}

export default HomePageTina;
