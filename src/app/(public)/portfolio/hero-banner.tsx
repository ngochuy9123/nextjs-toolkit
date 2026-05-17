export const HeroBanner = () => {
  return (
    <section className="relative w-full h-100 md:h-125 bg-[#0077b6] flex justify-center items-center font-serif overflow-hidden">
      <div className="relative inline-block max-w-full">
        {/* Floating Item: Top Left (Style Outline) */}
        <div className="absolute -top-6.25 -left-5 md:-top-10 md:left-0 origin-left scale-60 md:scale-100 flex items-center gap-3.75 z-20 transition-all duration-300">
          <div className="w-[45px] h-[45px] rounded-full border-[1.5px] border-white"></div>
          <div className="h-[45px] flex justify-center items-center rounded-full px-[35px] text-[28px] italic whitespace-nowrap border-[1.5px] border-white text-white">
            2026
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-[15vw] md:text-[10vw] text-white m-0 font-bold leading-none tracking-[-2px] md:tracking-[-5px] uppercase relative z-10 transition-all duration-300">
          Portfolio
        </h1>

        {/* Glassmorphism Panes */}
        <div
          className="absolute rounded-[100px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-[8px] border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-10"
          style={{ top: "55%", left: "-5%", width: "40%", height: "60%" }}
        ></div>
        <div
          className="absolute rounded-[100px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-[8px] border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-10"
          style={{ top: "0%", right: "-3.5%", width: "35%", height: "50%" }}
        ></div>

        {/* Floating Item: Bottom Right (Style Filled) */}
        <div className="absolute -bottom-[25px] -right-[20px] md:-bottom-[40px] md:right-0 origin-right scale-60 md:scale-100 flex items-center gap-[15px] z-20 transition-all duration-300">
          <div className="w-11.25 h-11.25 rounded-full bg-white"></div>
          <div className="h-[45px] flex justify-center items-center rounded-full px-[35px] text-[28px] italic whitespace-nowrap bg-white text-[#0077b6] font-semibold">
            Nguyen Huy
          </div>
        </div>
      </div>
    </section>
  );
};
