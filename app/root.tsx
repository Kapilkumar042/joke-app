import { 
  Links,
  LiveReload,
   Outlet,
   Scripts,
   useRouteError,
   isRouteErrorResponse,Meta
   } from "@remix-run/react";
   import { Children, PropsWithChildren } from "react";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import globalLargeStylesUrl from "~/styles/global-large.css"
import globalMediumStylesUrl from "~/styles/global-medium.css"
// import globalStylesUrl from "~/styles/global.css"
import styles1 from 'antd/dist/reset.css';
// import stylesheet from "~/tailwind.css";

import styles from "./globals.css"
import { cssBundleHref } from "@remix-run/css-bundle";

export const links : LinksFunction=()=>[
  // {rel:"stylesheet",href: globalStylesUrl},
  {
    rel:"stylesheet",
    href:globalMediumStylesUrl,
    mwdia:"print, (min-width:640px)",
  },
  {rel:"stylesheet",href: styles1},
  {
    rel:"stylesheet",
    href: globalLargeStylesUrl,
    media:"screen and (min-width:1024px)",
  },
  // { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];


export const meta: V2_MetaFunction=()=>{
  const description="Learn Remix and laugh at the same time:";
  return [
    {name:"description", content:description},
    {name:"twitter:description", content:description},
    {title:"Remix: So great, it funny:"},
  ];

};

function Document({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta name="twitter:creator" content="@remix_run"/>
        <meta name="twitter:site" content="@remix_run"/>
        <meta name="twitter:title" content="Remix Jokes"/>
        <Meta/>
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body>
        {children}
        <Scripts/>
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
  if(isRouteErrorResponse(error)){
    return(
      <Document title={`${error.status} ${error.statusText}`}>
        <div className="error-container">
          <h1>
            {error.status}{error.statusText}
          </h1>
        </div>
      </Document>
    )
  }

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