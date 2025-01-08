import { Link } from 'react-router';

const Button = (props) => {
  const { text, icon: Icon, outline, link } = props;

  return (
    <Link
      to={link ? link : ''}
      className={`${
        outline ? 'text-primary' : 'bg-primary text-white'
      } border border-primary rounded-md  px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white transition`}
    >
      {text && <span>{text}</span>}
      {Icon && <Icon />}
    </Link>
  );
};

export default Button;
