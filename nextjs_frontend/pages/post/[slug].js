// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import Header from "../../components/global/Header";
import AuthorBio from "../../components/posts/AuthorBio";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <>
          <img
            className="mx-auto my-12 w-1/2"
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)
              .width(1600)
              .height(900)
              .fit("max")
              .auto("format")}
          />
        </>
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    authorText,
    body = []
  } = post

  return (
    <>
      <Header />
      <section className="flex justify-center z-0 top-64 h-auto m-auto bg-fixed bg-cover bg-parallax text-center">
        <article>
          <h1 className="z-50">{title}</h1>
          <span className="text-gray-400">
            By{" "}
            <span className="text-blue-600 mx-2 font-semibold hover:underline cursor-pointer hover:text-blue-500">
              {name}
            </span>
          </span>
          {categories && (
            <div className="flex mx-auto justify-center">
              <p className="mx-4 my-4 py-0.5 text-gray-400">Published in:</p>
              {categories.map((category) => (
                <div
                  className="mx-1 my-4 border-2 px-2 py-0.5 rounded-lg text-gray-400 border-gray-400  font-semibold hover:border-blue-600 hover:text-blue-600 cursor-pointer"
                  key={category}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
          <PortableText value={body} components={ptComponents} />
          <AuthorBio
            authorName={name}
            authorImage={authorImage}
            authorText={authorText}
          />
        </article>
      </section>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "authorText": author->bio,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
