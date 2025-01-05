import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="mr-3 rounded-full w-10 h-10"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-gray-500 text-sm">{news.author.published_date}</p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-2 font-semibold text-xl">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="mb-4 rounded-lg w-full object-cover"
      />

      {/* Details */}
      <p className="mb-4 text-gray-700 text-sm">
        {news.details.slice(0, 150)}...{" "}
        <Link to={`/news/${news._id}`} className="text-primary">Read More</Link>
      </p>

      {/* Ratings and Views */}
      <div className="flex justify-between items-center text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

// Sample news

//
