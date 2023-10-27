import React from "react";

const About: React.FC = () => {
  return (
    <div className='app__about'>
      <div className='app__about-cover'>
        <div className='app__about-wrapper'>
          <div className='app__about-info'>
            <h2 className='app__about_title'>About</h2>
            <p className='app__about_description'>
              At our auto painting website, we are dedicated to bringing new
              life to your vehicles through our top-notch painting services.
              Whether you want to give your car a fresh look, repair paint
              damage, or simply want to protect your investment, we have got you
              covered. Our team of experienced professionals ensures that your
              vehicle receives the best care possible. We offer a wide range of
              colors, finishes, and painting techniques, making sure your car
              not only looks fantastic but also maintains its value.
            </p>
          </div>
          <div className='app__about-picture'>
            <img
              className='app__about-image'
              src='./assets/images/about-bcg.png'
              alt='painting process'
            />
          </div>
        </div>

        <div className='app__about-wrapper'>
          <div className='app__about-picture'>
            <img
              className='app__about-image'
              src='./assets/images/about-bcg-2.png'
              alt='painting process'
            />
          </div>

          <div className='app__about-info'>
            <h2 className='app__about_title'>About our aim</h2>
            <p className='app__about_description'>
              At our studio, our primary aim is to rejuvenate your vehicles with
              the highest quality painting services. Whether your goal is to
              revamp your vehicles appearance, address paint damage, or
              safeguard your automotive investment, we are here to meet your
              needs. Our dedicated team of seasoned experts is committed to
              providing the utmost care for your vehicle. We offer an extensive
              selection of colors, finishes, and painting techniques, ensuring
              that your car not only attains a stunning visual appeal but also
              retains its long-term value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
