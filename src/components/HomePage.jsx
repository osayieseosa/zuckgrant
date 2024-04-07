import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAnimation } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import humanitarian from "../images/humanitarian.webp";
import Testimonial from "./Testimonial";
import heroImage from "../images/hero-image.webp";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        className="w-full h-screen mx-auto px-5 my-5"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <div className="h-screen relative">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-screen bg-black/40 flex flex-col justify-center px-6 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
              Empowering Survivours: Your Path to Recovery and Support
            </h1>

            <p className="mt-10 max-w-xl">
              The Zucker Relief Global COVID-19 and Disaster Initiative is a
              groundbreaking humanitarian effort concieved by tech Mogul Mark
              Zuckerberg. With a heartfelt mission to alleviate the plight of
              individuals worldwide affected by COVID-19 and other calamities
            </p>

            <a href="https://wa.link/g900ee">
              <button className="btn btn-primary w-max mt-4">Contact us</button>
            </a>
          </div>
          <img
            className="w-full h-screen object-cover"
            src={heroImage}
            alt="/"
          />
        </div>
      </div>
      <div
        className="hero min-h-screen bg-base-200"
        data-aos="slide-left"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={humanitarian}
            className="w-full max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <span className="text-xs font-bold text-accent">REACH OUT</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Government recognized
            </h1>
            <p className="py-6 max-w-md">
              We are proud to announce that our empowerment program has been
              recognized by the government as a humanitarian organization.
            </p>
            <a href="https://wa.link/6gedn7">
              <button className="btn btn-primary">Donate</button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        data-aos="slide-right"
        data-aos-once="true"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <p className="font-bold text-4xl border-2 border-black px-5 py-10 rounded-lg shadow-2xl">
            OVER
            <br />
            <span className="text-secondary">
              <CountUp end={10293456}>
                {({ countUpRef, start }) => (
                  <ReactVisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </span>
            <br />
            SURVIVOURS REACHED
          </p>
          <div>
            <h1 className="text-5xl font-bold">Our Outreach</h1>
            <p className="py-6 max-w-md">
              Since our inception, we've tirelessly worked to extend our reach
              and support to over 10 million individuals world wide. Through our
              dedicated efforts, we've reached corners of the globe, providing
              crucial assistance and resources to those affected by COVID 19
              pandemic. Our commitment to serving communities knows no bounds,
              and we continue to strive for a brighter, healthier future for
              all.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center p-5"
        data-aos-once="true"
        data-aos="flip-left"
      >
        <h2 className="font-bold text-3xl">Our Benefactors</h2>
        <Testimonial />
      </div>
      <div
        className="p-5"
        data-aos="fade-zoom-in"
        data-aos-once="true"
        data-aos-duration="2000"
      >
        <h1 className="w-full text-center text-3xl font-bold mb-10">FAQ</h1>
        <div className="collapse collapse-arrow bg-base-200 mb-6">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do i make donations
          </div>
          <div className="collapse-content">
            <p>
              All required information is available on our contact page you can
              reach out to us and an agent will walk you through the process
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-6">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is this funded by Mark Zuckerberg?
          </div>
          <div className="collapse-content">
            <p>
              Mark Zuckerberg has made a huge impact in the world today and this
              is an object in his collection of programs to make a positive
              impact in the world.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is this just for citizens of the US
          </div>
          <div className="collapse-content">
            <p>
              Absolutely our goal and mission is to reach out to all individuals
              affected by the COVID 19 pandemic and we are an aid to disaster
              relief, Since our inception we have made it a priority of ours and
              we have successfully reached over 5 million people over the globe.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Who is incharge of this program
          </div>
          <div className="collapse-content">
            <p>
              As any other humanitarian organization the amount there is no
              exact person running it but a body of individuals tasked by a the
              tech mogul Mark Zuckerberg to tend to covid 19 survivors.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I get involved with a humanitarian organization?
          </div>
          <div className="collapse-content">
            <p>
              There are various ways to get involved with humanitarian
              organizations, including volunteering your time and skills,
              donating money or goods, fundraising, raising awareness about
              humanitarian issues, advocating for policy changes, and
              participating in humanitarian missions or projects
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is a humanitarian organization
          </div>
          <div className="collapse-content">
            <p>
              A humanitarian organization is a non-profit entity dedicated to
              addressing human suffering and promoting human welfare. These
              organizations often provide aid and assistance to populations
              affected by crises such as natural disasters, armed conflicts,
              poverty, and other emergencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
