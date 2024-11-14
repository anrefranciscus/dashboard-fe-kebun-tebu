const AttendanceChart = () => {
  return (
    <div className="flex flex-col mt-7 max-w-full font-medium text-center text-slate-700 w-[314px]">
      <div className="flex relative flex-col justify-center px-7 py-28 w-full aspect-[1.121] max-md:px-5 max-md:py-24">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39d20637cf95c25a8d78e2beb0949baa6e16ad330b30b147882b7b16a1f3e7c5?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="Attendance chart" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col justify-center items-center mb-0 max-md:mb-2.5">
          <div className="text-2xl leading-loose text-ellipsis">109,928</div>
          <div className="mt-1.5 text-sm leading-none">Total SDM</div>
        </div>
      </div>
      <div className="flex gap-2 items-start mt-7 text-sm tracking-normal leading-none text-stone-900">
        <div className="flex gap-2 items-center whitespace-nowrap">
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-600 rounded" />
          <div className="self-stretch my-auto text-ellipsis">Hadir</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-red-500 rounded" />
          <div className="self-stretch my-auto text-ellipsis">Tanpa Keterangan</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-yellow-500 rounded" />
          <div className="self-stretch my-auto text-ellipsis">Izin </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;