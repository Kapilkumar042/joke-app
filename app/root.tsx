import { 
  Links,
  LiveReload,
   Outlet,
   useRouteError
   } from "@remix-run/react";
   import { Children, PropsWithChildren } from "react";
import type { LinksFunction } from "@remix-run/node";
import globalLargeStylesUrl from "~/styles/global-large.css"
import globalMediumStylesUrl from "~/styles/global-medium.css"
import globalStylesUrl from "~/styles/global.css"
import styles from 'antd/dist/reset.css';

export const links : LinksFunction=()=>[
  {rel:"stylesheet",href: globalStylesUrl},
  {
    rel:"stylesheet",
    href:globalMediumStylesUrl,
    mwdia:"print, (min-width:640px)",
  },
  {rel:"stylesheet",href: styles},
  {
    rel:"stylesheet",
    href: globalLargeStylesUrl,
    media:"screen and (min-width:1024px)",
  },
];

function Document({
  children,
  title = "Remix: So great, it's funny!",
}: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}


export default function App(){
  return(
    <Document>
      <Outlet/>
    </Document>
  )
}

export function ErrorBoundary(){
  const error = useRouteError();

  const errorMessage=
  error instanceof Error?error.message
  :"unknown error";
  return(
    <Document title="Uh-oh">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{errorMessage}</pre>
      </div>
    </Document>
  )
}