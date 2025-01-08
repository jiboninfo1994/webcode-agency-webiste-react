import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import { FiActivity, FiCompass, FiTruck, FiCalendar } from 'react-icons/fi';

function ServiceSection() {
  const services = [
    {
      icon: FiCalendar,
      title: 'Customizable Settings',
      description:
        'Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. '
    },
    {
      icon: FiCompass,
      title: 'Developer-Friendly',
      description:
        'Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. '
    },
    {
      icon: FiActivity,
      title: 'Responsive Design',
      description:
        'Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.'
    },
    {
      icon: FiTruck,
      title: 'Cloud Integration',
      description:
        'Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. '
    }
  ];

  return (
    <section>
      <div className="section-container py-20">
        <SectionTitle
          subtitle="Services"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Bibendum amet at molestie mattis."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto my-16">
          {services &&
            services.length > 0 &&
            services?.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer"
              >
                {service?.icon && (
                  <service.icon className="text-blue-600 text-4xl mb-4" />
                )}
                {service?.title && (
                  <h3 className="text-primaryText text-xl font-medium">
                    {service?.title}
                  </h3>
                )}
                {service?.description && (
                  <p className="text-gray-600 mt-2 md:px-10">
                    {service?.description}
                  </p>
                )}
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <Button text="Primary Action" />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
