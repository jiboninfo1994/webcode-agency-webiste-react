import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
function CTASection() {
  return (
    <section>
      <div className="section-container py-20">
        <SectionTitle
          title="Bibendum amet at molestie mattis."
          description="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
        />
        <div className="flex gap-4 justify-center mt-10 flex-col sm:flex-row">
          <Button text="Primary Action" />
          <Button text="Secondary Action" outline={true} />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
