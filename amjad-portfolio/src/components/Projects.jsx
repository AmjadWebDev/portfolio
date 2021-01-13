import React from 'react';
import Project from './Project';

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately. All of these were built during my study in{' '}
            <a href="wildcodeschool.com/" target="_blank" rel="noopener noreferrer">
              Wild Code School
            </a>
            , where I've been coding for almost 5 months non-stop until I completed all the projects required to get my Web Developer certification.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project title="Contacto - contacts manager" img={'/projects/contacto.png'} tech="js css react node mongoDB" link="https://contacto-contacts-manager.herokuapp.com/login" repo="">
            <small>Built using Node, Express, MongoDB, CSS, React.js and React Router.</small>
            <p>This is a full-stack website that I made which lets the users save and manage thier contacts</p>
          </Project>
          <Project title="Magic The Gathering" img={'/projects/mtg.png'} tech="js css react" link="https://mtg-p2.netlify.app/" repo="">
            <small>Built using JS, CSS, React.js and React Router.</small>
            <p>This is a website to discover MTG cards and it's our second Project in formation of Web dev at Wild Code School working of 4 developers for 6 weeks</p>
          </Project>
          <Project title="ancient-egypt-hackaton" img={'/projects/egypt.png'} tech="js css react node " link="https://ancient-egypt-hackaton.netlify.app/" repo="">
            <small>Built using Node, CSS, React.js and React Router.</small>
            <p>This is my 1st hackathon, The objective: to create a desktop application over a historical period in 24 hours with team of 4 developers</p>
          </Project>
          <Project title="Covid-19 updates" img={'/projects/covid.png'} tech="js css react node mongoDB" link="https://amjadcovid19.netlify.app/" repo="">
            <small>Built using CSS, React.js and API.</small>
            <p>This is a a web app for the latest updates of infection numbers around the world</p>
          </Project>
          <Project title="Weather App " img={'/projects/weather.png'} tech="html css node mongoDB" link="https://amjad-weather-app-nodejs.herokuapp.com/" repo="">
            <small>Built using Node, Express, CSS, Heroku.</small>
            <p>This is a web app to check the weather in any city in the world.</p>
          </Project>
          <Project title="Web App ( V'Lille )" img={'/projects/vlille.png'} tech="js css react node mongoDB" link="https://vlilleapp.netlify.app/" repo="">
            <small>Built using Node, Express, MongoDB, CSS, React.js and React Router.</small>
            <p>This is a a web app to find out the nearest station of V'Lille to any location.</p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
