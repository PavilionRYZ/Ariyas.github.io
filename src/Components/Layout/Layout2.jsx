import React from 'react'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import Header from './Header';

const Layout2 = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <div>
        {/* Helmet is actually a react library which is a requirement to maintain a proper SEO, 
    it creates our website title dynamic and it dynamically changes the title of our website based on the page we are viewing */}
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{ minHeight: "80vh" }}>
          <ToastContainer />
          {children}
        </main>
      </div>
    </>
  )
}
// Providing Default props to ensure that the pages we do not add the dynamic title nature, it will automatically use these basic details as the title orr any other detail that is required and we do not want to change it -> This is done for the react library (Helmet) that we are currently using
Layout2.defaultProps = {
  title: "Ariyas | Namaste Everyone",
  description: "Traditions that value",
  keywords: "Footwear, Artifacts, toys, furniture",
  author: "Life Saver"
}

export default Layout2;