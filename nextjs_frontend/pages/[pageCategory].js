// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Header from "../components/global/Header";
import fetchMainPageContentByTitle from "./api/fetchMainPageContentByTitle";
import { useRouter } from "next/router";
import { StringToKebabStyle } from "../functions/StringToKebabStyle";
import pageCategory from "../../sanity_api/schemas/pageCategory";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = ({ pageCategory }) => {
  console.log(`RESPONSE LOGGING: ${pageCategory}`);

  return (
    <>
      <Header />
      <section className="flex justify-center z-0 top-64 h-auto m-auto bg-fixed bg-cover bg-parallax text-center">
        <h1>Hi</h1>
      </section>
    </>
  );
};

const query = groq`${fetchMainPageContentByTitle(pageCategory)}`;

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "pageCategory"]{
    slug
  }[].slug.current`);
  console.log(`PATH LOGGING: ${paths}`);
  return {
    paths: paths.map((pageCategory) => ({
      params: { pageCategory: pageCategory },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const preSlug = context.params.pageCategory;
  const pageCategory = await client.fetch(query, { preSlug });
  return {
    props: {
      pageCategory,
    },
  };
}
export default Post;
