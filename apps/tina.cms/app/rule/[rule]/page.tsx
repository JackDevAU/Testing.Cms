import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

async function Page({ params }: { params: { rule } }) {
    const ruleResponse = await client.queries.rule({ relativePath: `${params.rule}.mdx` });
    const rule = ruleResponse.data.rule;

    return (
        <div>
            <TinaMarkdown content={rule.body} />
        </div>
    );
}

export default Page;
