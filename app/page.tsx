import Link from "next/link";
import { compareAsc, format } from "date-fns";

async function getData() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=google-news-it&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Homepage() {
  const data = await getData();
  const articles = data.articles;
  return (
    <main className="py-10 px-5 max-w-screen-2xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
      {articles.map((article: any, index: any) => (
        <article
          key={index}
          className="prose prose-gray dark:prose-invert prose-sky"
        >
          <figure className="aspect-w-16 aspect-h-9 mb-2">
            <img
              loading="lazy"
              className="w-full h-full object-center rounded object-cover"
              src={article.urlToImage}
              alt={"photo" + article.title}
            />
          </figure>
          <div className="my-0 flex font-sans text-xs font-medium items-center justify-between">
            {article.author ? (
              <p className="my-1">{article.author}</p>
            ) : (
              <p className="my-1">Redazione</p>
            )}
            <p className="my-1">
              {format(new Date(article.publishedAt), "dd-MM-yyyy")}
            </p>
          </div>
          <h3 className="mt-2">{article.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
          <a
            className="mt-2 py-1 inline-flex"
            target="_blank"
            rel="noreferrer noopener"
            href={article.url}
          >
            Leggi tutto
          </a>
        </article>
      ))}
    </main>
  );
}
