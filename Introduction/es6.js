// const users = [
//   {
//     id: 1,
//     name: "Devika",
//     contact: {
//       email: "devika@example.com",
//       phone: "123-456-7890"
//     }
//   },
//   {
//     id: 2,
//     name: "Devi"
//     // missing contact
//   },
//   {
//     id: 3,
//     name: "Devu",
//     contact: {
//       email: null // intentionally null
//     }
//   }
// ];

// for (const user of users) {
//   const email = user.contact?.email ?? "Not Provided";
//   console.log(`${user.name} - Email: ${email}`);
// }

const posts = [
  {
    id: 1,
    title: "Learning JavaScript",
    comments: [
      { user: "Devika", text: "Great post!" },
      { user: "Devi", text: "Very helpful." }
    ]
  },
  {
    id: 2,
    title: "Understanding Closures",
    comments: null
  },
  {
    id: 3,
    title: "Array Methods in Depth"
    // comments field is missing
  }
];
for (const post of posts) {
  console.log(`Title: ${post.title}`);
  const firstCommenter = post.comments?.[0]?.user ?? "No Comments";
  console.log(`First Comment By: ${firstCommenter}`);
  console.log(); // empty line
}