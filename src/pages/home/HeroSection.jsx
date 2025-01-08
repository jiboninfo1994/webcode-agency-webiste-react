import { FiArrowRight } from 'react-icons/fi';
import bannerImg from '../../assets/banner.png';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Button from '../../components/Button';
function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const modalOpen = () => setShowModal(true);
  const modalClose = () => setShowModal(false);

  return (
    <section className="bg-colorBG">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row items-center gap-4">
        <div className="flex flex-col gap-3 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl text-primaryText font-bold">
            Creative Web Design For Businesses
          </h1>
          <p className="text-lg text-primaryText">
            Unlock your design skills to create beautiful websites and apps with
            a poweful and easy-to-use tool.
          </p>
          <div className="flex gap-3 mt-4 justify-center lg:justify-start">
            <Button text="Get Started" icon={FiArrowRight} />
            <Button text="Contact Us" outline={true} />
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
          <div className="relative gorup">
            <img src={bannerImg} alt="Banner Image" />
            <button
              onClick={modalOpen}
              className="text-white text-5xl hover:text-primary transition absolute inset-0 flex items-center justify-center group-hover:opacity-75"
            >
              <FaRegCirclePlay />
            </button>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 z-10 bg-black w-full p-4">
            <div className="bg-white w-full max-w-xl rounded-md p-5 pt-10 relative overflow-y-auto">
              <button
                onClick={modalClose}
                className="text-black text-2xl absolute top-2 right-3"
              >
                <IoClose />
              </button>
              <iframe
                className="aspect-video w-full rounded-md"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/u31qwQUeGuM?si=7ko1hZuI6KRhOJrk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
