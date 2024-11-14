const VehiclesChart = () => {
  return (
    <div className="flex gap-3.5 mt-14 max-w-full min-h-[231px] rotate-[3.141592653589793rad] w-[406px] max-md:mt-10">
      <div className="flex shrink-0 self-start h-[221px] w-[23px] max-md:hidden" />
      <div className="flex flex-1 shrink gap-2 pb-2.5 pl-7 h-full basis-0 min-w-[240px]">
        <div className="flex flex-col self-start text-sm leading-none text-right whitespace-nowrap text-neutral-500">
          <div>300</div>
          <div className="flex flex-col items-start px-1 mt-6">
            <div>200</div>
            <div className="mt-6 max-md:ml-0.5">150</div>
            <div className="mt-6 max-md:ml-0.5">100</div>
            <div className="mt-6 max-md:ml-2.5">50</div>
            <div className="mt-6 ml-4 max-md:ml-2.5">0</div>
          </div>
        </div>
        <div className="flex flex-col grow shrink-0 pb-3 basis-0 w-fit">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center py-2 w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/152b4be7f5a580c884265ac0e621a08402dfefc480682cf428a463198b65f1c5?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="" className="object-contain w-full aspect-[333.33] stroke-[1px] stroke-neutral-200" />
            </div>
            <div className="flex flex-col justify-center py-2 mt-6 w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/152b4be7f5a580c884265ac0e621a08402dfefc480682cf428a463198b65f1c5?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="" className="object-contain w-full aspect-[333.33] stroke-[1px] stroke-neutral-200" />
            </div>
            <div className="flex mt-6 w-full min-h-[16px]" />
            <div className="flex mt-6 w-full min-h-[16px]" />
            <div className="flex mt-6 w-full min-h-[16px]" />
            <div className="flex flex-col justify-center py-2 mt-6 w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/152b4be7f5a580c884265ac0e621a08402dfefc480682cf428a463198b65f1c5?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="" className="object-contain w-full aspect-[333.33] stroke-[1px] stroke-neutral-200" />
            </div>
          </div>
          <div className="flex z-10 gap-5 items-center self-center p-2.5 -mt-48 max-w-full w-[260px]">
            <div className="flex gap-10 justify-center items-center self-stretch my-auto h-[143px] w-[127px]">
              <div className="flex flex-col items-center self-stretch my-auto w-3 h-[151px] max-md:hidden">
                <div className="flex w-4 bg-lime-600 rounded fill-lime-600 min-h-[25px]" />
                <div className="flex mt-1 w-4 bg-yellow-500 rounded fill-yellow-500 min-h-[74px]" />
                <div className="flex mt-1 w-4 bg-blue-500 rounded min-h-[58px]" />
              </div>
              <div className="flex flex-col items-center self-stretch my-auto w-3 h-[151px] max-md:hidden">
                <div className="flex w-4 bg-lime-600 rounded fill-lime-600 min-h-[82px]" />
                <div className="flex mt-1 w-4 h-6 bg-yellow-500 rounded fill-yellow-500 min-h-[24px]" />
                <div className="flex mt-1 w-4 bg-blue-500 rounded min-h-[68px]" />
              </div>
              <div className="flex flex-col items-center self-stretch my-auto w-3 h-[151px] max-md:hidden">
                <div className="flex w-4 bg-lime-600 rounded fill-lime-600 min-h-[74px]" />
                <div className="flex mt-1 w-4 bg-yellow-500 rounded fill-yellow-500 min-h-[23px]" />
                <div className="flex mt-1 w-4 bg-blue-500 rounded min-h-[58px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesChart;