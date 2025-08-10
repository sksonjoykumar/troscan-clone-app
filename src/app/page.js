import AboutUs from '../components/AboutUs';
import News from '../components/all-news/News';
import AnimationImgGallery from '../components/animation-img-gallery/AnimationImgGallery';

import Background from '../components/background/Background';
import GetToTouch from '../components/get-to-touch/MainTextParallax';
import MainHover from '../components/hover-image-links/MainHover';
import MainTextParallax from '../components/text-parallax-components/MainTextParallax';

export default function Home() {
  return (
    <>
      <main>
        <Background />
        <AboutUs />
        <AnimationImgGallery />
        <MainTextParallax />
        <MainHover />
        <GetToTouch />
        <News />
      </main>
    </>
  );
}
