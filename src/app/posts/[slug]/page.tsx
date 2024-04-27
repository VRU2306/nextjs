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
    const posts = await getBlogPosts()
    const { slug } = params
    const single: any = posts.find((post: any) => post.title === decodeURIComponent(slug))
    const post = await getPostData(single?.id)
    return <>
        <p className="mt-3 p-3">
            <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none">← Back to home</Link>
        </p>
        <img src={post.image} alt="post-img" className="w-full p-3 h-[70svh] object-cover " />
        <article className="w-full p-3 mt-3">
            <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} className="w-lg text-start justify-center" />

        </article>
    </>
}
export default SingleBlog;

export async function generateStaticParams() {
    const posts = await getBlogPosts()
    console.log(posts,37)
    return posts.map((post: any) => ({
        postId: post.link
    }))
}
