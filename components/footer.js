import Container from './container'
import Link from 'next/link'
import { MdKeyboardBackspace, } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Footer() {
  let [over, setOver] = React.useState(false);

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex flex-row justify-end items-center">
          <div onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} className="inline-block">
            <a href="https://www.bennykok.com/" target="_blank"
              className="py-6 flex flex-row items-center">
              <h1 className="mr-2 text-xl font-bold tracking-tighter leading-tight">
                Main Site
            </h1>
              <div className={over ? "transform translate-x-2 transition-transform duration-150" : "transform transition-transform duration-150"}>
                <IconContext.Provider value={{ size: "1.5em", className: "transform rotate-180" }}>
                  <MdKeyboardBackspace />
                </IconContext.Provider>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </footer >
  )
}
