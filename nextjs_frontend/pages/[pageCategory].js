import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Header from "../components/global/Header";
import { useRouter } from "next/router";
import { StringToKebabStyle } from "../functions/StringToKebabStyle";
import { PortableText } from "@portabletext/react";
import Carousel from "../components/global/ImageSlider-v2/Carousel";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = ({ pageCategory }) => {

  let imgSliderArr = []

  if (pageCategory.imageGallery) {
    pageCategory.imageGallery[0].map((i) => imgSliderArr.push(urlFor(i.asset._ref)))
  }

  console.log(imgSliderArr)

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

  return (
    <>
      <Header />

      <section className="flex justify-center z-0 top-64 h-auto m-auto bg-fixed bg-cover bg-parallax text-center">
        <article>
          {pageCategory.headerImage &&
            <img
              className="w-full h-64 rounded-lg object-cover my-8"
              srcSet={urlFor(pageCategory.headerImage.asset._ref)}
            />}
          {pageCategory.body && <PortableText value={pageCategory.body} components={ptComponents} />}
          {imgSliderArr && <div className="mx-auto w-full md:w-3/4 flex justify-center my-8 h-[500px] rounded"><Carousel images={imgSliderArr} /></div>}

        </article>
      </section>
    </>
  );
};

const query = groq`*[_type == "pageContent" && $slug in pageCategory[]->slug.current][0]{
  title,
  "pageCategory": pageCategory[] -> title,
  headerImage,
  body,
  "imageGallery": imageGallery[]->images
}`

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
  const slug = context.params.pageCategory;
  const pageCategory = await client.fetch(query, { slug });

  return {
    props: {
      pageCategory,
    },
  };
}
export default Post;
