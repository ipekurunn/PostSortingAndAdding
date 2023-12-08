const posts = [
  { title: "Post Name-one", body: "Post Content-one" },
  { title: "Post Name-two", body: "Post Content-two" },
  { title: "Post Name-three", body: "Post Content-three" },
  { title: "Post Name-four", body: "Post Content-four" }
];

const listPost = () => {
  posts.map(p => {
    console.log(p.title);
  });
};

const addPost = (newPost, callback) => {
  post.push(newPost);
  callback();
};

addPost({ title: "Post Name-five", body: "Post Content-five"}, listPosts);
