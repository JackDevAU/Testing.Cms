'use client';

import { useTina } from "tinacms/dist/react";
import { PageQuery, PageQueryVariables } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { customMarkdownComponents } from "../tina-markdown-components";

type HomePageProps = {
    data: PageQuery;
    variables: PageQueryVariables;
    query: string;
}
function HomePageTina(props:HomePageProps) {
    const {data} = useTina(props);
    return (
        <div>
            This is the Home Page!
            <p>{data?.page.title}</p>
            <TinaMarkdown content={data.page.body} components={customMarkdownComponents} />
          
        </div>
    );
}

export default HomePageTina;