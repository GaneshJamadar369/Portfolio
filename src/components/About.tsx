import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">The Story So Far</h3>
        <p className="para">
          Two degrees, zero chill. BS Data Science at IIT Madras plus B.Tech CSE at GCOEC.
          I research Agentic AI, break ciphers with mathematicians across three countries,
          and ship full-stack products that go to production.
          Currently building AI pipelines at LOQO AI, diving into LLM memory compression
          at IIT Bombay, and finishing a Cryptography research paper internationally.
          Won VSM Hackathon 2026. Not waiting for graduation to make an impact.
        </p>
        <br />
        <h3 className="title">Leadership & Awards</h3>
        <ul className="about-awards">
          <li className="award-gold">VSM Scholar — full academic sponsorship</li>
          <li className="award-gold">1st Place — VSM Hackathon 2026</li>
          <li>Drama Club Head at GCOEC</li>
          <li>Volunteer, Nilgiri House IITM</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
