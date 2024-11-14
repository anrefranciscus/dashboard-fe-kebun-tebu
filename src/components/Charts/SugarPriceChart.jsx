const SugarPriceChart = () => {
  return (
    <div className="flex gap-3.5 items-start self-center mt-11 max-w-full text-xs leading-none text-right whitespace-nowrap rotate-[3.141592653589793rad] text-neutral-500 w-[368px] max-md:mt-10">
      <div className="flex flex-col">
        <div>30k</div>
        <div className="mt-6">25k</div>
        <div className="mt-6">20k</div>
        <div className="mt-6">15k</div>
        <div className="mt-6">10k</div>
        <div className="mt-6">0</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf560e55c98bc1f9b01860f9cd679f2f0a0554e93086744f9ec2c2d050de11f?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="Sugar price chart" className="object-contain z-10 grow shrink-0 mr-0 aspect-[1.62] basis-0 w-fit" />
      <div className="flex gap-9 justify-center items-center pl-16 mt-11 w-full text-xs leading-none text-center whitespace-nowrap rotate-[3.141592653589793rad] text-neutral-500 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch my-auto w-[52px]">Q1</div>
        <div className="self-stretch my-auto w-[55px]">Q2</div>
        <div className="self-stretch my-auto w-[70px]">Q3</div>
        <div className="self-stretch my-auto w-[59px]">Q4</div>
      </div>
    </div>
  );
};

export default SugarPriceChart;