import { FiMinus, FiPlus } from 'react-icons/fi';
import SectionTitle from '../../components/SectionTitle';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Who should use the app?',
    answer:
      "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
  },
  {
    id: 2,
    question: 'What is included with my subscription?',
    answer:
      'Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan.'
  },
  {
    id: 3,
    question: 'How do I get paid?',
    answer:
      'Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard.'
  },
  {
    id: 4,
    question: 'Is my personal information safe?',
    answer:
      'Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times.'
  },
  {
    id: 5,
    question: 'How can we get in touch?',
    answer:
      'You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have.'
  }
];

function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(faqs[0]?.id || null);

  const handleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-colorBG">
      <div className="section-container py-20">
        <SectionTitle
          subtitle="Frequently Asked questions"
          title="Bibendum amet at molestie mattis."
        />
        {faqs && faqs.length > 0 && (
          <div className="w-full max-w-4xl mx-auto mt-20">
            {faqs?.map((faq) => (
              <div key={faq.id} className="border border-gray-300 mb-4">
                {faq?.question && (
                  <div
                    onClick={() => handleFAQ(faq?.id)}
                    className="cursor-pointer flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq?.question}
                    </h3>
                    <span
                      className={`text-primaryText transform transition duration-200 text-lg font-bold ${
                        openFAQ === faq?.id ? 'rotate-180' : ''
                      }`}
                    >
                      {openFAQ === faq?.id ? <FiMinus /> : <FiPlus />}
                    </span>
                  </div>
                )}
                {faq?.answer && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFAQ === faq.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 p-4">{faq?.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQs;
