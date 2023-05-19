import React from 'react'
import { SEO } from "../components/Seo"
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Resumecomp from '../components/Resumecomp'

export default function Resume() {
  return (
    <Layout>
      <Wrapper>
        <Resumecomp />
      </Wrapper>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Resume" />
)