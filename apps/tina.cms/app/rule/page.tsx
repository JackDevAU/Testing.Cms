import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client";

async function Rules() {
    const rulesResponse = await client.queries.ruleConnection({ first: 0, last: 9000} );
    const rules = rulesResponse.data.ruleConnection.edges.map((rule) => {
        return {
            slug: rule.node._sys.filename, archived: rule?.node?.archived,
            title: rule?.node?.title, body: rule?.node?.body
        }
    });

    return (
        <div>
            <ul>
                {
                    rules.map(rule => <li key={rule.slug}><a href={`/rule/${rule.slug}`}>{rule.title}</a></li>)
                }
            </ul>

            { /* <TinaMarkdown content={rules[0].body} /> */}
        </div>
    );
}

export default Rules;
