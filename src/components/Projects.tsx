import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ProjectItem from "@/components/ProjectItem";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef.current && triggerRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-400vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <div className='app__projects'>
      <div className='app__projects-wrapper' ref={triggerRef}>
        <div ref={sectionRef} className='app__projects-list'>
          <ProjectItem
            modifier='--classic'
            project_name='Classic cars'
            project_text='The restoration of the paintwork on classic cars involves meticulous work to bring back the original beauty of these timeless vehicles. Skilled craftsmen carefully strip away layers of old paint, repair any imperfections, and apply fresh coats with an attention to detail that ensures these classic automobiles regain their former glory. This process not only enhances their appearance but also preserves their historical significance for generations to come.'
          />

          <ProjectItem
            modifier='--modern'
            project_name='Modern cars'
            project_text='Restoring the paintwork of contemporary cars involves a process that brings these vehicles back to their pristine condition. Skilled technicians carefully assess any damage, meticulously prepare the surface, and apply fresh coats of paint, resulting in a rejuvenated appearance that makes these modern cars look as good as new. This restoration not only enhances their aesthetic appeal but also extends their lifespan, ensuring they continue to turn heads on the road.'
          />

          <ProjectItem
            modifier='--airbrush'
            project_name='Airbrush Art'
            project_text='Modern automotive airbrush art has evolved into a captivating form of custom vehicle decoration. Talented artists use airbrush techniques to create intricate designs, vivid colors, and personalized graphics on cars, turning them into unique works of art. This contemporary approach to airbrushing not only enhances the visual appeal of automobiles but also allows owners to express their individuality and style through the artistry on their vehicles.'
          />

          <ProjectItem
            modifier='--painting'
            project_name='Painting'
            project_text='High-quality painting of car parts is essential to maintain the aesthetic and functional aspects of a vehicle. Precision and expertise go into the process, ensuring that each component receives a flawless coat of paint. This not only enhances the appearance of the car but also protects the parts from corrosion and environmental damage, ultimately extending the lifespan of the vehicle.'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
