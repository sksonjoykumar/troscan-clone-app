'use client';
import ShuffleGrid from './ShuffleGrid';

export default function ShuffleHero() {
  return (
    <>
      <section className="w-full px-14 bg-[#F8EDE3] py-12   mx-auto">
        <div className="">
          <h1 className="text-5xl text-center text-textPrimary font-semibold mb-10">
            Transforming spaces with style,
            <br /> through Troscán's exquisite <br /> design expertise.
          </h1>
        </div>
        <ShuffleGrid />
      </section>
    </>
  );
}
