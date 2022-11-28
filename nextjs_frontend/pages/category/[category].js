// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import Header from "../../components/global/Header";
import BlogPostSnippet from "../../components/categories/BlogPostSnippet";
import { useRouter } from "next/router";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function catMap(category) {
  let catString = "";
  if (category === "category-1") {
    catString = "Kategorie 1";
  }

  if (category === "category-2") {
    catString = "Kategorie 2";
  }

  return catString;
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

const Post = ({ category }) => {
  const router = useRouter(); //is here, because I dont know how else to access the slug in that specific code block; probably (definitely) more elegant ways exist

  return (
    <>
      <Header />
      <section className="flex justify-center z-0 top-64 h-auto m-auto bg-fixed bg-cover bg-parallax text-center">
        <article>
          <h1 className="z-50">All posts belonging to category <span className="text-blue-600 font-semibold">{router.query.category}</span></h1>
          <div className="w-full mt-12">
            {category && category.map((c) => <BlogPostSnippet key={c.title} catData={c} />)}
          </div>
        </article>
      </section>
    </>
  );
};

const query = groq`*[$slug in  categories[]->title]{
  "categories": categories[]->title,
  title,
  mainImage,
  "authorName": author->name,
  "date": publishedAt,
  body
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "category"]{title}[].title`);

  return {
    paths: paths.map((slug) => ({ params: { category: catMap(slug) } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const preSlug = context.params.category;
  const slug = catMap(preSlug);
  const category = await client.fetch(query, { slug });
  return {
    props: {
      category,
    },
  };
}
export default Post;
