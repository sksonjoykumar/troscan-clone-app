'use client';
import Image from 'next/image';
import Link from 'next/link';
import { newsData } from './newsdata';

export default function NewsCard() {
  const news = newsData.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ">
        {/* news Card */}
        {news.map(item => (
          <Link href={`/news/${item.id}`} key={item.id}>
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-auto md:h-[370px] rounded-xl transition-all duration-300 hover:scale-105 ease-out"
            />
            <div className="flex items-center gap-1 mt-4">
              <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
              <h5 className="text-lg text-hoverColor ">{item.date}</h5>
            </div>

            <h4 className="mt-1 text-2xl text-textPrimary">{item.newsName}</h4>
            <p className=" text-hoverColor text-[14px] ">{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
