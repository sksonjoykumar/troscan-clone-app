'use client';
import OverlayCopy from './OverlayCopy';
import StickyImage from './StickyImage';

const TextParallaxContent = ({ imgUrl, text, heading, serial }) => {
  return (
    <div className="m-0 p-0">
      <div className="relative h-[150vh]">
        {/* StickyImage component */}
        <StickyImage imgUrl={imgUrl} />
        {/* OverlayCopy component */}
        <OverlayCopy heading={heading} text={text} serial={serial} />
      </div>
    </div>
  );
};

export default TextParallaxContent;
