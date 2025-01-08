import Logos from '../../components/Logos';
import SectionTitle from '../../components/SectionTitle';

function LogoSection() {
  const logos = [
    {
      id: 1,
      title: 'Shells',
      image: '/images/logos/shells.png'
    },
    {
      id: 2,
      title: 'Smart Finder',
      image: '/images/logos/smart-finder.png'
    },
    {
      id: 3,
      title: 'Zoomer',
      image: '/images/logos/zoomer.png'
    },
    {
      id: 4,
      title: 'Art Venue',
      image: '/images/logos/art-venue.png'
    },
    {
      id: 5,
      title: 'Kontrastrr',
      image: '/images/logos/kontrastrr.png'
    },
    {
      id: 6,
      title: 'Wavesmarathon',
      image: '/images/logos/wavesmarathon.png'
    }
  ];
  return (
    <section className="bg-colorBG">
      <div className="section-container py-20">
        <SectionTitle
          subtitle="You Are in GooD Company"
          title="Bibendum amet at molestie mattis."
          description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
        />
        <div className="flex mt-20 overflow-hidden logo-animation-wrapper gap-4">
          <Logos logos={logos} />
          <Logos logos={logos} />
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
