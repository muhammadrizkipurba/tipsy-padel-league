import { OfficialPartners } from "@/constants";
import Image from "next/image";
import EventCard from "./events/EventCard";

export default function Home() {
  return (
    <div className="custom-container">
      <div className="mt-8">
        <h1 className="text-2xl uppercase text-center md:text-left text-white"><strong className="text-primary-pink">Tipsy Padel</strong> - Where Padel Meets Party</h1>
        <Image
          src="/images/tipsy-padel.png"
          alt=''
          height={500}
          width={500}
          className='rounded-xl w-full h-auto contrast-120 my-8'
        />
        <p className="mt-2 text-sm">
          Join us on the court for fierce competition, and off the court for unforgettable celebrations. We&apos;re more than just a team - we&apos;re a family that loves padel and knows how to have a good time.
          Get ready to play, laugh, and toast to victory!
        </p>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl uppercase text-primary-pink">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
          <EventCard />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-2xl uppercase text-primary-pink">Official Partners</h2>
        <div className="flex items-center gap-x-8 flex-wrap py-10">
          {OfficialPartners.map((item, idx) => {
            return (
              <Image
                key={`official-partner-${idx}`}
                src={`/partners/${item.logo}`}
                alt=""
                height={item.height || 100}
                width={item.width || 100}
                className="white-logo"
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
