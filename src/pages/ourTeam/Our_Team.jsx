import React,  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Our_Team.css";
import OurTeamComp from "../../components/ourTeamComp/ourTeamComp";
import Profile1 from "../../assets/profile1.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";

function Our_Team() {
  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);
  const ourTeamData = [
    {
      id: 1,
      profile: Profile1,
      name: "Julian Jarvis",
      position: "Chairman, Founder and CEO",
      firstPara:
        "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
      secondPara: "",
    },
    {
      id: 2,
      profile: Profile2,
      name: "Grahame Jackson",
      position: "",
      firstPara:
        "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation. ",
      secondPara: "He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
    },
    {
      id: 3,
      profile: Profile3,
      name: "Julian Jarvis",
      position: "Chairman, Founder and CEO",
      firstPara:
        "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
      secondPara: "",
    },
  ];

  return (
    <div className="ourTeam">
      <div className="top-Header">
        <h1>Our Team</h1>
        <div className="abt-teamLeads">
        <button ref={swiperNavPrev} className="custom-nav prev-btn">
        <HiArrowNarrowLeft style={{fontSize:"22px"}}/>
          </button>
          <button ref={swiperNavNext} className="custom-nav next-btn">
          <HiArrowNarrowRight style={{fontSize:"22px"}}/>
          </button>
          <Swiper
            modules={[Navigation]} 
            spaceBetween={-200} 
            slidesPerView={1} 
            navigation={{
              prevEl: swiperNavPrev.current,
              nextEl: swiperNavNext.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrev.current;
              swiper.params.navigation.nextEl = swiperNavNext.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 1 },
            }}
          >
            {ourTeamData.map((item) => (
              <SwiperSlide key={item.id}>
                <OurTeamComp
                id={item.id}
                  profile={item.profile}
                  name={item.name}
                  position={item.position}
                  firstPara={item.firstPara}
                  secondPara={item.secondPara}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Our_Team;
