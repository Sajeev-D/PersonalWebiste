import Head from 'next/head'
import Navbar from './components/nav_bar'
import Profile from './components/profile'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>sajeevD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />   
      <Footer />
    </div>
  )
}