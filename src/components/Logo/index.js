import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby" //We query the logo image with graphQL.

export function Logo() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        file(relativePath: {eq: "MadHatter.png"}) {
          childImageSharp{
              fixed(width: 160){
                  ...GatsbyImageSharpFixed_withWebp
              }
          }
        }
      }
    `)
    console.log(data);
    return (
        <Img fixed={data.file.childImageSharp.fixed} />
    )
}

/*
How to query a static image in graphQL:

We go to graphiQL. Select 'files', then 'relativePath' and there we type the name of the
image. This way it will look for a file with that name.

*/