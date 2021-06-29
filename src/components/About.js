import React from "react";
function About() {
  return (
    <>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">
                I'm a software developer with bachelor degree in Computer and
                Control Engineering. I have experience in web as well as desktop
                application development. I'm specialized in .Net (Framework &
                Core) technologies like ASP.Net MVC, WinForms and WPF
              </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">
                also I have experience with front-end technologies like JS,
                JQuery, HTML and CSS. I have worked on several successful
                projects and I believe that I have what it takes to explore new
                challenges and thrive in the IT market.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="/">
              <i className="fas fa-download mr-2"></i>
              Download My CV!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
