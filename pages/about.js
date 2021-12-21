import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Styles from '../styles/about.module.scss'
import Button from '../components/button'
import Title from '../components/title'

export default function Home({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={Styles.hero}>
        <Title title="About"></Title>
        <div className={Styles.bio}>
          <div className={Styles.image}>
            <Image
              priority
              src="/images/profile.png"
              height={520}
              width={520}
              alt=""
            />
            <Image
              priority
              src="/images/message.svg"
              height={180}
              width={600}
              alt=""
            />
          </div>
          <div className={Styles.text}>
            <p class="sTitle">UXUI Designer</p>
            <h1>Arisa Tsuji</h1>
            <p>Born in 1997, raised in Japan. Self-taught in coding and learned design from professionals as a full-time intern at a start-up.<br/>
I love to distill highly complex matters into clean as a simple thinker doubting premises. Also to explore with my hands and my eyes, touching and examining the world with rationalism and spirited curiosity. I am a natural maker, building the useful for the fun of it, and learning from my environment as I go.<br/>
Currently, participating as a UX designer in B2B services for the mobile telco industry to enable next-generation, cloud-based, international mobile services.
            </p>
            <div className={Styles.passion}>
              <div className={Styles.passionTitle}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00011 14.4001L7.64656 14.7537C7.74033 14.8474 7.8675 14.9001 8.00011 14.9001C8.13272 14.9001 8.2599 14.8474 8.35367 14.7537L8.00011 14.4001ZM1.63802 8.038L1.28446 8.39155H1.28446L1.63802 8.038ZM6.97135 2.70467L6.6178 3.05822V3.05822L6.97135 2.70467ZM8.00011 3.73343L7.64656 4.08698C7.84182 4.28225 8.1584 4.28225 8.35367 4.08698L8.00011 3.73343ZM9.02888 2.70467L8.67532 2.35111V2.35111L9.02888 2.70467ZM8.35367 14.0465L1.99157 7.68445L1.28446 8.39155L7.64656 14.7537L8.35367 14.0465ZM14.0087 7.68445L7.64656 14.0465L8.35367 14.7537L14.7158 8.39155L14.0087 7.68445ZM6.6178 3.05822L7.64656 4.08698L8.35367 3.37988L7.3249 2.35111L6.6178 3.05822ZM8.35367 4.08698L9.38243 3.05822L8.67532 2.35111L7.64656 3.37988L8.35367 4.08698ZM11.6955 1.1001C10.5627 1.1001 9.47634 1.5501 8.67532 2.35111L9.38243 3.05822C9.99591 2.44474 10.828 2.1001 11.6955 2.1001V1.1001ZM14.9668 5.37133C14.9668 6.23892 14.6221 7.07097 14.0087 7.68445L14.7158 8.39155C15.5168 7.59054 15.9668 6.50414 15.9668 5.37133H14.9668ZM15.9668 5.37133C15.9668 3.0124 14.0545 1.1001 11.6955 1.1001V2.1001C13.5022 2.1001 14.9668 3.56468 14.9668 5.37133H15.9668ZM4.30468 2.1001C5.17227 2.1001 6.00432 2.44474 6.6178 3.05822L7.3249 2.35111C6.52389 1.5501 5.43748 1.1001 4.30468 1.1001V2.1001ZM1.03345 5.37133C1.03345 3.56468 2.49803 2.1001 4.30468 2.1001V1.1001C1.94574 1.1001 0.0334473 3.0124 0.0334473 5.37133H1.03345ZM1.99157 7.68445C1.37809 7.07097 1.03345 6.23892 1.03345 5.37133H0.0334473C0.0334473 6.50414 0.48345 7.59054 1.28446 8.39155L1.99157 7.68445Z" fill="#686868"/></svg>
                <p>Passion</p>
                </div>
              <p className={Styles.passionP}>#Design  #Technology  #Business  #Telecom  #Finance  #Investment  #Gadget  #Minimalism  #Chocolate🍫</p>
            </div>
            <Button link="../resume.pdf" text="Download CV" external>Download CV</Button>
          </div>
        </div>
      </section>

      <section className={Styles.skillSection}>
        <div className={Styles.subtitle}>
          <Image
              priority
              src="/images/logo_arisa.svg"
              height={60}
              width={172}
              alt=""
          />
          <h2>'s Skill</h2>
        </div>
        <div className={Styles.skills}>
          <div className={Styles.type}>
            <Image
                priority
                src="/images/icon_research.svg"
                height={24}
                width={24}
                alt=""
            />
            <h3>Strategy</h3>
            <div className={Styles.skill}>
              <p>Workshop</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p25}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>Usability Test</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p50}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>Analysis</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p75}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>Information Architecture</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p100}`}></div></div>
            </div>
          </div>
          <div className={Styles.type}>
            <Image
                priority
                src="/images/icon_design.svg"
                height={24}
                width={24}
                alt=""
            />
            <h3>Surface</h3>
            <div className={Styles.skill}>
              <p>Branding</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p50}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>Design System</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p100}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>Web Design</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p100}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>App Design</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p75}`}></div></div>
            </div>
          </div>
          <div className={Styles.type}>
            <Image
                priority
                src="/images/icon_code.svg"
                height={24}
                width={24}
                alt=""
            />
            <h3>Technology</h3>
            <div className={Styles.skill}>
              <p>HTML</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p75}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>CSS</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p100}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>JavaScript</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p25}`}></div></div>
            </div>
            <div className={Styles.skill}>
              <p>WordPress</p>
              <div className={Styles.skillBar}><div className={`${Styles.length} ${Styles.p75}`}></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.workflowSection}>
        <div className={Styles.subtitle}>
          <Image
              priority
              src="/images/logo_arisa.svg"
              height={60}
              width={172}
              alt=""
          />
          <h2>'s Workflow</h2>
        </div>
        <div className={Styles.igPc}>
          <div className={Styles.left}>
            <div className={Styles.element}>
              <p>My first thing to do is collect data to find issues and user needs, and make a strategy for what value we will deliver to whom.</p>
            </div>
            <div className={Styles.element}>
              <p>Secondly, make a scope to define the functional and content requirements that fulfill and be aligned with the strategic goals. </p>
            </div>
            <div className={Styles.element}>
              <p>Thirdly, make a structure that defines how the system behaves when users interact, how it’s organized, prioritized, and how much of it.</p>
            </div>
            <div className={Styles.element}>
              <p>And then, skeleton (wireframe) determines the visual form of all elements that make us interact with the functionality of the system.</p>
            </div>
            <div className={Styles.element}>
              <p>Finally, we can make the surface (interface) as the sum total of the decisions we have made. It determines how does the product will look like, and choosing the right layout, typography, colors, …etc.</p>
            </div>
          </div>
          <div className={Styles.center}>
            <div className={Styles.element}>
              <p>Strategy</p>
              <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.5" stroke="#090909" stroke-width="8"/></svg>
            </div>
            <div className={Styles.element}>
              <p>Scope</p>
              <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.5" stroke="#090909" stroke-width="8"/></svg>
            </div>
            <div className={Styles.element}>
              <p>Structure</p>
              <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.5" stroke="#090909" stroke-width="8"/></svg>
            </div>
            <div className={Styles.element}>
              <p>Skeleton</p>
              <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.5" stroke="#090909" stroke-width="8"/></svg>
            </div>
            <div className={Styles.element}>
              <p>Surface</p>
              <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.5" stroke="#090909" stroke-width="8"/></svg>
            </div>
          </div>
          <div className={Styles.right}>
            <div className={Styles.element}>
              <p>Abstract</p>
            </div>
            <svg width="8" height="525" viewBox="0 0 8 525" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64642 524.354C3.84169 524.549 4.15827 524.549 4.35353 524.354L7.53551 521.172C7.73077 520.976 7.73077 520.66 7.53551 520.464C7.34025 520.269 7.02367 520.269 6.8284 520.464L3.99998 523.293L1.17155 520.464C0.976288 520.269 0.659705 520.269 0.464443 520.464C0.269181 520.66 0.269181 520.976 0.464443 521.172L3.64642 524.354ZM3.5 -2.18557e-08L3.49998 524L4.49998 524L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#686868"/></svg>
            <div className={Styles.element}>
              <p>Abstract</p>
            </div>
          </div>
        </div>
        <p className={Styles.conclusion}>
          <span class="groupP">It's not the end,&nbsp;</span><span class="groupP">actually the beginning.</span><br/><span class="groupP">By repeating enhancements&nbsp;</span><span class="groupP">based on engagement,&nbsp;</span><span class="groupP">we can deliver great values.</span>
        </p>
      </section>

    </Layout>
  )
}