const Footer = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-end px-16 py-8 mt-5 w-full text-base tracking-normal bg-white text-neutral-500 max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-2 items-center">
        <div className="self-stretch my-auto">2024 © by</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b72e476b5413616728070d0775e408c5fdf94cf5519bc424811294b9b8bf929?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="Company Logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.77] w-[53px]" />
      </div>
    </footer>
  );
};

export default Footer;