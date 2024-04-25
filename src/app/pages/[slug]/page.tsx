function SingleBlog({ params }: any) {
    return <>
        <div>SIngle blog Page</div>
        <h4>{params.slug}</h4>
    </>
}
export default SingleBlog;