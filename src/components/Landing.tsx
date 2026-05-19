import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              GANESH
              <br />
              <span>JAMADAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Agentic AI</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Researcher</div>
              <div className="landing-h2-2">Builder</div>
            </h2>
            <h2 style={{ marginTop: "10px" }}>
              <div className="landing-h2-info">Full Stack</div>
              <div className="landing-h2-info-1">Innovator</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
