import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import dadosPalestrantes from "../data/dadosPalestrantes.json"

import Header from "../components/inicio/Header"
import Sobre from "../components/inicio/Sobre"
import Carousel from "../components/inicio/Carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Sobre />
    <Carousel dados={dadosPalestrantes.palestrantes} />
  </Layout>
)

export default IndexPage
