import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, author, copyright } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: `${siteUrl}${author}`,
        copyright: `${siteUrl}${copyright}`,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="author" content={seo.author} />
            <meta name="copyright" content={seo.copyright}/>
            {children}
        </>
    )
}