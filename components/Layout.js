import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {

  let splashScreem = () => {
    return <div className={styles.splash}>
      <div>
        <div className={styles.wrap1}></div>
       <div className={styles.end}>
        <div className={styles.wrap2}></div>
        </div> 
      </div>



    </div>
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Pokenext</title>
      </Head>
      {splashScreem()}
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}