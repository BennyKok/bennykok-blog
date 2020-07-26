import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Intro from '../components/intro'
import Container from './container'

export default function Layout({ preview, children, showBackNavigation }) {
  return (
    <>
      <Meta />
      <Intro showBackNavigation={showBackNavigation} />
      {showBackNavigation ? null : <div className="py-12" style={{ backgroundColor: "#363636" }}>
        <Container>
          <div className="text-white text-md">
            A place to <b>share</b> interesting discovery alone the way of <i>indie game development</i>, mostly with <b>Unity</b>
          </div>
        </Container>
      </div>}
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
