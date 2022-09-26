import React from "react"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="error-page">
        <h1>404</h1>
        <p>Oops! Page not found. Return <a href="/">Home</a>.</p>
      </div>
    </Layout>
  )
}

export default NotFound