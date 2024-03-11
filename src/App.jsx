import { useEffect, useState } from "react";
import { Graphics, TabletGraphic } from "./assets/constant";
import "./App.css";
import kidImg from '../public/kidImg.png';
import bannerImg from '../public/newtokenimage.jpg'
import video from '../public/video.mp4'
function App() {
  const [q1, setq1] = useState(false);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);

  const [copy, setcopy] = useState(false);
  const handleTextCopy = (e) => {
    setcopy(true);
    navigator.clipboard.writeText(e.target.value);
    setTimeout(() => {
      setcopy(false);
    }, 1000);
  };

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div>
      <header className="bg-primary py-4 sm:py-5">
        <div className="max-w-6xl mx-auto px-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <a href="/">
            <h1 className="font-bold font-poppins text-white text-[1.875rem] leading-[2.344rem] sm:text-[2.188rem] sm:leading-[2.734rem] md:text-[2.625rem] md:leading-[3.281rem]">
              J<span style={{color:'rgb(232, 27, 35)'}}>old</span> Biden

              </h1>
            </a>
            <nav>
              <ul className="flex items-center space-x-8">
                <li>
                  <a href="/" className="font-roboto text-white uppercase leading-[1.6rem] text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      let about = document.getElementById("about");
                      e.preventDefault();
                      about &&
                        about.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.pushState("about", "about", "/");
                    }}
                    className="font-roboto text-white uppercase leading-[1.6rem] text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      let tokenomics = document.getElementById("tokenomics");
                      e.preventDefault();
                      tokenomics &&
                        tokenomics.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      window.history.pushState("tokenomics", "tokenomics", "/");
                    }}
                    className="font-roboto text-white uppercase leading-[1.6rem] text-base"
                  >
                    Tokenomics
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {/* Hero  */}
        <section style={{paddingTop:'50px'}}>
        
            <div style={{height:'500px'}} className="minHeight">
            <img src='../public/bannerImg.png' alt="" style={{ width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            <div className=" w-full" style={{position:'relative', zIndex:'1',marginTop:'-50px' , padding:'0 20px'}} > 
              <article className="max-w-xl sm:max-w-xl mx-auto">
                 <img src="../public/bannerHd.png" alt="" style={{ width:'100%'}}/>
                 <div className=" textCenter md:space-x-1 pt-2" id="about">
                 
                 <p className="font-roboto text-base leading-6 uppercase text-white tracking-[0.1rem] mb-4 mt-5">
                 MEET PRESIDENT JOLD BIDEN, THE ACCIDENTAL STAR OF THE POLITICAL CIRCUS, WHO SOMEHOW STUMBLED INTO THE PRESIDENCY AT THE TENDER AGE OF 78. NOW, AT 81 AND THREE YEARS INTO HIS TENURE, HIS CRITICS ARE EXCHANGING CONCERNED GLANCES FASTER THAN HE CAN MUMBLE HIS WAY THROUGH A SENTENCE.

                 </p>
                 <p className="font-roboto text-base leading-6 uppercase text-white tracking-[0.1rem]  mb-4">
                 PRESIDENT JOLD BIDEN, AFFECTIONATELY DUBBED “CHEATED-IN-CHIEF,” HAS TURNED THE OVAL OFFICE INTO A REAL-LIFE OBSTACLE COURSE, WITH FREQUENT STUTTERS THAT MAKE IT SEEM LIKE HIS SPEECHES ARE SPONSORED BY THE DEPARTMENT OF TONGUE-TWISTERS.
                 </p>
                 <p className="font-roboto text-base leading-6 uppercase text-white tracking-[0.1rem]  mb-4">
                 HIS PENCHANT FOR SUDDEN FALLS HAS SPARKED A NEW WHITE HOUSE TRADITION: THE PRESIDENTIAL STUMBLE COUNT.

                 </p>
                 <p className="font-roboto text-base leading-6 uppercase text-white tracking-[0.1rem]">
                 CRITICS ARGUE THAT HIS COGNITIVE DECLINE IS TRANSFORMING THE WEST WING INTO A RETIREMENT COMMUNITY, COMPLETE WITH AFTERNOON NAPS AND CONFUSED STAFF TRYING TO DECIPHER EXECUTIVE ORDERS.
                 </p>
               </div>
                <h3 className="text-white text-center text-[1.875rem] leading-[2.344rem] sm:text-[2.188rem] sm:leading-[2.734rem] md:text-[2.625rem] md:leading-[3.281rem] font-poppins font-bold mt-10">
                J<span style={{color:'#E81B23'}}>old</span> Biden

                </h3>
              </article>
              <div className="max-w-xl mx-auto mt-3  sm:px-0">
                <div className="bg-white py-2 rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-center">
                  <div className="group relative transition-all ease-in-out duration-300 inline-block space-x-6 font-poppins rounded-[5px] text-base leading-[1rem] text-black font-bold px-4 py-3 break-all text-center lg:text-left">
                    {/* SOL{" "} */}
                    <button
                      onClick={handleTextCopy}
                      value={"6oTxdPD8qUfbXeugsdgRx6ZXrTVAsbZcUGroRBM6eEBK"}
                      className="break-words"
                    > 
                      {" "}
                      Contract Address:
                      {/* <br />6oTxdPD8qUfbXeugsdgRx6ZXrTVAsbZcUGroRBM6eEBK */}
                      <br />Ticker:BIDEN
                    </button>
                    <span className="text-sm font-sans font-normal px-2 absolute left-0 -top-5 hidden group-hover:inline-block bg-gray-800 border border-black rounded-sm text-white">
                      {copy ? "copied" : "Click to Copy"}
                    </span>
                  </div>
                </div>
                <div className="bg-primary rounded-br-[10px] rounded-bl-[10px]">
                  <p className="text-center text-white py-1 font-poppins text-xl leading-6 uppercase"></p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 space-x-1.5">
                <a
                  href="https://t.me/joldbiden"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all ease-in-out duration-500"
                >
                  <div className="bg-[#DE8B09] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.5 0.690613C5.81055 0.690613 0.390625 6.11053 0.390625 12.8C0.390625 19.4894 5.81055 24.9094 12.5 24.9094C19.1895 24.9094 24.6094 19.4894 24.6094 12.8C24.6094 6.11053 19.1895 0.690613 12.5 0.690613ZM18.4473 8.98651L16.46 18.3517C16.3135 19.0158 15.918 19.1769 15.3662 18.8644L12.3389 16.633L10.8789 18.0392C10.7178 18.2004 10.5811 18.3371 10.2686 18.3371L10.4834 15.256L16.0938 10.1877C16.3379 9.97284 16.04 9.85077 15.7178 10.0656L8.78418 14.4308L5.7959 13.4982C5.14648 13.2932 5.13184 12.8488 5.93262 12.5363L17.6074 8.03436C18.1494 7.83905 18.623 8.1662 18.4473 8.98651Z"
                        fill="#8C5705"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com/JoldBiden"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all ease-in-out duration-500"
                >
                  <div className="bg-[#DE8B09] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.4302 5.70802C22.446 5.93009 22.446 6.15221 22.446 6.37428C22.446 13.1477 17.2906 20.9523 7.86802 20.9523C4.96509 20.9523 2.26841 20.1115 0 18.6522C0.412451 18.6998 0.808984 18.7156 1.2373 18.7156C3.63257 18.7156 5.83755 17.9067 7.59834 16.5266C5.3458 16.479 3.45811 15.0037 2.80771 12.9733C3.125 13.0208 3.44224 13.0526 3.77539 13.0526C4.2354 13.0526 4.69546 12.9891 5.12373 12.8781C2.77603 12.4022 1.01519 10.34 1.01519 7.84952V7.7861C1.69727 8.16681 2.49048 8.40475 3.33115 8.43644C1.95107 7.51637 1.04692 5.94596 1.04692 4.1693C1.04692 3.21754 1.30068 2.34508 1.74487 1.58365C4.26709 4.69279 8.05835 6.72321 12.3096 6.94532C12.2303 6.56461 12.1827 6.16808 12.1827 5.7715C12.1827 2.94786 14.4669 0.647766 17.3064 0.647766C18.7816 0.647766 20.1141 1.26642 21.05 2.26578C22.208 2.04371 23.3184 1.61539 24.302 1.02848C23.9212 2.21823 23.1122 3.21759 22.0494 3.85206C23.0805 3.74108 24.0799 3.45548 24.9999 3.05895C24.302 4.07413 23.4295 4.97828 22.4302 5.70802Z"
                        fill="#8C5705"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          
        </section>
        {/* End Hero  */}
     

        <div className="relative mt-8 scroll-m-4" id="tokenomics">
          <div className="bg-[url(/flagbg.png)] bg-cover bg-center bg-no-repeat h-80 sm:h-96 md:h-[450px]">
            <div className="max-w-6xl mx-auto px-2.5 h-full">
              {/* <video
                className="object-cover absolute left-0 w-full -z-[1] h-full"
                autoPlay
                muted
                playsInline
                loop
                src={video}
              ></video> */}
              <div className="flex justify-center items-center h-full">
                <div>
                  <h3 className="text-white font-poppins text-[1.375rem] leading-[1.625rem] sm:text-[1.625rem] sm:leading-[1.95rem] md:text-[2rem]  md:leading-[2.4rem] font-semibold text-center">
                    <span className="text-primary">TOTAL</span> SUPPLY
                  </h3>
                  <h3 className="font-poppins text-white font-bold text-[2rem] leading-[2.5rem] sm:text-[5rem] sm:leading-[6.25rem]">
                    1,000,000,000
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>



       <div className="  ">   
        <div className="text-center pt-10 pb-4">
          <h3 className="font-bold text-[2rem] leading-[2.5rem] sm:text-[3.125rem] sm:leading-[3.906rem] md:text-[5rem] md:leading-[6.25rem] outline-title font-poppins">
            BUY & JOIN
          </h3>
        </div>
        <div className="flex items-center justify-center bg-center bg-cover flex-column md:mt-[5px] buyImg">
          <img src={kidImg} alt="" style={{borderRadius:'10px', width:'100%'}}/>
        </div>
        <div className=" textCenter md:space-x-1 pt-2 maxWidth mx-auto p-4">
                 
                 <p className="font-roboto text-base leading-6 uppercase text-white tracking-[0.1rem] mb-4 mt-5">
                 WHISPERS OF COGNITIVE DECLINE ECHO THROUGH THE HALLS OF POWER, LEAVING MANY TO WONDER IF THE OVAL OFFICE HAS TURNED INTO A SENIOR CENTER WITH EXECUTIVE PRIVILEGES. LITTLE DO THE PUBLIC KNOW, PRESIDENT JOLD BIDEN IS SECRETLY TAKING ORDERS FROM THE PUPPET MASTER HIMSELF, BARACK OBAMA. THE REAL POWER BEHIND THE PODIUM, OBAMA PULLS THE STRINGS WHILE BIDEN ATTEMPTS TO NAVIGATE THE COMPLEXITIES OF INTERNATIONAL DIPLOMACY LIKE A GPS WITHOUT A SIGNAL. AS THE NATION COLLECTIVELY WONDERS WHY THE PRESIDENT SEEMS TO BE PLAYING A GAME OF POLITICAL MARCO POLO, LITTLE DO THEY SUSPECT THE HIDDEN CHOREOGRAPHER ORCHESTRATING THE PRESIDENTIAL PUPPET SHOW.
                 </p>
       </div>
        <div className="flex items-center justify-center ">
        <a href="https://raydiumswap.io" className="btnGreen" target="_blank">Buy on RaydiumSwap</a>
        </div>
      

        {/* Faq Section  */}
        <div className="pb-[60px] px-4 sm:px-0" style={{}}>
          <div className="flex flex-col gap-5 item-center justify-center">
            <div className="flex item-center justify-center">
              <div className="rounded-md p-2.5 border-primary w-15">
                <img src="/solanaLogo.png" alt="Solana-Logo-200px-150x150" className="w-15" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <h2 className="font-poppins font-semibold text-white text-[1.875rem] leading-[2.344rem] sm:text-[2.188rem] sm:leading-[2.625rem] text-center lg:text-left">
                How to Buy using $SOL
              </h2>
            </div>
            <div className="max-w-[600px] mx-auto">
              <div >
                <div
                  className='flex items-center justify-between bgGreen cursor-pointer p-[15px] font-poppins transition-all ease-in-out duration-300'
                  onClick={() => setq1(!q1)}
                >
                  <div className="flex items-center space-x-2">
                    <h5 className="text-white font-regular text-base leading-[1rem]">1. Download and Install</h5>
                    <a
                      href="https://phantom.app/download/"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all ease-in-out duration-300 inline-block space-x-6 font-poppins rounded-[5px] border-2 border-white text-[0.938rem] leading-[0.938rem] text-white font-semibold px-3 py-2"
                    >
                      Phantom
                    </a>
                  </div>
                  <div
                    className={`${
                      q1 ? "rotate-180 text-primary" : "rotate-0 text-white"
                    } transition-all ease-in-out duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`${
                    q1 ? "h-auto px-4 overflow-auto mb-[5px] mt-[10px] pb-4" : "h-0 px-4 overflow-hidden"
                  } transition-all ease-in-out duration-300`}
                >
                  <p className="text-[#e2e2e2] font-normal text-base font-poppins leading-[1.5rem]">
                    <a href="https://phantom.app/download/" target="_blank" rel="noreferrer" className="text-primary">
                      Phantom
                    </a>{" "}
                    is a crypto wallet app used for storing and managing Solana tokens. After creating a wallet be sure
                    to write down your recovery phrase on a piece of paper and store it somewhere safe.
                  </p>
                </div>
              </div>
              <div className="">
                <div
                  className='flex items-center justify-between  bgGreen cursor-pointer p-[15px] font-poppins transition-all ease-in-out duration-300'
                  onClick={() => setq2(!q2)}
                >
                  <div className="flex items-center space-x-2">
                    <h5 className="text-white font-regular text-base leading-[1rem]">2. Purchase Some Solana</h5>
                  </div>
                  <div
                    className={`${
                      q2 ? "rotate-180 text-primary" : "rotate-0 text-white"
                    } transition-all ease-in-out duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`${
                    q2 ? "h-auto px-4 overflow-auto mb-[5px] mt-[10px] pb-4" : "h-0 px-4 overflow-hidden"
                  } transition-all ease-in-out duration-300`}
                >
                  <p className="text-[#e2e2e2] font-normal text-base font-poppins leading-[1.5rem]">
                    From inside the{" "}
                    <a href="https://phantom.app/download/" target="_blank" rel="noreferrer" className="text-primary">
                      Phantom
                    </a>{" "}
                    app you can purchase Solana using Moonpay or other providers.
                  </p>
                </div>
              </div>
              <div className="">
                <div
                  className=' flex items-center bgGreen justify-between  cursor-pointer p-[15px] font-poppins transition-all ease-in-out duration-300 '
                  onClick={() => setq3(!q3)}
                >
                  <div className="flex items-center space-x-2">
                    <h5 className="text-white font-regular text-base leading-[1rem]">3. Swap Your SOL for Tate</h5>
                  </div>
                  <div
                    className={`${
                      q3 ? "rotate-180 text-primary" : "rotate-0 text-white"
                    } transition-all ease-in-out duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`${
                    q3 ? "h-auto px-4 overflow-auto mb-[5px] mt-[10px] pb-4" : "h-0 px-4 overflow-hidden"
                  } transition-all ease-in-out duration-300`}
                >
                  <p className="text-[#e2e2e2] font-normal text-base font-poppins leading-[1.5rem]">
                    From inside the Click the exchange button inside of the{" "}
                    <a
                      href="https://phantom.app/download/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      Phantom
                    </a>{" "}
                    app, input our contract address
                  </p>
                  <div>
                    <div className="group relative mb-2.5 transition-all ease-in-out duration-300 inline-block font-poppins rounded-[5px] text-base leading-[1rem] text-[#e2e2e2] font-semibold break-all text-center lg:text-left">
                      <button
                        onClick={handleTextCopy}
                        value={"HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1"}
                        className="break-words leading-[1.5rem]"
                      >
                        {" "}
                        HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1
                      </button>
                      , tap on review order then swap!
                      <span className="text-sm font-sans font-normal px-2 absolute left-0 -top-5 hidden group-hover:inline-block bg-gray-800 border border-black rounded-sm text-white">
                        {copy ? "copied" : "Click to Copy"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Faq Section  */}

        </div>
      </main>
      <footer className="bg-primary">
        <div className="max-w-6xl mx-auto px-2.5">
          {/* <div className="sm:py-16 py-12 px-4 sm:px-0">
            <p className="text-white font-roboto text-base leading-[1.6rem]">
            Please be advised that Baby Andrew Tate is a meme token created for entertainment purposes and is not affiliated with or endorsed by Andrew Tate. While Baby Andrew Tate may reference or incorporate elements related Andrew Tate’s persona, image, or likeness, it does not imply any direct endorsement,partnership, or approval by Tate. Any resemblance or association between Baby Andrew Tate and Andrew Tate is purely coincidental and intended for satirical or humorous purposes.
            </p>
          </div> */}
          <div className="sm:flex-row flex-col flex items-center justify-between py-7 space-y-4 sm:space-y-0">
            <a href="/">
              <h1 className="font-bold font-poppins text-white text-[1.875rem] leading-[2.344rem] sm:text-[2.188rem] sm:leading-[2.734rem] md:text-[2.625rem] md:leading-[3.281rem]">
              J<span style={{color:'rgb(232, 27, 35)'}}>old</span> Biden

              </h1>
            </a>
            <div className="flex items-center justify-center space-x-1.5">
              <a
                href="https://t.me/joldbiden"
                target="_blank"
                rel="noreferrer"
                className="transition-all ease-in-out duration-500"
              >
                <div className="bg-[#DE8B09] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 0.690613C5.81055 0.690613 0.390625 6.11053 0.390625 12.8C0.390625 19.4894 5.81055 24.9094 12.5 24.9094C19.1895 24.9094 24.6094 19.4894 24.6094 12.8C24.6094 6.11053 19.1895 0.690613 12.5 0.690613ZM18.4473 8.98651L16.46 18.3517C16.3135 19.0158 15.918 19.1769 15.3662 18.8644L12.3389 16.633L10.8789 18.0392C10.7178 18.2004 10.5811 18.3371 10.2686 18.3371L10.4834 15.256L16.0938 10.1877C16.3379 9.97284 16.04 9.85077 15.7178 10.0656L8.78418 14.4308L5.7959 13.4982C5.14648 13.2932 5.13184 12.8488 5.93262 12.5363L17.6074 8.03436C18.1494 7.83905 18.623 8.1662 18.4473 8.98651Z"
                      fill="#8C5705"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com/JoldBiden"
                target="_blank"
                rel="noreferrer"
                className="transition-all ease-in-out duration-500"
              >
                <div className="bg-[#DE8B09] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.4302 5.70802C22.446 5.93009 22.446 6.15221 22.446 6.37428C22.446 13.1477 17.2906 20.9523 7.86802 20.9523C4.96509 20.9523 2.26841 20.1115 0 18.6522C0.412451 18.6998 0.808984 18.7156 1.2373 18.7156C3.63257 18.7156 5.83755 17.9067 7.59834 16.5266C5.3458 16.479 3.45811 15.0037 2.80771 12.9733C3.125 13.0208 3.44224 13.0526 3.77539 13.0526C4.2354 13.0526 4.69546 12.9891 5.12373 12.8781C2.77603 12.4022 1.01519 10.34 1.01519 7.84952V7.7861C1.69727 8.16681 2.49048 8.40475 3.33115 8.43644C1.95107 7.51637 1.04692 5.94596 1.04692 4.1693C1.04692 3.21754 1.30068 2.34508 1.74487 1.58365C4.26709 4.69279 8.05835 6.72321 12.3096 6.94532C12.2303 6.56461 12.1827 6.16808 12.1827 5.7715C12.1827 2.94786 14.4669 0.647766 17.3064 0.647766C18.7816 0.647766 20.1141 1.26642 21.05 2.26578C22.208 2.04371 23.3184 1.61539 24.302 1.02848C23.9212 2.21823 23.1122 3.21759 22.0494 3.85206C23.0805 3.74108 24.0799 3.45548 24.9999 3.05895C24.302 4.07413 23.4295 4.97828 22.4302 5.70802Z"
                      fill="#8C5705"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
