import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";

/**
 * Render markdown text to HTML
 * - Uses remark to parse markdown and rehype to convert to HTML
 * - Adds target="_blank" and rel="noopener noreferrer" to external links for security
 * - Preserves line breaks in markdown using remark-breaks
 */
export async function renderMarkdown(text: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkRehype)
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
    })
    .use(rehypeStringify)
    .process(text);
  return String(result);
}
