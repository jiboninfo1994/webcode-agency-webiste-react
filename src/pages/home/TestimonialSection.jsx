// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SectionTitle from '../../components/SectionTitle';
function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      companyLogo: '/images/logos/shells.png',
      description:
        'Shells provided us with outstanding service and exceptional results, exceeding our expectations every step of the way.',
      authorImage: '/images/authors/author1.png',
      authorTitle: 'John Doe',
      role: 'CEO, Shells'
    },
    {
      id: 2,
      companyLogo: '/images/logos/smart-finder.png',
      description:
        'Smart Finder helped streamline our processes with their innovative tools, making our workflow smoother and faster.',
      authorImage: '/images/authors/author2.png',
      authorTitle: 'Jane Smith',
      role: 'Marketing Manager, Smart Finder'
    },
    {
      id: 3,
      companyLogo: '/images/logos/zoomer.png',
      description:
        'Zoomer transformed our customer engagement strategies, delivering exceptional value and increased conversions.',
      authorImage: '/images/authors/author3.png',
      authorTitle: 'Robert Brown',
      role: 'Head of Sales, Zoomer'
    },
    {
      id: 4,
      companyLogo: '/images/logos/art-venue.png',
      description:
        'Art Venue has been instrumental in amplifying our brand visibility with creative and effective strategies.',
      authorImage: '/images/authors/author4.png',
      authorTitle: 'Lisa White',
      role: 'Creative Director, Art Venue'
    },
    {
      id: 5,
      companyLogo: '/images/logos/kontrastrr.png',
      description:
        'Kontrastrr brought clarity and focus to our marketing campaigns, resulting in remarkable growth.',
      authorImage: '/images/authors/author2.png',
      authorTitle: 'David Jones',
      role: 'Co-Founder, Kontrastrr'
    },
    {
      id: 6,
      companyLogo: '/images/logos/wavesmarathon.png',
      description:
        'Wavesmarathon helped us build a solid foundation for long-term success through insightful strategies and support.',
      authorImage: '/images/authors/author4.png',
      authorTitle: 'Emily Taylor',
      role: 'Operations Manager, Wavesmarathon'
    }
  ];

  return (
    <section className="bg-colorBG">
      <div className="section-container py-20">
        <SectionTitle
          subtitle="Testimonials"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Bibendum amet at molestie mattis."
        />
        <div className="testimonial-slider mt-20">
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
          >
            {testimonials &&
              testimonials.length > 0 &&
              testimonials?.map((testimonial) => (
                <SwiperSlide key={testimonial?.id} className="h-auto">
                  <div className="bg-white rounded-md shadow md:py-8 py-4 px-14 h-full text-center">
                    {testimonial?.companyLogo && (
                      <img
                        src={testimonial?.companyLogo}
                        className="size-28 mx-auto my-2 object-contain"
                      />
                    )}
                    {testimonial?.description && (
                      <p className="text-gray-600 italic mb-4 md:w-3/5 mx-auto">
                        {testimonial?.description}
                      </p>
                    )}

                    <div className="flex flex-col items-center space-y-2">
                      <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold uppercase">
                        {testimonial?.authorImage ? (
                          <img
                            src={testimonial?.authorImage}
                            alt={
                              testimonial?.authorTitle &&
                              testimonial?.authorTitle
                            }
                          />
                        ) : (
                          testimonial?.authorTitle.charAt(0)
                        )}
                      </div>
                      {testimonial?.authorTitle && (
                        <h3 className="text-lg font-bold text-gray-800">
                          {testimonial?.authorTitle}
                        </h3>
                      )}
                      {testimonial?.role && (
                        <p className="text-sm text-gray-500">
                          {testimonial?.role}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
