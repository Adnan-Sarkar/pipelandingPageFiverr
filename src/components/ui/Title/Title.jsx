// eslint-disable-next-line react/prop-types
const Title = ({ title, backgroundText }) => {
  return (
    <div className="pb-[30px] pt-[30px] lg:pb-[80px] lg:pt-[50px]">
      <div className="relative flex items-center justify-center py-12">
        <div className="absolute text-6xl sm:text-[100px] lg:text-[150px] xl:text-[200px] font-bold font-outline-2 tracking-wider text-[#20C997] opacity-[0.1]">
          {backgroundText}
        </div>
        <div className="absolute w-full h-full"></div>
        <div className="relative text-2xl sm:text-5xl xl:text-[50px] tracking-wider font-bold z-50">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Title;
