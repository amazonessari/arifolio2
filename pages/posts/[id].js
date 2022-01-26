import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Image from 'next/image'
import Styles from '../../styles/post.module.scss'
import Button from '../../components/button'
import Fade from 'react-reveal/Fade';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={Styles.hero}>
          <Fade bottom>
          <p class="sTitle">{postData.type}</p>
          <h1>{postData.title}</h1>
          <Image
              priority
              src={`/${postData.id}/thumbnail.png`}
              height={752}
              width={1200}
              alt=""
              className={Styles.image}
            />
            </Fade>
        </div>
        <div className={Styles.summary}>
          <div className={Styles.summaryLeft}>
            <h2>Summary</h2>
            {postData.url!=null && <Button link={`${postData.url}`} text="Visit WebSite" external/>}
            {postData.figma!=null && <Button link={`${postData.figma}`} text="Figma Design" external/>}
            {postData.github!=null && <Button link={`${postData.github}`} text="Source Code" external/>}
          </div>
          <p>{postData.summary}</p>
        </div>
        <div className={Styles.details}>
          <div className={Styles.tags}>
            <h2>My Role</h2>
            <ul>
              {postData.role.map((el)=>{
                return <li>{el}</li>
              })}
            </ul>
            <h2>Technology</h2>
            <ul>
              {postData.technology.map((el)=>{
                return <li>{el}</li>
              })}
            </ul>
            {postData.client!=null && 
              <>
                <h2>Client</h2>
                <p>{postData.client}</p>
              </>
            }
          </div>
          <Image
              priority
              src={`/${postData.id}/sub.png`}
              height={720}
              width={720}
              alt=""
            />
        </div>
        <h2 className={Styles.processTitle}>Process</h2>
        <div className={Styles.process} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}