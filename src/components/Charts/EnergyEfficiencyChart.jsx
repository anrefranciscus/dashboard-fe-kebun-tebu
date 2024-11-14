const EnergyEfficiencyChart = () => {
  return (
    <div className="flex flex-col flex-1 w-full text-sm text-neutral-700 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full min-h-[366px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full min-h-[320px] max-md:max-w-full">
          <div className="flex flex-col px-11 w-full text-center whitespace-nowrap max-md:px-5 max-md:max-w-full">
            <div className="flex relative z-10 flex-col items-start px-3 pt-3.5 pb-12 -mb-9 min-h-[265px] max-md:pr-5 max-md:mb-2.5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68d69015d0f0d344f3b60caf3f844d143ed6c97210bde7486f936d3ae2de9098?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="Energy efficiency chart" className="object-cover absolute inset-0 size-full" />
              <div className="flex relative flex-col justify-center items-center w-9 h-[201px]">
                <div>92-100</div>
                <div className="mt-9">81-91</div>
                <div className="mt-9">69-80</div>
                <div className="mt-9">55-68</div>
                <div className="mt-9">39-54</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-2.5 w-full h-3 font-medium text-center whitespace-nowrap max-md:max-w-full">
            <div className="self-stretch my-auto text-xs text-white">2020</div>
            <div className="self-stretch my-auto">Q1</div>
            <div className="grow shrink self-stretch my-auto w-[132px]">Q2</div>
            <div className="grow shrink self-stretch my-auto w-[125px]">Q3</div>
            <div className="grow shrink self-stretch my-auto text-right w-[93px]">Q4</div>
          </div>
          <div className="flex-1 shrink gap-2.5 self-stretch mt-2.5 w-full leading-none text-center whitespace-nowrap min-h-[17px] text-neutral-400 max-md:max-w-full">
            Kuartal
          </div>
          <div className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center mt-2.5 w-full tracking-normal leading-none bg-white rounded-xl text-stone-900 max-md:max-w-full">
            <div className="flex gap-1 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-full bg-lime-950" />
              <div className="self-stretch my-auto">Sangat Baik</div>
            </div>
            <div className="flex gap-1 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-lime-700 rounded-full" />
              <div className="self-stretch my-auto">Cukup Layak</div>
            </div>
            <div className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap">
              <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-lime-600 rounded-full" />
              <div className="self-stretch my-auto">Baik</div>
            </div>
            <div className="flex gap-1 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-green-300 rounded-full" />
              <div className="self-stretch my-auto">Kurang Baik</div>
            </div>
            <div className="flex gap-1 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-lime-200 rounded-full" />
              <div className="self-stretch my-auto">Tidak Baik</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyEfficiencyChart;