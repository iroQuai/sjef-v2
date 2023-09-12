import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Stuur een berichtje!</h1>
          <p>En laat me jouw project een kickstart geven &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="contact-formulier" data-netlify="true" method="post" action="/succes">
            <input type="hidden" name="form-name" value="contact-formulier" />
            <div>
              <label htmlFor="Naam">Naam</label>
              <input type="text" name="Naam" id="Naam"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email"/>
            </div>
            <div>
              <label htmlFor="onderwerp">Onderwerp</label>
              <input type="text" name="onderwerp" id="onderwerp"/>
            </div>
            <div>
              <label htmlFor="bericht">Bericht</label>
              <textarea name="bericht" id="bericht"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

// deze atribute heb ik uit de form name gehaald //
// action="https://sendmail.w3layouts.com/SubmitContactForm" //
