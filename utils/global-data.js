export const getGlobalData = () => {
    const name = process.env.BLOG_NAME ? decodeURI(process.env.BLOG_NAME) : '语风的博客'
    const blogTitle = process.env.BLOG_TITLE ? decodeURI(process.env.BLOG_TITLE) : '记事'
    const footerText = process.env.BLOG_FOOTER_TEXT ? decodeURI(process.env.BLOG_FOOTER_TEXT) : '开源'

    return {
        name,
        blogTitle,
        footerText
    }
}
