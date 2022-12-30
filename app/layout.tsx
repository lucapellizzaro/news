import "./globals.css";
import { Newsreader } from "@next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={newsreader.variable}>
      <head />
      <body className="font-serif bg-gray-50 dark:bg-black text-gray-800 dark:text-white antialiased">
        <header className="px-5 max-w-screen-2xl m-auto pb-7 mt-7 text-center">
          <h1 className="text-3xl lg:text-5xl font-medium">
            Jimmy News - Italia
          </h1>
          <h4 className="lg:text-lg text-sm mt-1 md:mt-2 font-sans dark:text-gray-400 text-gray-700">
            Poche notizie, ma importanti. Niente pubblicità.
          </h4>
        </header>
        {children}
        <footer className="text-sm text-gray-500 font-sans py-2 px-5 max-w-screen-2xl m-auto flex sm:flex-row flex-col gap-1 items-center justify-between">
          <p>
            &copy;{new Date().getFullYear()} Dati: News API - Fonte: Google News
            Italy
          </p>
          <p>
            Creato con <span className="text-red-600">&hearts;</span> da{" "}
            <a
              title="Creato con amore da Bearoba"
              href="https://bearoba.it"
              className="underline hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              bearoba
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
