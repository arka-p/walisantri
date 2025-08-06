import { Link } from "react-router-dom";

export const Button = ({ text, url, onClick }) => {
  if (url) {
    return (
      <Link
        to={url}      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  );
};
