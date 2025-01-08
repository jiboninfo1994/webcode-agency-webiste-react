import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import { FiSettings, FiCode, FiSmartphone, FiCloud } from 'react-icons/fi';

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      icon: FiSettings,
      title: 'Customizable Settings',
      description: 'Easily configure tools to fit your project requirements.'
    },
    {
      id: 2,
      icon: FiCode,
      title: 'Developer-Friendly',
      description: 'Optimized for developers with clean and efficient code.'
    },
    {
      id: 3,
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Build tools that look great on any device and screen size.'
    },
    {
      id: 4,
      icon: FiCloud,
      title: 'Cloud Integration',
      description:
        'Seamlessly connect with cloud services for better productivity.'
    }
  ];
  return (
    <section>
      <div className="section-container py-20">
        <SectionTitle
          subtitle="The tools you need"
          title="All-in-One Solution for Your Projects"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16">
          {tools &&
            tools.length > 0 &&
            tools?.map((tool) => (
              <div
                key={tool?.id}
                className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer"
              >
                <tool.icon className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-lg font-bold text-gray-800">
                  {tool?.title}
                </h3>
                <p className="text-gray-600 mt-2">{tool?.description}</p>
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <Button text="Explore More" />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
