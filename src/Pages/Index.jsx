import Games from "../Components/Games.jsx";
import Projects from "../Components/Projects.jsx";
import Contact from "../Components/Contact.jsx";
import NavBar from "../Components/NavBar.jsx";
import { TIMELINE } from '../constants/index.js'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

const Index = () => {
  return (
    <div className="h-screen">
      <div className="fixed left-0 top-0 w-full z-10 bg-slate-950">
        <NavBar />
      </div>
      <Parallax pages={5} className="h-full bg-[url(https://w.wallhaven.cc/full/nm/wallhaven-nm9omy.jpg)]">
        <ParallaxLayer offset={.15} factor={1} speed={.35}>
          <Games />
        </ParallaxLayer>
        <ParallaxLayer offset={1.15} factor={1} speed={.35}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={2} speed={.8}>
          <VerticalTimeline>
            {TIMELINE.map(log => {
              return (
                <VerticalTimelineElement
                  key={log.key}
                  date={log.date}
                  dateClassName="date text-white text-lg"
                  className="max-w-max max-h-max"
                >
                  <h3 className="vertical-timeline-element-title text-lg ">
                    {log.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle text-sm">
                    {log.location}
                  </h5>
                  <p id='description' className="text-md">
                    {log.description}
                  </p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} factor={1} speed={.35}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Index;