import React from 'react';
import { 
    ScrollContainer, 
    ScrollPage, 
    Animator,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion';

import './style.css';

import headerImage from '../../img/header-image.jpeg';
import curriculum from '../../img/curriculum.png'
import PowerPuffGirls from '../../img/PowerPuffGirls.png'
import pokeApi from '../../img/pokeApi.png'
import pokedex from '../../img/pokedex.png'
import about_me from '../../img/about_me.jpeg'

import { FiMail } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { TiSocialLinkedin } from 'react-icons/ti'

const Home = () => {
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn());

    const work= [
        {
            name: "Curriculum",
            link: '#',
            imageSrc: curriculum
        },
        {
            name: "PokeApi",
            link: '#',
            imageSrc: pokeApi
        },
        {
            name: "PowerPuffGirls",
            link: '#',
            imageSrc: PowerPuffGirls
        },
        {
            name: "Pokédex",
            link: '#',
            imageSrc: pokedex
        },
    ]

const handleContactClick = (url) => {
    const win = window.open(url, '_blanck')
    win.focus()
}
    return(
        
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div className="image-container">
                    <img src={headerImage} alt="header image" />
                    <div className="black-background"></div>
                </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                    <div className="name">
                        <h2 className="first">
                            Isabel
                        </h2>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
                    <div className="name">
                        <h2 className="last">
                            Gutiérrez Moreno
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

            {/* section 2 */}

            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title">
                        Portfolio
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="portfolio-content">
                        {
                            work?.map((work, index) => {
                                return(
                                    <a href={work?.link} target="_blank" key={work?.name}>
                                        <div className="position-card">
                                            <div classname="project-image">
                                                <img src={work?.imageSrc} alt={work?.name} />
                                            </div>
                                            <div className="position-title">
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

         {/* section 3 */}
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
                       <img src={about_me} alt="my picture" />
                       <div className="black-background"></div>
                   </div> 
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
                    <div className="details">
                        <h2 className="gretting">Hello</h2>
                        <p className="bio"> Metus erat varius neque potenti convallis! Dignissim commodo pellentesque euismod, ultricies lorem platea lobortis convallis vulputate eleifend est. Auctor elit rhoncus 
                        </p>
                        <p className="bio"> Metus erat varius neque potenti convallis! Dignissim commodo pellentesque euismod, ultricies lorem platea lobortis convallis vulputate eleifend est. 
                        </p>
                    </div>
                </Animator>
            </ScrollPage>

            {/* section 4 */}
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

                    {/* gmail link */}
                        <Animator animation={MoveIn(1000, 0)}>
                            <div 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={() => handleContactClick('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox')}
                                >
                                <FiMail color='white' className='contact-list-icon' />
                                    <p>Gmail</p>
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage>
        </ScrollContainer>
        
    )
}

export default Home;