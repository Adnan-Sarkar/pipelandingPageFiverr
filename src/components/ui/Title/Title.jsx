// eslint-disable-next-line react/prop-types
const Title = ({ title }) => {
  return (
    <div className="pb-[30px] pt-[30px] lg:pb-[80px] lg:pt-[50px]">
      <div className="relative flex items-center justify-center py-12">
        <div className="relative text-center text-4xl sm:text-6xl lg:text-[65px] xl:text-[80px] tracking-wider font-bold z-50">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Title;
