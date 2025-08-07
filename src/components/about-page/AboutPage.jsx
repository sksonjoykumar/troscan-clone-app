'use client';
import News from '../all-news/News';
import GetToTouch from '../get-to-touch/MainTextParallax';
import { HoverImageLinks } from '../hover-image-links/HoverImageLinks';
import OurTeam from './OurTeam';
import AboutTitle from './AboutTitle';
import AwardsRecognition from './AwardsRecognition';
import OurApproach from './OurApproach';
import WhyUs from './WhyUs';

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F8EDE3] ">
        <div className="px-14 py-40">
          {/* title  */}
          <AboutTitle />

          {/* Our Approach */}
          <OurApproach />

          {/* team card */}
          <OurTeam />

          {/*hoverImage  */}
          <HoverImageLinks />

          {/* Why Us */}
          <WhyUs />

          {/* AwardsRecognition */}
          <AwardsRecognition />
        </div>
        {/* GetToTouch  */}
        <GetToTouch />
        {/* News */}
        <News />
      </section>
    </>
  );
}
