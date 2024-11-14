import React from 'react';

const StatsCard = ({ icon, value, label, bgColor }) => {
  return (
    <article className="flex overflow-hidden flex-col flex-1 shrink gap-4 justify-center items-center px-16 py-4 bg-white rounded-xl border border-solid basis-0 border-neutral-200 min-h-[90px] min-w-[240px] max-md:px-5">
      <div className="flex gap-4 justify-center items-center">
        <div className={`flex overflow-hidden gap-2.5 justify-center items-center self-stretch p-4 my-auto ${bgColor} h-[60px] rounded-[999px] w-[60px]`}>
          <img loading="lazy" src={icon} alt="" className="object-contain self-stretch my-auto w-7 aspect-square" />
        </div>
        <div className="flex flex-col justify-center self-stretch my-auto text-stone-900">
          <div className="text-3xl font-semibold tracking-wide leading-loose">{value}</div>
          <div className="mt-1.5 text-xs tracking-normal leading-loose">{label}</div>
        </div>
      </div>
    </article>
  );
};

export default StatsCard;