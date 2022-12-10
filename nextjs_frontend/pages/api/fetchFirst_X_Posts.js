export default function fetchFirst_X_Posts(numOfPosts) {
  return `*[_type == "post"][0..12]{
    title,
    "name": author->name,
    publishedAt,
     mainImage,
    "categories": categories[]->title,
    body
  }`;
}
