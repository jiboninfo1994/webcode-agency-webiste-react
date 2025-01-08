import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';

const pricingPlans = [
  {
    name: 'Freelancer',
    monthlyPrice: 25,
    yearlyPrice: 250, // 25 * 12
    saves: '$25 USD per month, paid annually',
    features: [
      '1 Project',
      'Basic Support',
      'Access to all templates',
      '5GB Storage'
    ]
  },
  {
    name: 'Professional',
    monthlyPrice: 65,
    yearlyPrice: 650, // 65 * 12
    saves: '$55 USD per month, paid annually',
    features: [
      '5 Projects',
      'Priority Support',
      'Access to all templates',
      '25GB Storage',
      'Advanced Analytics'
    ]
  },
  {
    name: 'Agency',
    monthlyPrice: 95,
    yearlyPrice: 950, // 95 * 12
    saves: '$95 USD per month, paid annually',
    features: [
      'Unlimited Projects',
      '24/7 Support',
      'Access to all templates',
      'Unlimited Storage',
      'Custom Branding',
      'Team Collaboration'
    ]
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  console.log(isYearly);

  return (
    <section>
      <div className="section-container py-20">
        <SectionTitle
          subtitle="Pricing"
          title="Bibendum amet at molestie mattis."
          description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
        />
        <div className="mt-20">
          <div className="flex justify-center">
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text text-lg text-primaryText relative">
                  Yearly
                  {!isYearly && (
                    <span className="badge absolute text-xs left-0 bottom-full bg-colorBG text-primaryText border-colorBG w-max">
                      20% OFF
                    </span>
                  )}
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <span className="label-text text-lg text-primaryText">
                  Monthly
                </span>
              </label>
            </div>
          </div>
          {pricingPlans && pricingPlans.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
              {pricingPlans?.map((pricePlan, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-5 text-center">
                    {pricePlan?.name && (
                      <h3 className="text-2xl font-semibold text-gray-800 my-3">
                        {pricePlan?.name}
                      </h3>
                    )}
                    {pricePlan?.name && (
                      <p className="text-gray-500 mb-5">
                        Best for {pricePlan?.name}
                      </p>
                    )}

                    <div className="text-3xl font-bold text-gray-800">
                      $
                      {!isYearly
                        ? pricePlan?.yearlyPrice
                        : pricePlan?.monthlyPrice}
                      <span className="text-sm text-gray-500">
                        /{!isYearly ? 'Year' : 'Month'}
                      </span>
                      {pricePlan?.saves && (
                        <p className="mt-5 text-sm font-normal">
                          {!isYearly && pricePlan?.saves}
                        </p>
                      )}
                    </div>
                    <div className="p-5 text-center">
                      <Button text="Get Started" />
                    </div>
                    {pricePlan?.features && pricePlan?.features.length > 0 && (
                      <div className="p-5 md:px-12 md:py-5">
                        <ul className="text-center text-gray-600">
                          {pricePlan?.features?.map((feature, index) => (
                            <li key={index} className="flex items-center mb-2">
                              <svg
                                className="w-4 h-4 text-blue-600 mr-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 12l5 5L20 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
