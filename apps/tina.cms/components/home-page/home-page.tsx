'use client';

import { useTina } from "tinacms/dist/react";
import { PageQuery, PageQueryVariables } from "../../tina/__generated__/types";

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
        </div>
    );
}

export default HomePageTina;