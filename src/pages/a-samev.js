import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import dadosComissao from "../data/dadosComissao.json"

import Comissao from "../components/a-samev/Comissao"
import Header from '../components/a-samev/Header'
import Sobre from '../components/a-samev/Sobre'
import Galeria from '../components/a-samev/Galeria'
// import { Gallery } from "gatsby-theme-gallery";

const AsamevPage = () => (
  <Layout>
    <SEO title="A SAMEV" />
    <Header />
    <Sobre />
    <Comissao dados={dadosComissao.comissao} />
    <Galeria />
  </Layout>
)

export default AsamevPage
