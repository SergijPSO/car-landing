import "@/styles/globals.scss";
import "@/styles/scss/header.scss";
import "@/styles/scss/navigation.scss";
import "@/styles/scss/about.scss";
import "@/styles/scss/team.scss";
import "@/styles/scss/contacts.scss";
import "@/styles/scss/projects.scss";
import "@/styles/scss/landing-section.scss";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
