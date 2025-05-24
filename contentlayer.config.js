import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        description: { type: "string", required: true },
        date: { type: "date", required: true },
        image: { type: "string" },
        tags: { type: "list", of: { type: "string" } },
        github: { type: "string" },
        demo: { type: "string" },
        featured: { type: "boolean", default: false },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (project) => project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
        },
        url: { type: "string", resolve: (project) => `/${project._raw.flattenedPath}` }
    },
}))

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
        // Ajout d'une fonction pour remplacer les backticks dans le texte
        transformSource: (source) => {
            return source.replace(/`/g, '&grave;'); // Remplace les backticks par des entités HTML
        }
    },
});