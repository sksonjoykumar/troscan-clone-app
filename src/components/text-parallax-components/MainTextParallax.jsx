'use client';
import TextParallaxContent from './TextParallaxContent';

export default function MainTextParallax() {
  return (
    <div>
      <div className="bg-[#F8EDE3] pt-20">
        {/* TextParallaxContent component  */}
        <TextParallaxContent
          imgUrl="/animate-imgs/img-1.jpeg"
          heading="Serene Urban Retreat"
          text="Where modern comfort meets peaceful sophistication."
          serial="01"
        />
        <TextParallaxContent
          imgUrl="/animate-imgs/img-2.jpeg"
          heading="Luxurious Coastal Living"
          text="Bringing the beauty of the shore into your home."
          serial="02"
        />
        <TextParallaxContent
          imgUrl="/animate-imgs/img-3.jpeg"
          heading="Modern Elegance in Every Room"
          text="Redefining spaces with timeless style and innovation."
          serial="03"
        />
      </div>
    </div>
  );
}
