export default function AwardsRecognition() {
  const awards = [
    {
      title: 'Best Interior Design Agency',
      description:
        'Awarded for outstanding innovation in interior design concepts',
      year: 2025,
    },
    {
      title: 'Excellence in Custom Furniture',
      description:
        'Recognized for creating bespoke, high-quality furniture pieces',
      year: 2024,
    },
    {
      title: 'Outstanding Room Makeover',
      description: 'Honored for transforming spaces with impeccable style',
      year: 2023,
    },
    {
      title: 'Top Emerging Design Studio',
      description: 'Celebrated for redefining modern interior aesthetics',
      year: 2022,
    },
    {
      title: 'Client Choice Award',
      description:
        'Voted for exceptional customer service and design expertise',
      year: 2021,
    },
  ];
  return (
    <>
      <section className="mt-40">
        <div>
          <div className="flex items-center gap-1">
            <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
            <h5 className="text-base text-textPrimary">Awards & Recognition</h5>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl  text-[#8D493A] ">
            Our Achievements: <br /> Celebrating Excellence <br /> in Design
          </h1>
        </div>

        <div className=" mx-auto space-y-8 mt-14">
          {awards.map((award, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 border-b border-[#9c5d47] pb-2"
            >
              <div className="md:col-span-4 text-[#924e36] font-semibold text-2xl leading-tight max-w-xs">
                {award.title}
              </div>
              <div className="text-2xl md:col-span-6 mt-2 md:mt-0 text-[#924e36] leading-snug max-w-xl">
                {award.description}
              </div>
              <div className="text-2xl md:col-span-2 mt-2 md:mt-0 text-right text-[#924e36] font-semibold">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
