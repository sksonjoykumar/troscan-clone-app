export default function NewsDetails({ params }) {
  const { newsId } = params;
  console.log(newsId);
  return (
    <>
      <h1>{newsId}</h1>
      <h1>News Details Page</h1>
    </>
  );
}
