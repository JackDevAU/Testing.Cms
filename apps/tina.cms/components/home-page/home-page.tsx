'use client';

import { useTina } from "tinacms/dist/react";
import { RuleQuery, RuleQueryVariables } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { customMarkdownComponents } from "../tina-markdown-components";

type TinaQuery = {
    query: string;
    data: RuleQuery;
    variables: RuleQueryVariables;
}

function HomePageTina(props: TinaQuery) {
    const {data} = useTina(props);
    return (
        <div>
            <TinaMarkdown content={data.rule.body} components={customMarkdownComponents} />
        </div>
    );
}

export default HomePageTina;
