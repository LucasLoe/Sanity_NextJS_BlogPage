export default {
  name: "pageContent",
  title: "Page Contents",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "pageCategory",
      title: "Page Category",
      type: "array",
      of: [{ type: "reference", to: { type: "pageCategory" }}],
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{type: "reference", to: {type: "gallery"}}],
    },
    {
      title: "Last Changed:",
      name: "changeDate",
      type: "date",
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "changeDate",
    },
  },
};
