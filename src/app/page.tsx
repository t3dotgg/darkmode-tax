import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header role="banner" className="page-header px-4 py-8 text-center">
        <h1 className="py-4 text-3xl font-bold">Dark Mode Wall Of Shame</h1>
        <h2 className="text-xl opacity-70">
          A list of vendors that treat dark mode as a luxury feature, not a core
          security requirement.
        </h2>
      </header>
      <main className="flex flex-col items-center justify-center pt-8 text-xl text-white">
        <span>
          It&apos;s literally just{" "}
          <a
            href="https://uploadthing.com"
            className="text-blue-300 hover:text-blue-400 hover:underline"
          >
            UploadThing
          </a>
        </span>
      </main>
    </>
  );
}
