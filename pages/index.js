import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Styles from '../styles/home.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Button from '../components/button'
import * as THREE from 'three';

import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

import { Fade } from 'react-awesome-reveal/Fade';

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

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : '#090909'} />
    </mesh>
  )
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={Styles.hero}>
        <div className={Styles.text}>
          <Fade bottom cascade>
              <h1>Arisa is a UXUI Designer who starts with why</h1>
          </Fade>
        </div>
        <div className={Styles.object}>
          <Image
            priority
            src="/images/icosahedron.png"
            height={800}
            width={800}
            alt="object"
            />
          </div>
          <div className={Styles.line}>
          </div>
      </section>

      <section id="work">
        <ul className={Styles.workList}>
          {allPostsData.map(({ id, date, title, type }) => (
          <li className={Styles.listItem} key={id}>
          <Fade bottom>
            <div className={Styles.workImageContainer}>
              <Link href={`/posts/${id}`}>
                <a className={Styles.workImage}>
                  <Image
                      priority
                      src={`/${id}/thumbnail.png`}
                      height={1004.4}
                      width={1600}
                      alt={name}
                    />
                </a>
              </Link>
            </div>
            <div className={Styles.text}>
                <p class="sTitle">{type}</p>
                <h2>{title}</h2>
                <Button link={`/posts/${id}`} text="View More"/>
            </div>
          </Fade>
          </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}