import introImg from './../assets/img/template1-intro.png';

const Intro = () => {
    return (
    <div className="intro">
        <div className="layout">
            <h1>The best way to<br /><span>promote</span><br />your business!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore rerum fugiat. Cum fugit autem repudiandae necessitatibus, consequatur voluptate eum.</p>
            <img src={introImg} alt="intro" />
            <a className="button primary">Continue</a>
        </div>
    </div>
    )
}

export default Intro;