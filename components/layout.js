import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Styles from './layout.module.scss'
import Title from '../components/title'

const name = 'ARIFOLIO'
export const siteTitle = 'ARIFOLIO'

export default function Layout({ children, home }) {
  return (
    <div className={Styles.container}>
      <Head>
        <link rel="icon" href="images/favicon.png" />
        <meta
          name="description"
          content="UIUX Designer Arisa's Portfolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        //Google font
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Fira+Sans:wght@300;400&family=Inter:wght@300;400&family=Oxygen:wght@300;400&family=Poppins:ital,wght@0,400;0,600;1,700&family=Roboto:wght@300;400&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <header className={Styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/logo_arifolio.svg"
              height={40}
              width={180}
              alt={name}
            />
            <Link href="/about">
              <a>
                <h3>About</h3>
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/logo_arifolio.svg"
                  height={40}
                  width={180}
                  alt={name}
                />
              </a>
            </Link>
            <Link href="/#work">
              <a>
                <h3>Work</h3>
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      <footer>
        <Title title="Get in Touch"></Title>
        <div className={Styles.links}>
          <div className={Styles.link}>
            <a href="/"></a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.800049 7.20002L12 13.6L23.2 7.20002M2.40005 2.40002H21.6C22.4837 2.40002 23.2 3.11637 23.2 4.00002V20C23.2 20.8837 22.4837 21.6 21.6 21.6H2.40005C1.51639 21.6 0.800049 20.8837 0.800049 20V4.00002C0.800049 3.11637 1.51639 2.40002 2.40005 2.40002Z" stroke="#DDDDDD"/></svg>
            <div className={Styles.linkText}>
              <h3>Email</h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8001 0.799988L17.0775 0.383963L16.9515 0.299988H16.8001V0.799988ZM21.6001 3.99999H22.1001V3.7324L21.8775 3.58396L21.6001 3.99999ZM20.0001 19.5H7.20015V20.5H20.0001V19.5ZM6.10015 18.4V2.39999H5.10015V18.4H6.10015ZM7.20015 1.29999H16.8001V0.299988H7.20015V1.29999ZM21.1001 3.99999V18.4H22.1001V3.99999H21.1001ZM16.5228 1.21601L21.3228 4.41601L21.8775 3.58396L17.0775 0.383963L16.5228 1.21601ZM7.20015 19.5C6.59263 19.5 6.10015 19.0075 6.10015 18.4H5.10015C5.10015 19.5598 6.04035 20.5 7.20015 20.5V19.5ZM20.0001 20.5C21.1599 20.5 22.1001 19.5598 22.1001 18.4H21.1001C21.1001 19.0075 20.6077 19.5 20.0001 19.5V20.5ZM6.10015 2.39999C6.10015 1.79247 6.59263 1.29999 7.20015 1.29999V0.299988C6.04035 0.299988 5.10015 1.24019 5.10015 2.39999H6.10015ZM1.90015 5.59999V21.6H2.90015V5.59999H1.90015ZM4.00015 23.7H16.8001V22.7H4.00015V23.7ZM4.00015 4.49999H5.60015V3.49999H4.00015V4.49999ZM18.9001 21.6V20H17.9001V21.6H18.9001ZM16.8001 23.7C17.9599 23.7 18.9001 22.7598 18.9001 21.6H17.9001C17.9001 22.2075 17.4077 22.7 16.8001 22.7V23.7ZM1.90015 21.6C1.90015 22.7598 2.84035 23.7 4.00015 23.7V22.7C3.39263 22.7 2.90015 22.2075 2.90015 21.6H1.90015ZM2.90015 5.59999C2.90015 4.99247 3.39263 4.49999 4.00015 4.49999V3.49999C2.84035 3.49999 1.90015 4.44019 1.90015 5.59999H2.90015Z" fill="#DDDDDD"/></svg>
            </div>
          </div>
          <div className={Styles.link}>
            <a href="https://www.linkedin.com/in/arisa-tsuji/" target="_blank"></a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.20005 9.59999V17.6M16.8 17.6V13.6C16.8 11.8327 15.3674 10.4 13.6 10.4C11.8327 10.4 10.4 11.8327 10.4 13.6V17.6V9.59999M6.40005 7.19999H8.00005M2.40005 0.799988H21.6C22.4837 0.799988 23.2 1.51633 23.2 2.39999V21.6C23.2 22.4836 22.4837 23.2 21.6 23.2H2.40005C1.51639 23.2 0.800049 22.4836 0.800049 21.6V2.39999C0.800049 1.51633 1.51639 0.799988 2.40005 0.799988Z" stroke="#DDDDDD"/></svg>
            <div className={Styles.linkText}>
              <h3>LinkedIn</h3>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.53343 1.60001H14.4001L1.6001 14.4" stroke="#DDDDDD"/></svg>
            </div>
          </div>
          <div className={Styles.link}>
            <a href="/" target="_blank"></a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1655 2.39999L23.6644 2.36692C23.6511 2.16635 23.519 1.99324 23.329 1.92749C23.1391 1.86175 22.9282 1.91615 22.7938 2.06559L23.1655 2.39999ZM22.0679 7.13424C22.0679 6.8581 21.8441 6.63424 21.5679 6.63424C21.2918 6.63424 21.0679 6.8581 21.0679 7.13424H22.0679ZM11.9828 7.26575H11.4828V7.26575L11.9828 7.26575ZM11.9828 8.79999L12.4828 8.79999V8.79999L11.9828 8.79999ZM0.800049 20V19.5C0.579781 19.5 0.38546 19.6441 0.321555 19.8549C0.257649 20.0657 0.339216 20.2935 0.522402 20.4158L0.800049 20ZM2.39758 2.39999L2.86583 2.22467C2.79607 2.03833 2.62246 1.9111 2.42376 1.90068C2.22506 1.89026 2.0391 1.99865 1.95023 2.17666L2.39758 2.39999ZM8.7877 16.8L9.14153 17.1533C9.26389 17.0307 9.31412 16.8536 9.27431 16.685C9.23449 16.5165 9.1103 16.3806 8.94604 16.3257L8.7877 16.8ZM20.3457 3.9574L19.9749 4.29275L20.155 4.49199L20.4206 4.45177L20.3457 3.9574ZM22.6666 2.43307C22.7501 3.69263 22.6764 4.49628 22.4544 5.12198C22.2361 5.73723 21.8568 6.2307 21.222 6.83898L21.9139 7.56101C22.5992 6.90431 23.1038 6.28247 23.3969 5.45631C23.6862 4.6406 23.7512 3.67673 23.6644 2.36692L22.6666 2.43307ZM22.0679 8.29998V7.13424H21.0679V8.29998H22.0679ZM11.4828 7.26575L11.4828 8.79999L12.4828 8.79999L12.4828 7.26575L11.4828 7.26575ZM11.4828 8.79999L11.4828 9.59999L12.4828 9.59999L12.4828 8.79999L11.4828 8.79999ZM16.841 1.89999C13.881 1.89999 11.4828 4.30305 11.4828 7.26575H12.4828C12.4828 4.85388 14.4347 2.89999 16.841 2.89999V1.89999ZM21.0679 8.29998C21.0679 15.37 15.3456 21.1 8.28846 21.1V22.1C15.8994 22.1 22.0679 15.9208 22.0679 8.29998H21.0679ZM1.92933 2.57532C2.77224 4.82655 5.95117 9.29999 11.9828 9.29999V8.29999C6.51214 8.29999 3.62045 4.2401 2.86583 2.22467L1.92933 2.57532ZM1.95023 2.17666C0.304428 5.47335 0.0682682 8.63194 1.24089 11.3011C2.41177 13.9663 4.94348 16.0437 8.62937 17.2743L8.94604 16.3257C5.44304 15.1563 3.18215 13.2337 2.15643 10.8989C1.13245 8.56805 1.29567 5.72664 2.84493 2.62332L1.95023 2.17666ZM8.43387 16.4467C7.43239 17.4498 4.46393 19.5 0.800049 19.5V20.5C4.80432 20.5 8.01301 18.2836 9.14153 17.1533L8.43387 16.4467ZM20.7166 3.62206C19.761 2.56521 18.3783 1.89999 16.841 1.89999V2.89999C18.0837 2.89999 19.2007 3.43652 19.9749 4.29275L20.7166 3.62206ZM20.4206 4.45177C21.5661 4.27828 22.6912 3.67481 23.5372 2.7344L22.7938 2.06559C22.0965 2.84061 21.1785 3.32557 20.2709 3.46304L20.4206 4.45177ZM0.522402 20.4158C3.0617 22.1113 5.72353 22.1 8.28846 22.1V21.1C5.69049 21.1 3.33099 21.0887 1.0777 19.5842L0.522402 20.4158Z" fill="#DDDDDD"/></svg>
            <div className={Styles.linkText}>
              <h3>Twitter</h3>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.53343 1.60001H14.4001L1.6001 14.4" stroke="#DDDDDD"/></svg>
            </div>
          </div>
        </div>
        <p className={Styles.credit}>© 2021 ARISA. All rights reserved.</p>
      </footer>
    </div>
  )
}