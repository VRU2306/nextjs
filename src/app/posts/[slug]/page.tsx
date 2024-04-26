import { getBlogPosts, getPostData } from "@/pages/utils/posts";
import Link from "next/link";
export async function generateMetadata({ params }: any) {
    const posts = await getBlogPosts()
    const { slug } = params
    const post: any = posts.find((post: any) => post.title === decodeURIComponent(slug))
    if (!post) {
        return {
            title: 'My Blog App'
        }
    }

    return {
        title: post.title,
    }
}
async function SingleBlog({ params }: any) {
    const { slug } = params
    const post = await getPostData(slug)
    return <>

        <article>
            {post.contentHtml}
            <section dangerouslySetInnerHTML={{ __html: post.contentHtml }}  />
            <p>
                <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none">← Back to home</Link>
            </p>
        </article>
    </>
}
export default SingleBlog;

export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post: any) => ({
        postId: post.link
    }))
}
