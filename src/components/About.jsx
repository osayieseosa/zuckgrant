import React, { useRef } from "react";
import aboutImage from "../images/about-image.png";
import abfirst from "../images/abfirst.png";
import absecond from "../images/absecond.jpg";

const About = () => {
  const nexSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nexSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="max-w-[1640px] h-screen mx-auto p-4">
        <div className="h-screen relative">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-screen bg-black/40 flex flex-col justify-center px-6 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
              Empowering Communities: Our Commitment to COVID-19 Relief and
              Resilience
            </h1>

            <p className="mt-10 max-w-xl">
              Fueled by an unwavering dedication to mitigating the adversities
              confronting individuals globally in the aftermath of the COVID 19
              pandemic and other crises, this initiative stands as a steadfast
              beacon of hope.
            </p>

            <button
              className="btn btn-primary w-max mt-4"
              onClick={scrollToNextSection}
            >
              Learn More{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path>
              </svg>
            </button>
          </div>
          <img
            className="w-full h-screen object-cover"
            src={aboutImage}
            alt="/"
          />
        </div>
      </div>
      <section ref={nexSectionRef} className="px-5 py-10">
        <h2 className="text-xl font-bold mb-10">What Are We?</h2>
        At the heart of the program lies an innovative approach, leveraging
        social media platforms as a conduit for aid distribution. Through
        strategic partnerships and cutting-edge technology, individuals impacted
        by COVID-19 and various disasters are encouraged to share their stories
        and circumstances on designated social media channels, utilizing
        specifiic hashtags to nominate themselves or others for assistance.
        <br />
        <br />
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={abfirst}
            className="w-full max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p className="py-6">
              {" "}
              Upon the collection of nominations, the program employs a unique
              selection process, reminiscent of the widely recognized Powerball
              draw. Social media handles or names of nominees are randomly
              chosen, ensuring transparency and equity in aid distribution. The
              announcement of winners is conducted with great on the official
              Zucker Relief website, where their names and the respective
              amounts won are prominently displayed.
              <br />
              <br />
              The relief extended through the Zucker Relief Global COVID 19 and
              Disaster Initiative Program is tailored to address the diverse
              needs of recipients. Financial assistance, essentiai supplies,
              medical support, and other critical services are provided to
              deserving individuals and comunities, serving as a lifeline admist
              challenging circumsistances.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="hero h-max">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={absecond}
              className="w-full max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <p className="py-6">
                {" "}
                By harnessing the power of technology and social media, Mark
                Zuckerberg's visionary initiative transcends geographical
                boundaries, instilling hope and delivering tangible relief to
                those grappling with adversity worldwide. With each random draw,
                lives are touched, and communities are uplifted, underscoring
                the transformative impact of collective compassion and
                solidarity in times of crisis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full text-center px-5 py-10 bg-base-200 flex flex-col gap-5 place-items-center">
        <h3>The most trusted and performant humanitarian organization</h3>
        Get in touch today
        <button className="btn btn-secondary w-[300px]">
          <a href="https://wa.link/g900ee">Click Me!</a>
        </button>
      </section>
    </div>
  );
};

export default About;
