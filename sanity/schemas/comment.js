export default {
  name: "comment",
  title: "comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImage",
      title: "profile Image",
      type: "image",
    },
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference the Tweet, the comment is associated to",
      type: "reference",
      to: {
        type: "tweet",
      },
    },
  ],
};
