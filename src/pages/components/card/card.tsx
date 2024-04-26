import { getBlogPosts } from "../../utils/posts";
import Pagination from "../pagination/pagination";

export default async function Card({ pageNumber }: any) {
    const posts = await getBlogPosts();
    const postsPerPage = 2;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = pageNumber * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return <>
        <div className="w-full flex flex-col justify-center sm:flex-row">
            {currentPosts?.map((post: any, index: any) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gray-100">
                        <img src={post?.image} alt="background" className="w-full h-40 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h5 className="mb-2 text-xl font-bold text-gray-800">{post?.title}</h5>
                            <p className="mb-3 text-gray-600">{post?.description}</p>
                            <a href={post?.link} className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <Pagination currentPage={pageNumber} totalPages={totalPages} />
    </>
}
