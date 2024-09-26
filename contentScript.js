function getPostContent() {
  const post = document.querySelector("article .feed-shared-text__text-view");
  return post ? post.innerText : "No post content found";
}
