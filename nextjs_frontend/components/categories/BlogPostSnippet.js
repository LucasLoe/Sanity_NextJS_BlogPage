import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { toPlainText } from "../../functions/ToPlainText";

export default function AuthorBio({ catData }) {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="bg-blue-50 max-w-5xl mx-auto my-8 flex flex-col justify-center shadow rounded-lg md:flex-row lg:h-48 md:justify-between  ">
      <img
        className="mx-auto w-3/4 max-h-[250px] md:h-36 md:w-36 md:mx-6 md:my-auto rounded-md"
        alt={catData.mainImage.alt || " "}
        loading="lazy"
        src={urlFor(catData.mainImage.asset._ref)
          .width(350)
          .height(350)
          .fit("max")
          .auto("format")}
      />

      <div className="grow h-auto my-6 flex-col justify-between md:mr-8">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <h3 className="text-left my-0">{catData.title}</h3>
          <p className="text-blue-600 font-semibold hover:underline cursor-pointer hover:text-blue-500">
            {catData.authorName}
          </p>
        </div>
        <p className="text-center my-2 h-3/5 overflow-hidden md:text-left">
          {toPlainText(catData.body, 40)}
        </p>
        <div className="flex flex-col mt-8 justify-between w-full mx-auto md:flex-row md:mt-0">
          <p className="text-gray-400 text-right mr-2 md:mr-0">
            {catData.date.substr(0, 10)}
          </p>

          <div className="flex flex-wrap justify-end mt-4 md:mt-0">
            <p className="text-gray-400 font-semibold md:mx-2"></p>
            {catData.categories.map((c) => (
              <p className="text-gray-400  mx-2 font-semibold hover:text-blue-600 cursor-pointer">
                {`[${c}]`}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
