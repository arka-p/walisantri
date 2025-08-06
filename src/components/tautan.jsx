import { Link } from "react-router-dom";

export function Tautan({ Text, Url }) {
  const isExternal = Url.startsWith("http");
  return (
    <div className="flex items-center">
      {isExternal ? (
        <a href={Url} className="text-white hover:underline text-sm" target="_blank" rel="noopener noreferrer">
          {Text}
        </a>
      ) : (
        <Link to={Url} className="text-white hover:underline text-sm">
          {Text}
        </Link>
      )}
    </div>
  );
}
