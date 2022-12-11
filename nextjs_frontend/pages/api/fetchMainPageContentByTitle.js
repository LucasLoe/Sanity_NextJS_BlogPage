export default function fetchMainPageContent(slug) {
  return `*[_type == "pageContent" && ${slug} in pageCategory[]->slug.current][0]{
        title,
        "pageCategory": pageCategory[] -> title,
        headerImage,
        body,
        "imageGallery": imageGallery[]->images
      }`;
}
