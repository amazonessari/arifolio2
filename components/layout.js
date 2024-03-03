import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../components/title'
import Styles from './layout.module.scss'
import Button from '../components/button'
import { useState } from "react";

const name = 'Arisa\'s Portfolio'
export const siteTitle = 'Arisa\'s Portfolio'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Layout({ children, about }) {
 /* Added */
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  /* */

  return (
    <div className={Styles.container}>
      <Head>
        <link rel="icon" href="images/favicon.png" />
        <meta
          name="description"
          content="UIUX Designer Arisa's latest shareable works"
        />
        <meta
          property="og:image"
          content="/OGP.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        //aos
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        //Google font
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Fira+Sans:wght@300;400&family=Inter:wght@300;400&family=Oxygen:wght@300;400&family=Poppins:ital,wght@0,400;0,600;1,700&family=Roboto:wght@300;400&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet"></link>

      </Head>

      <header className={Styles.header}>
        {about ? (
          <>
            <Link href="/">
              <a className={Styles.left}>
                <Image
                  priority
                  src="/images/logo_arisa.svg"
                  height={40}
                  width={115}
                  alt={name}
                />
              </a>
            </Link>
            <div></div>
          </>
        ) : (
          <>
            <Link href="/">
              <a className={Styles.left}>
                <Image
                  priority
                  src="/images/logo_arisa.svg"
                  height={40}
                  width={115}
                  alt={name}
                />
              </a>
            </Link>
            <Link href="/about">
              <a className={Styles.right}>
                <h3>About</h3>
              </a>
            </Link>
          </>
        )}
      </header>

      {/*
      <div onClick={handleToggle} className={Styles.humbuger}>
        <div className={isActive ? Styles.container : `${Styles.container} ${Styles.active}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={isActive ? Styles.menu : Styles.menuOpen}>
        <div className={Styles.menulink}>
            <Link href="/#work"><a><Title title="Works"></Title></a></Link>
            <Link href="/about"><a><Title title="About"></Title></a></Link>
        </div>
        <div className={Styles.menuFooter}>
          <div className={Styles.container}>
            <a className={Styles.email} href="mailto:arisa120597@gmail.com" target="_blank">
              <h3>arisa120597@gmail.com</h3>
            </a>
            <div className={Styles.links}>
              <a className={Styles.link} href="https://www.linkedin.com/in/arisa-tsuji/" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.20005 9.59999V17.6M16.8 17.6V13.6C16.8 11.8327 15.3674 10.4 13.6 10.4C11.8327 10.4 10.4 11.8327 10.4 13.6V17.6V9.59999M6.40005 7.19999H8.00005M2.40005 0.799988H21.6C22.4837 0.799988 23.2 1.51633 23.2 2.39999V21.6C23.2 22.4836 22.4837 23.2 21.6 23.2H2.40005C1.51639 23.2 0.800049 22.4836 0.800049 21.6V2.39999C0.800049 1.51633 1.51639 0.799988 2.40005 0.799988Z" stroke="#DDDDDD"/></svg>
              </a>
              <a className={Styles.link} href="/" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1655 2.39999L23.6644 2.36692C23.6511 2.16635 23.519 1.99324 23.329 1.92749C23.1391 1.86175 22.9282 1.91615 22.7938 2.06559L23.1655 2.39999ZM22.0679 7.13424C22.0679 6.8581 21.8441 6.63424 21.5679 6.63424C21.2918 6.63424 21.0679 6.8581 21.0679 7.13424H22.0679ZM11.9828 7.26575H11.4828V7.26575L11.9828 7.26575ZM11.9828 8.79999L12.4828 8.79999V8.79999L11.9828 8.79999ZM0.800049 20V19.5C0.579781 19.5 0.38546 19.6441 0.321555 19.8549C0.257649 20.0657 0.339216 20.2935 0.522402 20.4158L0.800049 20ZM2.39758 2.39999L2.86583 2.22467C2.79607 2.03833 2.62246 1.9111 2.42376 1.90068C2.22506 1.89026 2.0391 1.99865 1.95023 2.17666L2.39758 2.39999ZM8.7877 16.8L9.14153 17.1533C9.26389 17.0307 9.31412 16.8536 9.27431 16.685C9.23449 16.5165 9.1103 16.3806 8.94604 16.3257L8.7877 16.8ZM20.3457 3.9574L19.9749 4.29275L20.155 4.49199L20.4206 4.45177L20.3457 3.9574ZM22.6666 2.43307C22.7501 3.69263 22.6764 4.49628 22.4544 5.12198C22.2361 5.73723 21.8568 6.2307 21.222 6.83898L21.9139 7.56101C22.5992 6.90431 23.1038 6.28247 23.3969 5.45631C23.6862 4.6406 23.7512 3.67673 23.6644 2.36692L22.6666 2.43307ZM22.0679 8.29998V7.13424H21.0679V8.29998H22.0679ZM11.4828 7.26575L11.4828 8.79999L12.4828 8.79999L12.4828 7.26575L11.4828 7.26575ZM11.4828 8.79999L11.4828 9.59999L12.4828 9.59999L12.4828 8.79999L11.4828 8.79999ZM16.841 1.89999C13.881 1.89999 11.4828 4.30305 11.4828 7.26575H12.4828C12.4828 4.85388 14.4347 2.89999 16.841 2.89999V1.89999ZM21.0679 8.29998C21.0679 15.37 15.3456 21.1 8.28846 21.1V22.1C15.8994 22.1 22.0679 15.9208 22.0679 8.29998H21.0679ZM1.92933 2.57532C2.77224 4.82655 5.95117 9.29999 11.9828 9.29999V8.29999C6.51214 8.29999 3.62045 4.2401 2.86583 2.22467L1.92933 2.57532ZM1.95023 2.17666C0.304428 5.47335 0.0682682 8.63194 1.24089 11.3011C2.41177 13.9663 4.94348 16.0437 8.62937 17.2743L8.94604 16.3257C5.44304 15.1563 3.18215 13.2337 2.15643 10.8989C1.13245 8.56805 1.29567 5.72664 2.84493 2.62332L1.95023 2.17666ZM8.43387 16.4467C7.43239 17.4498 4.46393 19.5 0.800049 19.5V20.5C4.80432 20.5 8.01301 18.2836 9.14153 17.1533L8.43387 16.4467ZM20.7166 3.62206C19.761 2.56521 18.3783 1.89999 16.841 1.89999V2.89999C18.0837 2.89999 19.2007 3.43652 19.9749 4.29275L20.7166 3.62206ZM20.4206 4.45177C21.5661 4.27828 22.6912 3.67481 23.5372 2.7344L22.7938 2.06559C22.0965 2.84061 21.1785 3.32557 20.2709 3.46304L20.4206 4.45177ZM0.522402 20.4158C3.0617 22.1113 5.72353 22.1 8.28846 22.1V21.1C5.69049 21.1 3.33099 21.0887 1.0777 19.5842L0.522402 20.4158Z" fill="#DDDDDD"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
        */}

      <main>{children}</main>

      <footer>
        <div className={Styles.container}>
          <a className={Styles.email} href="mailto:arisa120597@gmail.com" target="_blank">
            <h3>arisa120597@gmail.com</h3>
          </a>
          <div className={Styles.links}>
            <a className={Styles.link} href="https://line.me/ti/p/09E94YzKKp" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 10.9428C23 6.01172 18.0656 2 11.9999 2C5.93502 2 1 6.01172 1 10.9428C1 15.3635 4.91335 19.0657 10.1995 19.7658C10.5577 19.8432 11.0453 20.0024 11.1686 20.3092C11.2796 20.5878 11.2412 21.0243 11.2041 21.3057C11.2041 21.3057 11.075 22.0833 11.0472 22.2489C10.9993 22.5276 10.8262 23.3386 11.9999 22.843C13.174 22.3474 18.3349 19.1061 20.6427 16.4449H20.6422C22.2364 14.6936 23 12.9163 23 10.9428" stroke="#DDDDDD"/><path d="M6 13.5H5.5V14H6V13.5ZM11.6522 9.5L12.0605 9.21148C11.9348 9.03358 11.7084 8.95752 11.5008 9.02346C11.2932 9.0894 11.1522 9.28217 11.1522 9.5H11.6522ZM14.4783 13.5L14.0699 13.7885C14.1956 13.9664 14.422 14.0425 14.6296 13.9765C14.8372 13.9106 14.9783 13.7178 14.9783 13.5H14.4783ZM16.1739 9.5V9H15.6739V9.5H16.1739ZM16.1739 13.5H15.6739V14L16.1739 14L16.1739 13.5ZM5.5 9V13.5H6.5V9H5.5ZM6 14H8.82609V13H6V14ZM9.45652 9V14H10.4565V9H9.45652ZM12.1522 14V9.5H11.1522V14H12.1522ZM11.2438 9.78852L14.0699 13.7885L14.8866 13.2115L12.0605 9.21148L11.2438 9.78852ZM14.9783 13.5V9H13.9783V13.5H14.9783ZM19 9H16.1739V10H19V9ZM16.1739 14L19 14L19 13L16.1739 13L16.1739 14ZM15.6739 9.5V11.5H16.6739V9.5H15.6739ZM15.6739 11.5V13.5H16.6739V11.5H15.6739ZM16.1739 12H19V11H16.1739V12Z" fill="#DDDDDD"/></svg>
            </a>
            <a className={Styles.link} href="https://www.linkedin.com/in/arisa-tsuji/" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.20005 9.59999V17.6M16.8 17.6V13.6C16.8 11.8327 15.3674 10.4 13.6 10.4C11.8327 10.4 10.4 11.8327 10.4 13.6V17.6V9.59999M6.40005 7.19999H8.00005M2.40005 0.799988H21.6C22.4837 0.799988 23.2 1.51633 23.2 2.39999V21.6C23.2 22.4836 22.4837 23.2 21.6 23.2H2.40005C1.51639 23.2 0.800049 22.4836 0.800049 21.6V2.39999C0.800049 1.51633 1.51639 0.799988 2.40005 0.799988Z" stroke="#DDDDDD"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
