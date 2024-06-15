import React from "react";
import MeetingTypeList from "@/components/MeetingTypeList";
const Home = () => {
  const now = new Date();
  const date = now.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <section className="flex size-full flex-col gap-5 text-white ">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover bg-bottom bg-no-repeat">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcomming Metting at:2:30PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};


<MeetingTypeList/>;

export default Home;
