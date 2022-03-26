import React from 'react';
import Be from './assets/Be.svg';
import Dri from './assets/dribbble.svg';
import Lin from './assets/Linkedin.svg';
import ReactImg from './assets/react.svg';
import Figma from './assets/figma.svg';
import Discord from './assets/discord.svg';
import Git from './assets/github-fill.svg';

import BeF from './assets/footer/Logo Be.svg';
import DriF from './assets/footer/dribbble-ball-mark.svg';
import LinF from './assets/footer/Logo Linkedin.svg';
import GitF from './assets/footer/github-.svg';
// @ts-ignore
import ImagemProject from './assets/Project-exemple.png';
// @ts-ignore
import Profile from './assets/profile.png';
import './App.css';
import 'normalize.css';
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <div className="filter-purple">
                <div className="App">
                    <div className="header">
                        <div className="name-h">
                            <h1>Andre Braga</h1>
                            <div className="purple-box">
                                <span>Estou disponivel 👋 </span>
                            </div>
                        </div>

                        <div className="socials">
                            <a href="https://www.behance.net/andrbraga4" target="_blank" rel="noopener noreferrer"><img src={Be} alt=""/></a>
                            <a href="" target="_blank" rel="noopener noreferrer"><img src={Dri} alt=""/></a>
                            <a href="https://www.linkedin.com/in/andre-cristo-998341200/" target="_blank" rel="noopener noreferrer"><img src={Lin} alt=""/></a>
                            <a href="https://github.com/andrelnext" target="_blank" rel="noopener noreferrer"><img src={Git} alt=""/></a>
                        </div>
                    </div>
                    <div className="header-home">
                        <div className="biografia">
                            <h1>👋 Hi, I’m Andre</h1>
                            <span>I’m a Product Designer & Front End Developer with a passion for participate
                                in every stage of digital product, from discovery to delivery. Helping to
                                focus the business goals on users.</span>
                            <div className="contato">
                            <span>I’m looking for new opportunities <br/>
                            Previously I worked at <a href="https://discord.gg/cidadesanta" className="Link gmail">Santa Group (GTAV)</a></span>
                                <div className="mail">
                                    <span>Curitiba, Brasil</span>
                                    <a href="mailto:contato.andredevbr@gmail.com" className="Link gmail">contato.andredevbr@gmail.com</a>
                                </div>
                            </div>
                            <div className="more-projects">
                                <h3>👇 Check some projects</h3>
                            </div>
                        </div>
                        <div className="left">
                            <div className="profile">
                                <div className="container-user">
                                    <div className="avatar">
                                        <img src={Profile} alt=""/>
                                        <div className="work">UX/UI</div>
                                        <div className="name">Andre Braga</div>
                                        <div className="city">Curitiba</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="background-skills">
                                    🎨 Game Ui
                                </div>
                                <div className="background-skills">
                                    🔍 Meta Verso
                                </div>
                                <div className="background-skills">
                                    🔀 Sites
                                </div>
                                <div className="background-skills">
                                    🔤 Temas
                                </div>
                                <div className="background-skills">
                                    🔔 Front-End
                                </div>
                                <div className="background-skills">
                                    <img src={Figma} alt=""/>
                                </div>
                                <div className="background-skills">
                                    <img src={ReactImg} alt=""/>
                                </div>
                                <div className="background-skills">
                                    <a href="https://discord.gg/ACBttsy5aG" className="flex"><img src={Discord} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last-jobs">
                <div className="container-projeto">
                    <div className="conteudo">
                        <div className="left-S">
                            <h3>Santa Group</h3>
                            <h2>Ecommerce. <br/>
                                Web responsive.</h2>
                            <h2>UX/UI Design</h2>
                            <img src={Figma} alt=""/></div>
                        <div className="imagem">
                            <img src={ImagemProject} alt=""/>
                        </div>
                    </div>
                    <div className="blocked">
                        <div className="status">
                            In progress
                        </div>
                    </div>
                </div>
                <div className="container-projeto">
                    <div className="conteudo">
                        <div className="left-S">
                            <h3>Red Valley</h3>
                            <h2>Ecommerce. <br/>
                                Web responsive.</h2>
                            <h2>UX/UI Design</h2>
                            <img src={Figma} alt=""/></div>
                        <div className="imagem">
                            <img src={ImagemProject} alt=""/>
                        </div>
                    </div>
                    <div className="blocked">
                        <div className="status">
                            In progress
                        </div>
                    </div>
                </div>
                <div className="container-projeto">
                    <div className="conteudo">
                        <div className="left-S">
                            <h3>Red Valley</h3>
                            <h2>Ecommerce. <br/>
                                Web responsive.</h2>
                            <h2>UX/UI Design</h2>
                            <img src={Figma} alt=""/></div>
                        <div className="imagem">
                            <img src={ImagemProject} alt=""/>
                        </div>
                    </div>
                    <div className="blocked">
                        <div className="status">
                            In progress
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="start-footer">
                    Your feedback is welcome 👍🏻
                </div>
                <div className="center-footer">
                    Andre Braga <br/>
                    Designer & Front-End
                </div>
                <div className="social">
                    <a href="mailto:contato.andredevbr@gmail.com" className="gmail">contato.andredevbr@gmail.com</a>
                    <div className="socials">
                        <a href="https://www.behance.net/andrbraga4" target="_blank" rel="noopener noreferrer"><img src={BeF} alt=""/></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><img src={DriF} alt=""/></a>
                        <a href="https://www.linkedin.com/in/andre-cristo-998341200/" target="_blank" rel="noopener noreferrer"><img src={LinF} alt=""/></a>
                        <a href="https://github.com/andrelnext" target="_blank" rel="noopener noreferrer"><img src={GitF} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
