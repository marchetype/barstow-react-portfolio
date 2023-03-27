import React from 'react';
import currentProj from '../../assets/images/deployed-character-generator.png';
import boxProjSS from '../../assets/images/deployed_box-proj_ss.png';
import weatherAppSS from '../../assets/images/deployed-mod6-ss.png';
import scheduleAppSS from '../../assets/images/deployed-mod5-ss.png';
import codeQuizSS from '../../assets/images/deployed-mod4-ss.png';
import passwordAppSS from '../../assets/images/deployed-mod3-ss.png';

export default function Projects() {
  return (
    <div className='page-format'>
      <main>
        <section className='code-project-cards'>
          <article className="current-project">
            <img src={currentProj} alt="Screenshot of most recent project" className='background-image'/>
            <a href="https://characterize-this.herokuapp.com/" target="_blank" rel='noreferrer' className="project-title">Characterize This!
              <p className="project-desc">Focus: Fullstack Development and Group Work</p>
            </a>
          </article>

          <article className="past-div">
            <div className="past-project">
              <img src={boxProjSS} alt="Screenshot of previous project" className='past-background-image'/>
              <a href="https://marchetype.github.io/the-box-project/" target="_blank" rel='noreferrer' className="past-project-title">The Box Project
                <p className="past-project-desc">Focus: JavaScript and APIs/Group Collaboration</p>
              </a>
            </div>
            <div className="past-project">
              <img src={weatherAppSS} alt="Screenshot of previous project" className='past-background-image'/>
              <a href="https://marchetype.github.io/module-6-challenge/" target="_blank" rel='noreferrer' className="past-project-title">City Weather Debrief
                <p className="past-project-desc">Focus: JavaScript and OpenWeather API</p>
              </a>
            </div>
            <div className="past-project">
              <img src={scheduleAppSS} alt="Screenshot of previous project" className='past-background-image'/>
              <a href="https://marchetype.github.io/module-5-challenge/" target="_blank" rel='noreferrer' className="past-project-title">Personal Schedule App
                <p className="past-project-desc">Focus: jQuery and day.js</p>
              </a>
            </div>
            <div className="past-project">
              <img src={codeQuizSS} alt="Screenshot of previous project" className='past-background-image'/>
              <a href="https://marchetype.github.io/module-4-challenge/" target="_blank" rel='noreferrer' className="past-project-title">Code Quiz
                <p className="past-project-desc">Focus: JavaScript</p>
              </a>
            </div>
            <div className="past-project">
              <img src={passwordAppSS} alt="Screenshot of previous project" className='past-background-image'/>
              <a href="https://marchetype.github.io/module-3-challenge/" target="_blank" rel='noreferrer' className="past-project-title">Password Generator
                <p className="past-project-desc">Focus: JavaScript</p>
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}