document
  .getElementById("generate-comment")
  .addEventListener("click", async () => {
    const postContent = document.getElementById("post-content").value;
    const commentType = document.getElementById("comment-type").value;

    const response = await fetch(
      "https://linkedin-comment-extension-backend.vercel.app/generate-comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postContent, commentType }),
      }
    );

    const data = await response.json();
    document.getElementById("comment").value = data.comment;
  });

document.getElementById("copy-comment").addEventListener("click", () => {
  const comment = document.getElementById("comment");
  comment.select();
  document.execCommand("copy");
});
