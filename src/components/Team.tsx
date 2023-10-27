import React from "react";

const Team: React.FC = () => {
  return (
    <div className='app__team'>
      <h2 className='app__team_title'>Team</h2>

      <div className='app__team-members'>
        <div className='app__team__member'>
          <h3 className='app__team_position'>
            Sarah Thompson - Chief Painter.
          </h3>
          <p className='app__team_description'>
            Sarah is our expert painter with over 15 years of experience. She
            oversees the painting process, ensuring precision, quality, and
            color accuracy. She also manages the paint mixing and selection
            process to achieve the perfect shade for each vehicle.
          </p>
        </div>

        <div className='app__team__member'>
          <h3 className='app__team_position'>
            Michael Rodriguez - Customer Relations Manager.
          </h3>
          <p className='app__team_description'>
            Michael is the friendly face who will guide you through our
            services. He assists customers with inquiries, estimates, and
            scheduling. His mission is to ensure a smooth and satisfying
            experience for every client.
          </p>
        </div>

        <div className='app__team__member'>
          <h3 className='app__team_position'>
            Lisa Davis - Quality Control Specialist.
          </h3>
          <p className='app__team_description'>
            Lisas role is crucial to maintaining our high-quality standards. She
            thoroughly inspects each painted vehicle to guarantee that it meets
            our stringent criteria for finish, color, and durability.
          </p>
        </div>

        <div className='app__team__member'>
          <h3 className='app__team_position'>
            Tom Wilson - Website Developer.
          </h3>
          <p className='app__team_description'>
            Tom is the tech-savvy member of our team responsible for maintaining
            and improving our user-friendly website. He ensures that our online
            platform is easy to navigate and keeps it up to date with the latest
            service information and features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
