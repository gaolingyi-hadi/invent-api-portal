import Nav from '@/components/Nav/App';

export default function Home() {
    return (
        <div>
            <div id="header-wrapper">
                <div className="5grid-layout">
                    <div className="row">
                        <div className="12u">
                            <section id="header">
                                <Nav path='/'/>
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
                                            <section className="box section-hover ">
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
                                            <section className="box section-hover">
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
                                            <section className="box section-hover">
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
                                            <section className="box section-hover">
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
                                            <section className="box section-hover">
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
                                            <section className="box section-hover">
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
