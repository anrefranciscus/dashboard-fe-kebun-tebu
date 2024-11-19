const Header = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-between px-8 py-3.5 w-full text-sm font-medium tracking-normal leading-none text-center text-lime-600 whitespace-nowrap bg-white border-b border-solid border-b-neutral-200 max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c76bb1a92d6b61a7c93e0d9e5a08dc0f7cff7f3483ce1858f7b565424fcca41?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="Company Logo" className="object-contain shrink-0 aspect-[2] w-[90px]" />
      <div className="flex gap-2.5 items-center my-auto">
        <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-10 min-h-[40px]">
          <div className="self-stretch px-1 my-auto w-8 h-8 bg-green-100 border border-white border-solid rounded-[30px]">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;