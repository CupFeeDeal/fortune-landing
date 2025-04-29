export default function Home() {
  return (
    <div className="h-dvh overflow-y-auto">
      <div className="relative w-full max-w-[440px] mx-auto">
        <img
          src="/assets/Background1.png"
          alt="background"
          className="w-full"
        />

        {/* 리포트 예시 스크롤 */}
        <div className="flex overflow-x-scroll gap-4 bg-[#191F28] pb-28">
          <img
            src="/assets/Example1.png"
            alt="example1"
            className="w-[80%] ml-4"
          />
          <img src="/assets/Example2.png" alt="example1" className="w-[80%]" />
          <img src="/assets/Example3.png" alt="example1" className="w-[80%]" />
          <div className="w-4" />
        </div>
      </div>

      <div className="relative w-full max-w-[440px] mx-auto">
        <img
          src="/assets/Background2.png"
          alt="background"
          className="w-full"
        />
      </div>

      {/* CTA 버튼 */}
      <div className="bg-[#333D4B] p-6 rounded-t-3xl shadow-[0px_0px_15.9px_0px_rgba(25,31,40,0.4)] absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[440px]">
        <div className="flex justify-center items-center gap-1.5 text-white text-xs">
          <span className="text-white">기간 한정 감사 이벤트 (~4/15)</span>
          <span className="text-[#6B7684] line-through text-lg ml-2">
            30,000
          </span>
          <span className="text-[#77FFED] font-bold text-2xl">18,000</span>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center rounded-4xl bg-[linear-gradient(98deg,_#77FFED_-1.33%,_#0B4AC0_198.56%)] w-full py-3 font-bold text-base my-3"
        >
          리포트 받기
        </a>
      </div>
    </div>
  );
}
