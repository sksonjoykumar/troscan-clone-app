export default function RightText() {
  return (
    <>
      <div className="flex justify-center items-center md:items-end md:justify-around gap-6 md:gap-10 xl:ml-60">
        <div className=""></div>
        <div>
          <div className="flex items-center gap-1">
            <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
            <h5 className="text-base text-textPrimary font-semibold">
              Our Expertise
            </h5>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-textPrimary ">
            Selecting the ideal <br /> elements to elevate <br /> your space
          </h1>
        </div>
      </div>
    </>
  );
}
