import Container from './container'
import Link from 'next/link'
import { MdKeyboardBackspace, } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Intro({ showBackNavigation }) {
  let [over, setOver] = React.useState(false);

  return (
    <div className="bg-accent-1 border-b border-accent-2">
      <Container className="">
        {showBackNavigation ?
          <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} className="inline-block">
            <Link href="/" >
              <a className="py-6 inline-flex flex-row items-center justify-start">
                <div className={over ? "transform -translate-x-2 transition-transform duration-150" : "transform transition-transform duration-150"}>
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <MdKeyboardBackspace />
                  </IconContext.Provider>
                </div>
                <h1 className="ml-2 text-xl font-bold tracking-tighter leading-tight md:pr-8">
                  BennyKok
              </h1>
              </a>
            </Link>
          </div>
          :
          <div className="py-4 flex flex-row items-center">
            <img
              src="/icon48.png"
              className="w-10 h-10 rounded-full mr-3"
            />
            <h1 className="text-xl font-bold tracking-tighter leading-tight md:pr-8">
              BennyKok
          </h1>
          </div>
        }
      </Container>
    </div>
  )
}
