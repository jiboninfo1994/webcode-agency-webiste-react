function SectionTitle(props) {
  const { subtitle, title, description } = props;
  return (
    <div className="section-title-wrap text-center flex flex-col gap-2 max-w-6xl mx-auto">
      {subtitle && (
        <h4 className="text-lg text-[#001D6C] uppercase font-bold leading-none">
          {subtitle}
        </h4>
      )}
      {title && (
        <h2 className="text-3xl text-primaryText font-bold">{title}</h2>
      )}
      {description && (
        <p className="text-lg text-primaryText mt-4">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
