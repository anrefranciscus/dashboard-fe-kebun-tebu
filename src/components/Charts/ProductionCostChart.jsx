const ProductionCostChart = () => {
  return (
    <div className="flex flex-col mt-4 w-full">
      <div className="flex flex-col items-start max-w-full font-medium text-center text-slate-700 w-[314px]">
        <div className="flex relative flex-col justify-center items-start px-8 py-28 aspect-[1.296] max-md:px-5 max-md:py-24">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a98386717232a881c72c30a227aa5860ddbf7cf2f67a09ed9bc88b9627286da?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="Production cost chart" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col justify-center items-center mb-0 max-md:mb-2.5">
            <div className="text-2xl leading-loose text-ellipsis">Rp 500 Jt</div>
            <div className="mt-1.5 text-sm leading-none">Total Pengeluaran</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-start mt-7 text-sm tracking-normal leading-none text-stone-900">
        <div className="flex gap-2 items-center whitespace-nowrap">
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-600 rounded" />
          <div className="self-stretch my-auto text-ellipsis">Produksi</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-red-500 rounded" />
          <div className="self-stretch my-auto text-ellipsis">Tenaga Kerja</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-yellow-500 rounded" />
          <div className="self-stretch my-auto text-ellipsis"> Pemeliharaan </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionCostChart;