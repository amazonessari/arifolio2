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
                    <h1>Hello👋 <br/>I'm Arisa!</h1>
                    <p>I am a Product Designer who believes that design is the bridge between vision and real-world impact. My strength lies in my swift adaptability to complex business domains and technological ecosystems, enabling me to deliver designs that resonate with both users and stakeholders.
                    Throughout my career, I have spearheaded design initiatives across various stages—from advocating design thinking to executing UXUI designs for intricate SaaS platforms.
                    </p>
                </Fade>
                </div>
            </div>
        </section>

        <Title title="Interest" id="Interest"></Title>
        <section className={Styles.interestSection}>
            <h2>#Innovation  #Design  #Technology  #ProductManagement  #Marketing  #Finance  #Telecom  #Investment  #Gadget  #Nature  #Workout  #Minimalism  #Chocolate🍫</h2>
        </section>

        <Title title="Capability" id="Capability"></Title>
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
                            <p>Conduct research to understand users and business. Make a strategy for what value we will deliver to whom based on data.</p>
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
                            <p>Make a scope to define the functional and content requirements that fulfill and be aligned with the strategic goals.</p>
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
                            <p>Make a structure that defines how the system behaves when users interact, how it's organized, prioritized, and how much of it.</p>
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
                            <p>Skeleton (wireframe) determines the visual form of all elements that make us interact with the functionality of the system.</p>
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
                            <p>Make the surface (interface) as the sum total of the decisions we have made. It determines how does the product will look like, and choosing the right layout, typography, colors, …etc.</p>
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
                    <p>Conduct research to understand users and business. Make a strategy for what value we will deliver to whom based on data.</p>
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
                    <p>Make a scope to define the functional and content requirements that fulfill and be aligned with the strategic goals.</p>
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
                    <p>Make a structure that defines how the system behaves when users interact, how it's organized, prioritized, and how much of it.</p>
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
                    <p>Skeleton (wireframe) determines the visual form of all elements that make us interact with the functionality of the system.</p>
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
                    <p>Make the surface (interface) as the sum total of the decisions we have made. It determines how does the product will look like, and choosing the right layout, typography, colors, …etc.</p>
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
                    <h3>Strategy</h3>
                    <div className={Styles.skill}>
                        <div className={Styles.skillTitle}>
                            <p>User Interview</p>
                            <p className={Styles.caption}>2 Years</p>
                        </div>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y2}`}></div></Fade></div>
                    </div>
                    <div className={Styles.skill}>
                        <div className={Styles.skillTitle}>
                            <p>Design Plan</p>
                            <p className={Styles.caption}>2 Years</p>
                        </div>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y2}`}></div></Fade></div>
                    </div>
                    <div className={Styles.skill}>
                        <div className={Styles.skillTitle}>
                            <p>Workshop</p>
                            <p className={Styles.caption}>1 Year</p>
                        </div>
                        <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y1}`}></div></Fade></div>
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
                <h3>Structure</h3>
                <div className={Styles.skill}>
                    <div className={Styles.skillTitle}>
                        <p>Visual Identity</p>
                        <p className={Styles.caption}>2 Years</p>
                    </div>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y2}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <div className={Styles.skillTitle}>
                        <p>Information Architecture</p>
                        <p className={Styles.caption}>3 Years</p>
                    </div>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y3}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <div className={Styles.skillTitle}>
                        <p>Prototyping</p>
                        <p className={Styles.caption}>3 Years</p>
                    </div>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y3}`}></div></Fade></div>
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
                <h3>Surface</h3>
                <div className={Styles.skill}>
                    <div className={Styles.skillTitle}>
                        <p>Design System</p>
                        <p className={Styles.caption}>3 Years</p>
                    </div>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y3}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <div className={Styles.skillTitle}>
                        <p>UI Design</p>
                        <p className={Styles.caption}>3 Years</p>
                    </div>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y3}`}></div></Fade></div>
                </div>
                <div className={Styles.skill}>
                    <div className={Styles.skillTitle}>
                        <p>Code</p>
                        <p className={Styles.caption}>3 Years</p>
                    </div>
                    <div className={Styles.skillBar}><Fade left><div className={`${Styles.length} ${Styles.y3}`}></div></Fade></div>
                </div>
                </div>
            </div>
        </section>

    </Layout>
  )
}