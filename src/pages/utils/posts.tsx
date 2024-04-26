import fs from 'fs';
import path from 'path';
// gray matter to parse the Markdown files
import matter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'src/app/blogs');
export async function getBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      id:matterResult.data.id,
      date: matterResult.data.date,
      image:matterResult.data.image,
      link:`posts/${matterResult.data.title}`,
      description:matterResult.data.description,
      data:matterResult
    };
  });

  return posts.sort((a, b) => a.date < b.date ? 1 : -1);
}


export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `post${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: any & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      image:matterResult.data.image,
      contentHtml,
  }

  return blogPostWithHTML
}
