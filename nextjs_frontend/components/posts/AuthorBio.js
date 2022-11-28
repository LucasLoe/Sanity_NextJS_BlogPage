import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";


export default function AuthorBio({authorName, authorImage, authorText = "no author description found"}) {

    function urlFor(source) {
        return imageUrlBuilder(client).image(source);
    }

    return (
        <div
        id="author-component"
        className="flex flex-col justify-center my-16 md:flex-row md:justify-between"
        >
        {authorImage && (
            <div className="w-full max-w-md mx-auto md:w-1/4">
            <img
                className="rounded-lg"
                src={urlFor(authorImage).width(600).url()}
                alt={`${authorName}'s picture`}
            />
            </div>
        )}
        <div className="w-full box-border text-left md:w-3/4 md:ml-8">
            <h3>{authorName}</h3>
            <p>{authorText}</p>
        </div>
        </div>
    );
}
