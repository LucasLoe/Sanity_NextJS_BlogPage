import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

export default function AuthorBio({ catData }) {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  //console.log(catData);

  function toPlainText(blocks = [], numberOfWords) {
    return (
      blocks
        // loop through each block
        .map((block) => {
          // if it's not a text block with children,
          // return nothing
          if (block._type !== "block" || !block.children) {
            return "";
          }
          // loop through the children spans, and join the
          // text strings
          return block.children.map((child) => child.text).join("");
        })
        // join the paragraphs leaving split by two linebreaks
        .join("\n\n")
        // only return first x number of words
        .split(/\s+/)
        .slice(0, numberOfWords)
        .join(" ")
        .concat("", "...")
    );
  }
//       <div className="bg-blue-300 h-36 w-36 rounded mx-auto md:my-auto md:shrink-0 md:mx-8"></div>
  return (
    <div className="bg-blue-50 max-w-5xl mx-auto my-8 flex flex-col justify-center shadow-sm rounded-lg md:flex-row lg:h-48 md:justify-between  ">

      <img
            className="mx-auto w-3/4 max-h-[250px] md:h-36 md:w-36 md:mx-6 md:my-auto"
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
          <p className="text-gray-400 text-right mr-2 md:mr-0">{catData.date.substr(0, 10)}</p>

          <div className="flex flex-wrap justify-end mt-4 md:mt-0">
            <p className="text-gray-400 font-semibold md:mx-2" ></p>
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
