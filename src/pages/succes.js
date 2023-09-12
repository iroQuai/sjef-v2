import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

const SuccesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Bericht verstuurd</title>
      </Helmet>
      <div style={{textAlign: "center", padding:"5vh 0", lineHeight: "1.5"}}>
        <h1>Gelukt!</h1>
        <h3>Je bericht is succesvol verstuurd</h3>
        <p>Ik doe mijn best je zo snel mogelijk van een antwoord te voorzien. Terug naar de <Link to="/">frontpage</Link>.</p>
      </div>
    </Layout>
  )
}

export default SuccesPage
