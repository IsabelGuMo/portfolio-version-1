import React from 'react';
import { 
    ScrollContainer, 
    ScrollPage, 
    Animator,
    batch,
    Fade,
    FadeIn,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion';

import './style.css';

import headerImage from '../../img/header-image.png';
import curriculum from '../../img/curriculum.png'
import PowerPuffGirls from '../../img/PowerPuffGirls.png'
import pokeApi from '../../img/pokeApi.png'
import pokedex from '../../img/pokedex.png'
import about_me from '../../img/about_me.png'
import e_commerce from '../../img/e-commerce.png'
import drum_kit from '../../img/drum.png'
import tlb from '../../img/tlb.png'

import { FiMail } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { TiSocialLinkedin } from 'react-icons/ti'

const Home = () => {
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn());

    const work= [
        {
            name: "Currículum",
            link: 'https://isabel-gm-cv.vercel.app/',
            imageSrc: curriculum
        },
        {
            name: "PokeApi",
            link: 'https://poke-api-one.vercel.app/',
            imageSrc: pokeApi
        },
        {
            name: "PowerPuffGirls",
            link: 'https://power-puff-girls-vue.vercel.app/',
            imageSrc: PowerPuffGirls
        },
        {
            name: "Pokédex",
            link: 'https://react-pokedex-one.vercel.app/',
            imageSrc: pokedex
        },
        {
            name: "E-Commerce",
            link: 'https://e-commerce-shoes-deploy.vercel.app/',
            imageSrc: e_commerce
        },
        {
            name: "Drum-Kit",
            link: 'https://women-songs.vercel.app/',
            imageSrc: drum_kit
        },
        {
            name: "tlb-Soul",
            link: 'https://codeop-final-project-jade.vercel.app/',
            imageSrc: tlb
        },
    ]

const handleContactClick = (url) => {
    const win = window.open(url, '_blanck')
    win.focus()
}
    return(
        
        <ScrollContainer>
            {/* header */}
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <div className="image-container">
                            <img src={headerImage} alt="I'm" />
                            <div className="black-background"></div>
                        </div>
                </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                        <div className="name">
                            <h2 className="first">
                                iSABEL
                            </h2>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
                        <div className="name">
                            <h2 className="last">
                                G.M.
                            </h2>
                        </div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
                        <div className="position">
                            <div></div>
                            <h2 className="last">
                                Front-End Developer
                            </h2>
                        </div>
                    </Animator>
            </ScrollPage>

            {/* portfolio */}

            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title">
                        portfolio
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="portfolio-content">
                        {
                            work?.map((work, index) => {
                                return(
                                    <a href={work?.link} target="_blank" rel="noopener noreferrer" key={work?.name}>
                                        <div className="portfolio-card">
                                            <div className="project-image">
                                                <img src={work?.imageSrc} alt={work?.name} />
                                            </div>
                                            <div className="portfolio-title">
                                                <h3>
                                                    {work?.name}
                                                </h3>
                                            </div>
                                            <div className="count">
                                                {index}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </Animator>
            </ScrollPage>

         {/* about me */}
            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title about-me">
                        About Me
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
                   <div className="background-image-container">
                       <img src={about_me} alt="I'm working" />
                       <div className="black-background"></div>
                   </div> 
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
                    <div className="details">
                        <h2 className="gretting">Junior Full Stack Developer in progress🔋</h2>
                        <p className="bio"> 
                        Después de muchos años dedicada al sector dental, no he perdido las ganas de aprender, he descubierto mi pasión, <strong>el desarrollo web</strong> así que he decidido reinventarme. 
                        </p>
                        <p className="bio"> Mi objetivo es formar parte de un <strong>equipo</strong> , ayudar a conseguir objetivos y ser un valor añadido para la empresa y por que no, crecer con ella.
                        </p>
                        <p className="bio"> <strong>Hard Worker & Social Skills</strong>
                        </p>
                    </div>
                </Animator>
            </ScrollPage>

            {/* contact */}
            <ScrollPage page={5}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title contact">
                        Contact
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={6}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <span style={{ fontSize: '40px'}}>

                    {/* github link */}
                        <Animator animation={MoveIn(1000, 0)}>
                            <div 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleContactClick('https://github.com/IsabelGuMo')}
                                >
                                <FiGithub color='white' className='contact-list-icon' />
                                    <p>GitHub</p>
                            </div>
                        </Animator>

                    {/* gmail link */}
                        <Animator animation={MoveIn(-1000, 0)}>
                            <div 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleContactClick('https://mail.google.com/mail/u/0/#inbox/FMfcgzGpGBFFRLhZqwLsjmRsWCgqdmJB?compose=new')}
                                >
                                <FiMail color='white' className='contact-list-icon' />
                                    <p>Gmail</p>
                            </div>
                        </Animator>

                     {/* linkedin link */}
                        <Animator animation={MoveIn(0, 1000)}>
                            <div 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleContactClick('https://www.linkedin.com/in/isabel-guti%C3%A9rrez-moreno/')}
                                >
                                <TiSocialLinkedin color='white' className='contact-list-icon' />
                                    <p>Linkedin</p>
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage>

            {/* footer */}
            <ScrollPage page={7}>
                <Animator animation={batch(Fade(), Sticky())}>
                    <span className="footer">
                        Done
                    </span>
                    <br />
                    <span className="footer">
                        Thank <strong>You</strong> , For your time.
                    </span>
                </Animator>
            </ScrollPage>
            <p>"Icon made by
                <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/freepik">Freepik</a>from<a target="_blank" rel="noopener noreferrer" href="http://www.flaticon.com/">www.flaticon.com</a>"
            </p>
        </ScrollContainer> 
    )
}

export default Home;