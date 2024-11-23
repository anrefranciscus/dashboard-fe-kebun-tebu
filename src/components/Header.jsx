const Header = () => {
  return (
    <>
      <header className="flex flex-wrap gap-6 justify-between px-4 py-3 bg-white border-b border-neutral-200 items-center w-full text-sm font-medium text-lime-600 max-md:flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c76bb1a92d6b61a7c93e0d9e5a08dc0f7cff7f3483ce1858f7b565424fcca41?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
          alt="Company Logo"
          className="object-contain aspect-[2] w-[80px] max-md:mx-auto"
        />
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-10 h-10 bg-green-100 border border-white rounded-full text-center">
            JD
          </div>
        </div>
      </header>
      <section className="flex justify-between justify-items-stretch px-4 py-6 bg-white w-full max-w-7xl mx-auto space-y-4 max-md:flex-col">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <h1 className="flex-1 shrink gap-1 self-stretch my-auto text-lg font-semibold tracking-normal leading-none whitespace-nowrap min-w-[240px] text-stone-900 max-md:max-w-full">
            Dashboard
          </h1>
          <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
            <div className="flex gap-2 items-start self-stretch px-3 py-1.5 my-auto w-40 bg-white rounded-md border border-solid border-neutral-200">
              <div className="flex flex-1 shrink gap-1 items-center text-sm tracking-normal leading-none whitespace-nowrap">
                <span className="self-stretch my-auto text-neutral-500">
                  Year:
                </span>
                <span className="flex-1 shrink self-stretch my-auto font-medium basis-0 text-stone-900">
                  2023
                </span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed238550e775f8211d336443b4ff11e45d8c5f532a9a0e6209c4c2a1247c9dc7?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
                alt=""
                className="object-contain self-stretch my-auto w-4 aspect-square"
              />
            </div>
            <div className="flex gap-2.5 items-center self-stretch px-4 py-1.5 my-auto text-sm tracking-normal leading-none bg-white rounded border border-solid border-neutral-200 text-stone-900 w-[226px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8e5b7d4016638fd4b850f5e54b788b0598be3f22af8f83db73ad93de161a18d?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <span className="flex-1 shrink self-stretch my-auto basis-0">
                Sragi, Pekalongan
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b582602faf340a0f317e2055f5220ce4e44da834c3e4e11f0053a5046a00d3?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
