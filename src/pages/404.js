import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import errorStyle from "../styles/404.module.scss"


const NotFound = () =>{
    return(
        <Layout>
            <Head title="404"/>
            <div className={errorStyle.error}>
            <h1>404</h1>
            <h2>Sorry, you are wrong</h2>
            <p><Link to="/">Back to the right path</Link></p>
            </div>
        </Layout>

    )
}

export default NotFound