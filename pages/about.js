import Head from 'next/head'
import Image from 'next/image';
import Title from '../components/title'
import Layout, { siteTitle } from '../components/layout'
import Styles from '../styles/about.module.scss'
import Button from '../components/button';

import Fade from 'react-reveal/Fade';

export default function Home({ allPostsData }) {
    return (
      <Layout about>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={Styles.hero}>
            <div className={Styles.bio}>
                <div className={Styles.image}>
                <Fade bottom>
                    <Image
                        priority
                        src="/images/profile.png"
                        height={520}
                        width={520}
                        alt="Photo"
                    />
                    <div className={Styles.message}>
                        <Image
                        priority
                        className="mt-3"
                        src="/images/message.svg"
                        height={180}
                        width={600}
                        alt="Message"
                        />
                    </div>
                </Fade>
                </div>
                <div className={Styles.text}>
                <Fade bottom>
                    <h1>Hello👋 <br/>It's Arisa!</h1>
                    <p>Arisa is a UIUX Designer who enjoys researching on deep insights of users.<br/>
                    She bought a $100 laptop at the age of 20, joined a tech startup as a design intern at 21, started full-time design work at 22, and got an offer from a giant tech company at 24.<br/>
                    She has been acquiring a high degree of skills and knowledge so tightly by exploring with her hands and her eyes, touching and examining the world with rationalism and spirited curiosity.<br/>
                    Currently, participating as a UX researcher and UI designer in B2B services for the mobile telco industry to enable next-generation, cloud-based, international mobile services.
                    </p>
                    <div className={Styles.passion}>
                        <div className={Styles.passionTitle}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00011 14.4001L7.64656 14.7537C7.74033 14.8474 7.8675 14.9001 8.00011 14.9001C8.13272 14.9001 8.2599 14.8474 8.35367 14.7537L8.00011 14.4001ZM1.63802 8.038L1.28446 8.39155H1.28446L1.63802 8.038ZM6.97135 2.70467L6.6178 3.05822V3.05822L6.97135 2.70467ZM8.00011 3.73343L7.64656 4.08698C7.84182 4.28225 8.1584 4.28225 8.35367 4.08698L8.00011 3.73343ZM9.02888 2.70467L8.67532 2.35111V2.35111L9.02888 2.70467ZM8.35367 14.0465L1.99157 7.68445L1.28446 8.39155L7.64656 14.7537L8.35367 14.0465ZM14.0087 7.68445L7.64656 14.0465L8.35367 14.7537L14.7158 8.39155L14.0087 7.68445ZM6.6178 3.05822L7.64656 4.08698L8.35367 3.37988L7.3249 2.35111L6.6178 3.05822ZM8.35367 4.08698L9.38243 3.05822L8.67532 2.35111L7.64656 3.37988L8.35367 4.08698ZM11.6955 1.1001C10.5627 1.1001 9.47634 1.5501 8.67532 2.35111L9.38243 3.05822C9.99591 2.44474 10.828 2.1001 11.6955 2.1001V1.1001ZM14.9668 5.37133C14.9668 6.23892 14.6221 7.07097 14.0087 7.68445L14.7158 8.39155C15.5168 7.59054 15.9668 6.50414 15.9668 5.37133H14.9668ZM15.9668 5.37133C15.9668 3.0124 14.0545 1.1001 11.6955 1.1001V2.1001C13.5022 2.1001 14.9668 3.56468 14.9668 5.37133H15.9668ZM4.30468 2.1001C5.17227 2.1001 6.00432 2.44474 6.6178 3.05822L7.3249 2.35111C6.52389 1.5501 5.43748 1.1001 4.30468 1.1001V2.1001ZM1.03345 5.37133C1.03345 3.56468 2.49803 2.1001 4.30468 2.1001V1.1001C1.94574 1.1001 0.0334473 3.0124 0.0334473 5.37133H1.03345ZM1.99157 7.68445C1.37809 7.07097 1.03345 6.23892 1.03345 5.37133H0.0334473C0.0334473 6.50414 0.48345 7.59054 1.28446 8.39155L1.99157 7.68445Z" fill="#686868"/></svg>
                        <p>Passion</p>
                        </div>
                        <p className={Styles.passionP}>#UX  #Design  #Technology  #Marketing  #Finance  #Investment  #Gadget  #Minimalism  #Chocolate🍫</p>
                    </div>
                    <Button link="../resume.pdf" text="Download CV" external>View Resume</Button>
                </Fade>
                </div>
            </div>
        </section>

        <Title title="Workflow" id="workflow"></Title>
        <section className={Styles.workflowSection}>
            <div className={Styles.igPc}>
                <div className={Styles.left}>
                    <Fade bottom>
                        <div className={Styles.element}>
                            <div className={Styles.header}>
                                <Image
                                priority
                                src="/images/icon_strategy.svg"
                                height={24}
                                width={24}
                                alt="icon"
                                />
                                <h3>Strategy</h3>
                            </div>
                            <p>Our first thing to do is collect data to find issues and user needs, and make a strategy for what value we will deliver to whom.</p>
                        </div>
                        <div className={Styles.element}>
                            <div className={Styles.header}>
                                <Image
                                priority
                                src="/images/icon_scope.svg"
                                height={24}
                                width={24}
                                alt="icon"
                                />
                                <h3>Scope</h3>
                            </div>
                            <p>Secondly, make a scope to define the functional and content requirements that fulfill and be aligned with the strategic goals. </p>
                        </div>
                        <div className={Styles.element}>
                            <div className={Styles.header}>
                                <Image
                                priority
                                src="/images/icon_structure.svg"
                                height={24}
                                width={24}
                                alt="icon"
                                />
                                <h3>Structure</h3>
                            </div>
                            <p>Thirdly, make a structure that defines how the system behaves when users interact, how it’s organized, prioritized, and how much of it.</p>
                        </div>
                        <div className={Styles.element}>
                            <div className={Styles.header}>
                                <Image
                                priority
                                src="/images/icon_skelton.svg"
                                height={24}
                                width={24}
                                alt="icon"
                                />
                                <h3>Skeleton</h3>
                            </div>
                            <p>And then, skeleton (wireframe) determines the visual form of all elements that make us interact with the functionality of the system.</p>
                        </div>
                        <div className={Styles.element}>
                            <div className={Styles.header}>
                                <Image
                                priority
                                src="/images/icon_surface.svg"
                                height={24}
                                width={24}
                                alt="icon"
                                />
                                <h3>Surface</h3>
                            </div>
                            <p>Finally, we can make the surface (interface) as the sum total of the decisions we have made. It determines how does the product will look like, and choosing the right layout, typography, colors, …etc.</p>
                        </div>
                    </Fade>
                </div>
                <div className={Styles.right}>
                    <Fade bottom>
                    <div className={Styles.direction}>
                        <p>Abstract</p>
                    </div>
                    <div className={Styles.element}>
                        <Image
                        priority
                        src="/images/icon_strategy.svg"
                        height={24}
                        width={24}
                        alt="icon"
                        />
                        <p>Strategy</p>
                        <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.2" stroke="#090909" stroke-width="8"/></svg>
                    </div>
                    <div className={Styles.element}>
                        <Image
                        priority
                        src="/images/icon_scope.svg"
                        height={24}
                        width={24}
                        alt="icon"
                        />
                        <p>Scope</p>
                        <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.4" stroke="#090909" stroke-width="8"/></svg>
                    </div>
                    <div className={Styles.element}>
                        <Image
                        priority
                        src="/images/icon_structure.svg"
                        height={24}
                        width={24}
                        alt="icon"
                        />
                        <p>Structure</p>
                        <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.6" stroke="#090909" stroke-width="8"/></svg>
                    </div>
                    <div className={Styles.element}>
                        <Image
                        priority
                        src="/images/icon_skelton.svg"
                        height={24}
                        width={24}
                        alt="icon"
                        />
                        <p>Skeleton</p>
                        <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.8" stroke="#090909" stroke-width="8"/></svg>
                    </div>
                    <div className={Styles.element}>
                        <Image
                        priority
                        src="/images/icon_surface.svg"
                        height={24}
                        width={24}
                        alt="icon"
                        />
                        <p>Surface</p>
                        <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="1" stroke="#090909" stroke-width="8"/></svg>
                    </div>
                    <div className={Styles.direction}>
                        <p>Specific</p>
                    </div>
                    </Fade>
                </div>
            </div>
            <div className={Styles.igSp}>
                <Fade bottom>
                <div className={Styles.stage}>
                    <Image
                    priority
                    src="/images/icon_strategy.svg"
                    height={16}
                    width={16}
                    alt="icon"
                    />
                    <h3>Strategy</h3>
                    <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.2" stroke="#090909" stroke-width="8"/></svg>
                </div>
                <div className={Styles.text}>
                    <p>Our first thing to do is collect data to find issues and user needs, and make a strategy for what value we will deliver to whom.</p>
                </div>
                <div className={Styles.stage}>
                    <Image
                    priority
                    src="/images/icon_scope.svg"
                    height={16}
                    width={16}
                    alt="icon"
                    />
                    <h3>Scope</h3>
                    <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.4" stroke="#090909" stroke-width="8"/></svg>
                </div>
                <div className={Styles.text}>
                    <p>Secondly, make a scope to define the functional and content requirements that fulfill and be aligned with the strategic goals. </p>
                </div>
                <div className={Styles.stage}>
                    <Image
                    priority
                    src="/images/icon_structure.svg"
                    height={16}
                    width={16}
                    alt="icon"
                    />
                    <h3>Structure</h3>
                    <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.6" stroke="#090909" stroke-width="8"/></svg>
                </div>
                <div className={Styles.text}>
                    <p>Thirdly, make a structure that defines how the system behaves when users interact, how it’s organized, prioritized, and how much of it.</p>
                </div>
                <div className={Styles.stage}>
                    <Image
                    priority
                    src="/images/icon_skelton.svg"
                    height={16}
                    width={16}
                    alt="icon"
                    />
                    <h3>Skeleton</h3>
                    <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="0.8" stroke="#090909" stroke-width="8"/></svg>
                </div>
                <div className={Styles.text}>
                    <p>And then, skeleton (wireframe) determines the visual form of all elements that make us interact with the functionality of the system.</p>
                </div>
                <div className={Styles.stage}>
                    <Image
                    priority
                    src="/images/icon_surface.svg"
                    height={16}
                    width={16}
                    alt="icon"
                    />
                    <h3>Surface</h3>
                    <svg width="488" height="219" viewBox="0 0 488 219" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M469.637 113.15L477.772 109.5L469.637 105.851L245.637 5.35052L244 4.61589L242.363 5.35052L18.3626 105.85L10.2283 109.5L18.3626 113.15L242.363 213.649L244 214.384L245.637 213.649L469.637 113.15Z" fill="#3E3E3E" fill-opacity="1" stroke="#090909" stroke-width="8"/></svg>
                </div>
                <div className={Styles.text}>
                    <p>Finally, we can make the surface (interface) as the sum total of the decisions we have made. It determines how does the product will look like, and choosing the right layout, typography, colors, …etc.</p>
                </div>
                </Fade>
            </div>
        </section>

        <Title title="Skill" id="skill"></Title>
        <section className={Styles.skillSection}>
            <div className={Styles.skills}>
                <div className={Styles.type}>
                    <Image
                        priority
                        src="/images/icon_research.svg"
                        height={24}
                        width={24}
                        alt=""
                    />
                    <h3>Research</h3>
                    <div className={Styles.skill}>
                        <p>Workshop</p>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p25}`}></div></Fade></div>
                    </div>
                    <div className={Styles.skill}>
                        <p>Analysis</p>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p75}`}></div></Fade></div>
                    </div>
                    <div className={Styles.skill}>
                        <p>Information Architecture</p>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p100}`}></div></Fade></div>
                    </div>
                    <div className={Styles.skill}>
                        <p>Usability Test</p>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p100}`}></div></Fade></div>
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
                    <p>Brand Identity</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p50}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <p>Design System</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p100}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <p>UI/UX Design</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p100}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <p>Prototyping</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p100}`}></div></Fade></div>
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
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p75}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <p>CSS</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p100}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <p>JavaScript</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p25}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <p>WordPress</p>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.p75}`}></div></Fade></div>
                </div>
                </div>
            </div>
        </section>

    </Layout>
  )
}