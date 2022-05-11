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


const Home = () => {
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn());

    const work= [
        {
            name: "Curriculum",
            link: '#',
            imageSrc: curriculum
        },
        {
            name: "PowerPuffGirls",
            link: '#',
            imageSrc: PowerPuffGirls
        },
        {
            name: "PowerPuffGirls",
            link: '#',
            imageSrc: PowerPuffGirls
        }
    ]

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

        </ScrollContainer>
        
    )
}

export default Home;