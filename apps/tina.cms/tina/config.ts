import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: 'topic',
                label: 'Topics',
                path: 'content/topics',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'slug',
                        label: 'Slug',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        required: true,
                        isTitle: true,
                    },
                    {
                        type: "object",
                        list: true,
                        name: "topics",
                        label: "Topics",
                        ui: {
                            itemProps: (item) => {
                                return { label: item?.category };
                            },
                        },
                        fields: [
                            {
                                type: 'reference',
                                name: 'category',
                                label: 'Category',
                                collections: ['category'],
                            },
                        ]
                    }
                ],
            },
            {
                name: 'category',
                label: 'Categories',
                path: 'content/categories',
                format: 'json',
                fields: [
                    {
                        type: 'string',
                        name: 'slug',
                        label: 'Slug',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "object",
                        list: true,
                        name: "rules",
                        label: "Rules",
                        ui: {
                            itemProps: (item) => {
                                return { label: item?.rule };
                            },
                        },
                        fields: [
                            {
                                type: 'reference',
                                name: 'rule',
                                label: 'Rule',
                                collections: ['rule'],
                                required: true,
                            }
                        ]
                    }
                ],
            },
            {
                name: 'rule',
                label: 'Rules',
                path: 'content/rules',
                format: 'mdx',
                fields: [
                    {
                        type: 'boolean',
                        name: 'archived',
                        label: 'Archived',
                    },
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
