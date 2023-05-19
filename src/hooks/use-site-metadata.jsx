import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    copyright
                    siteUrl
                }
            }
        }
    `)

    return data.site.siteMetadata
}