import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Styles from '../styles/home.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Button from '../components/button'
import Title from '../components/title'
import * as THREE from 'three';

const name = 'ARIFOLIO'
const scene = new THREE.Scene();

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={Styles.homeHero}>
        <Image
            priority
            src="/images/logo_arifolio.svg"
            height={120}
            width={534}
            alt={name}
          />
          <p>UXUI Designer ARISA TSUJI’s Portfolio</p>
      </section>

      <section id="work">
        <Title title="Works"></Title>
        <ul className={Styles.workList}>
          {allPostsData.map(({ id, date, title, type }) => (
          <li className={Styles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a className={Styles.workImage}>
                <Image
                    priority
                    src={`/${id}/thumbnail.png`}
                    height={502.22}
                    width={800}
                    alt={name}
                  />
              </a>
            </Link>
            <div className={Styles.text}>
              <p class="sTitle">{type}</p>
              <h2>{title}</h2>
              <Button link={`/posts/${id}`} text="View More"/>
            </div>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}