import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

        <div id="header-wrapper">
            <div className="5grid-layout">
                <div className="row">
                    <div className="12u">
                        <section id="header">

                            <nav id="nav" className="mobileUI-site-nav">
                                <ul>
                                    <li className="current_page_item"><a href="index.html">Home</a></li>
                                    <li>
                                        <a href="">Dropdown</a>
                                        <ul>
                                            <li><a href="#">Lorem ipsum dolor</a></li>
                                            <li><a href="#">Magna phasellus</a></li>
                                            <li><a href="#">Etiam dolore nisl</a></li>
                                            <li>
                                                <span>Phasellus consequat</span>
                                                <ul>
                                                    <li><a href="#">Magna phasellus</a></li>
                                                    <li><a href="#">Etiam dolore nisl</a></li>
                                                    <li><a href="#">Veroeros feugiat</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Veroeros feugiat</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="right-sidebar.html">Right Sidebar</a></li>
                                    <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                    <li><a href="no-sidebar.html">No Sidebar</a></li>
                                </ul>
                            </nav>

                            {/*<h1><a href="#">Dopetrope</a></h1>*/}
                        </section>

                    </div>
                </div>
                <div className="row">
                    <div className="12u">
                        <section id="banner">
                            <a href="http://facebook.com/DreametryDoodle">
                                <span className="image image-full"><img src="images/pic01.jpg" alt=""/></span>
                                <header>
                                    <h2>Howdy. This is Dopetrope.</h2>
                                    <span className="byline">A responsive site template </span>
                                </header>
                            </a>
                        </section>

                    </div>
                </div>
            </div>
        </div>

        <div id="main-wrapper">
            <div className="5grid-layout">
                <div className="row">
                    <div className="12u">
                        <section>
                            <header className="major">
                                <h2>My Portfolio</h2>
                            </header>
                            <div className="5grid">
                                <div className="row">
                                    <div className="4u">
                                        <section className="box" >
                                            <header>
                                                <h3>Ipsum feugiat et dolor</h3>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                                                veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore
                                                ipsum lorem dolore.</p>
                                            <footer>
                                                <a href="#" className="button button-alt">Find out more</a>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="4u">
                                        <section className="box section22">
                                            <header>
                                                <h3>Sed etiam lorem nulla</h3>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                                                veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore
                                                ipsum lorem dolore.</p>
                                            <footer>
                                                <a href="#" className="button button-alt">Find out more</a>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="4u">
                                        <section className="box">
                                            <header>
                                                <h3>Consequat et tempus</h3>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                                                veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore
                                                ipsum lorem dolore.</p>
                                            <footer>
                                                <a href="#" className="button button-alt">Find out more</a>
                                            </footer>
                                        </section>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="4u">
                                        <section className="box">
                                            <header>
                                                <h3>Blandit sed adipiscing</h3>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                                                veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore
                                                ipsum lorem dolore.</p>
                                            <footer>
                                                <a href="#" className="button button-alt">Find out more</a>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="4u">
                                        <section className="box">
                                            <header>
                                                <h3>Etiam nisl consequat</h3>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                                                veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore
                                                ipsum lorem dolore.</p>
                                            <footer>
                                                <a href="#" className="button button-alt">Find out more</a>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="4u">
                                        <section className="box">
                                            <header>
                                                <h3>Dolore nisl feugiat</h3>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                                                veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore
                                                ipsum lorem dolore.</p>
                                            <footer>
                                                <a href="#" className="button button-alt">Find out more</a>
                                            </footer>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
