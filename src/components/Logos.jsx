function Logos(props) {
  const { logos } = props;
  return (
    <div className="flex gap-4 logo-wrapper">
      {logos &&
        logos.length > 0 &&
        logos?.map((logo) => (
          <div key={logo.id} className="flex-1">
            <div className="min-w-[200px] justify-center flex">
              <img className="max-h-8" src={logo?.image} alt={logo?.title} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Logos;
