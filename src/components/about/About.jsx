import "./about.css"
import Me from "../../img/med.jpeg"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <img className="a-img" src={Me}></img>
            </div>
            <div className="a-right">
                <div className="a-right-wrapper">
                    <div className="a-right-wrapper-first">
                        <h1 className="a-right-title">About Me</h1>
                        <p className="a-right-text">
                            I'm 23 years old, I consider my self a dinamic person,
                            ambitious and with skills for fast learning. 
                            I'm showing up myself to the world throught this 
                            portfolio because I am soon finishing my degree 
                            and I can't wait to try myself and my skill achieved 
                            developing and designing  real projects.
                        </p>
                    </div>
                    
                    <div className="a-right-wrapper-second">
                        <h2>Some of My Skills</h2>
                        <div className="a-right-skills">
                            <p>Python + Django</p>
                            <p>SQL, PostGreSQL, MySQL</p>
                            <p>C# + Asp.net</p>
                            <p>Html, Css & JavaScript</p>
                        </div>
                    </div>
                    
                    <div className="a-right-wrapper-second">
                        <h2>Some of My Goals</h2>
                        <div className="a-right-skills">
                            <p>Mastering Django Backend Development</p>
                            <p>Learning Bootstrap and React</p>
                            <p>Learning DevOps</p>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About