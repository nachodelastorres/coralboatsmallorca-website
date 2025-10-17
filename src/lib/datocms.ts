// const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// export async function fetchAPI(query: string, variables = {}) {
//   const res = await fetch('https://graphql.datocms.com/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${API_TOKEN}`,
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   });

//   const json = await res.json();

//   if (json.errors) {
//     console.error(json.errors);
//     throw new Error('Error fetching data from DatoCMS');
//   }

//   return json.data;
// }

// export async function getAllBlogPosts() {
//   const data = await fetchAPI(`
//     {
//       allBlogposts(orderBy: publishedDate_DESC) {
//         id
//         title
//         slug
//         excerpt
//         publishedDate
//         featuredImage {
//           url
//         }
//       }
//     }
//   `);

//   return data.allBlogposts;
// }
