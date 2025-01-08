import { Link } from 'react-router';
import SectionTitle from '../../components/SectionTitle';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa6';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: '/images/members/person1.png',
      name: 'John Doe',
      role: 'CEO',
      linkedIn: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      instagram: 'https://instagram.com/johndoe',
      facebook: 'https://facebook.com/johndoe'
    },
    {
      id: 2,
      image: '/images/members/person2.png',
      name: 'Jane Smith',
      role: 'CTO',
      linkedIn: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      instagram: 'https://instagram.com/janesmith',
      facebook: 'https://facebook.com/janesmith'
    },
    {
      id: 3,
      image: '/images/members/person3.png',
      name: 'Mark Johnson',
      role: 'Designer',
      linkedIn: 'https://linkedin.com/in/markjohnson',
      twitter: 'https://twitter.com/markjohnson',
      instagram: 'https://instagram.com/markjohnson',
      facebook: 'https://facebook.com/markjohnson'
    },
    {
      id: 4,
      image: '/images/members/person4.png',
      name: 'Emily Carter',
      role: 'Developer',
      linkedIn: 'https://linkedin.com/in/emilycarter',
      twitter: 'https://twitter.com/emilycarter',
      instagram: 'https://instagram.com/emilycarter',
      facebook: 'https://facebook.com/emilycarter'
    }
  ];
  return (
    <section className="bg-colorBG">
      <div className="section-container py-20">
        <SectionTitle
          subtitle="Our Team"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Bibendum amet at molestie mattis."
        />
        {teamMembers && teamMembers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
            {teamMembers?.map((member) => (
              <div
                key={member?.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {member?.image && (
                  <img
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="p-5">
                  {member?.name && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {member?.name}
                    </h3>
                  )}
                  {member?.role && (
                    <p className="text-sm text-gray-500 mb-4">{member?.role}</p>
                  )}
                  {(member?.linkedIn ||
                    member?.twitter ||
                    member?.instagram ||
                    member?.facebook) && (
                    <div className="flex space-x-4 mb-5 items-center">
                      {member?.linkedIn && (
                        <Link to={member?.linkedIn}>
                          <FaLinkedinIn className="text-blue-600 hover:text-blue-800" />
                        </Link>
                      )}
                      {member?.twitter && (
                        <Link to={member?.twitter}>
                          <FaTwitter className="text-blue-600 hover:text-blue-800" />
                        </Link>
                      )}
                      {member?.instagram && (
                        <Link to={member?.instagram}>
                          <FaInstagram className="text-blue-600 hover:text-blue-800" />
                        </Link>
                      )}
                      {member?.facebook && (
                        <Link to={member?.facebook}>
                          <FaFacebookF className="text-blue-600 hover:text-blue-800" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
