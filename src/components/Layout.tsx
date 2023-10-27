import React, { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content='Landing Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
