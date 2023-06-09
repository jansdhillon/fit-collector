import Head from 'next/head';
import Image from 'next/image';
// import Navbar from '~/components/Navbar';
import Link from 'next/link';

const name = 'Jan'
export const siteTitle = 'Fit Collector'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div data-theme="retro">
      <Head>
        <link rel="icon" href="/shirt.svg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <Navbar /> */}
      <header>
        {home ? (
          <div > 
            <Image
              priority
              src="/pfp.png"
              className=" rounded-full"
              height={50}
              width={50}
              alt={name}
            />
            <h1>{name}</h1>
            </div>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/pfp.png"
                className="rounded-full"
                height={50}
                width={50}
                alt={name}
              />
            </Link>
            <h2>
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}