import introImg from './../assets/img/main-intro.png';

const Intro = () => {
    return (
    <div className="intro-main">
        <div className="layout">
            <h1>Simple, Innovative &<br /><span>Effective Websites</span></h1>
            <p>Choose one of the templates below, provide some basic information about yourself and watch your own website form!</p>
            <img src={introImg} alt="intro" />
        </div>
    </div>
    )
}

export default Intro;