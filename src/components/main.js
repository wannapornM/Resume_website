import React from "react";

const photo = new URL("/assets/profile.jpg", import.meta.url);

export default function Main() {
  return (
    <div className="container-main">
      <aside>
        <section>
          <div className="photo">
            <img src={photo} alt="photo" />
          </div>
        </section>

        <section className="education">
          <h3>Education</h3>
          <div className="education-content">
            <p>2018-2022 Bachelor's degree</p>
            <div>Applied Mathematics, School of Science</div>
            <div>King Mongkut's Institute of Technology Ladkrabang</div>
            <p>2015-2017 High School</p>
            <div>Poolcharoenwitthayakhom School</div>
          </div>
        </section>

        <section className="values">
          <h3>Values</h3>
          <ul>
            <li>Able to work as a team and ready to learn new things</li>
            <li>Good listener and respect the opinions of others</li>
            <li>Take responsibility for work and have a positive attitude</li>
          </ul>
        </section>

        <section className="hobbies">
          <h3>Hobbies</h3>
          <ul>
            <li>Listen to music</li>
            <li>Watch movies and series</li>
            <li>Play badminton</li>
          </ul>
        </section>

        <section className="contact">
          <h3>Contact</h3>
          <div className="contact-address">
            <div>1/62 N0.8 Bang Chalong, Bang Phli, Samutprakan, 10540</div>
            <div>Email : wannapornd@helleSpec.com</div>
            <div>Facebook : Wannaporn Miw</div>
          </div>
        </section>
      </aside>

      <main>
        <section className="content-top">
          <h1>Wannaporn Dangkum</h1>
          <p>
            I am intersted in web application and Front-end Developer. I have
            experiences using React.js, JavaScript, Rails and HTML/CSS. I eager
            to develop while challenging myself by apply the knowledge and
            solving problems in my work. I am ready to open up to new knowledge.
            Ready to learn to work as a team and also learning live in society
          </p>
        </section>

        <section className="content-project">
          <h3>Projects</h3>
          <hr style={{ borderTop: "2px solid black" }} />
          <div className="project">
            <h4>
              <a href="">
                Demo application for purchasing tickets service for the Airport
                Rail Link
              </a>
            </h4>
            <ul>
              <li>
                Application that simulates buying tickets for the Airport Rail
                Link
              </li>
              <li>Calculate fare and display using React.js</li>
            </ul>
          </div>
        </section>

        <section className="content-workExperience">
          <h3>Work experiences</h3>
          <hr style={{ borderTop: "2px solid black" }} />
          <div className="company">
            <span>Hello Spec co.,ltd.</span>
            <span>June 2021 - Present</span>
          </div>
          <ul>
            <li>
              Participate in develop mini-projects base on JavaScript, HTML/CSS
              and React in the mini-bootcamp at Hello Spec
            </li>
            <li>
              Develop{" "}
              <a href="https://glistening-kangaroo-c28d07.netlify.app/">
                Salon landing page
              </a>{" "}
              from PSD design with frontend animated features
            </li>
            <li>
              Working on <a href="http://hk9.hellospec.work">HK9</a> app that
              calculate and display Thai astrology called Horakhun
            </li>
          </ul>
          <div className="company">
            <span>King Mongkut's Institute of Technology Ladkrabang</span>
            <span>2019 - 2020</span>
          </div>
          <div>
            <ul>
              <li>CB Head of Math Camp 7 2019, School of Science</li>
              <li>Staff of Open House 2019, School of Science</li>
              <li>Staff of UAMC 2019 School of Science</li>
              <li>President of Sports day, vidya vidya 15th</li>
              <li>
                Class Treasurer and Secretary, major math, School of Science
              </li>
            </ul>
          </div>
        </section>

        <section className="content-skill">
          <h3>Skills</h3>
          <hr style={{ borderTop: "2px solid black" }} />
          <ul>
            <li>HTML/CSS</li>
            <li>React.js</li>
            <li>JavaScript</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
