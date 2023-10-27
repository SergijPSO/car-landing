import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Layout pageTitle='Next.js landing page'>
      <div className='app__wrapper'>
        <Header />
        <Main />
      </div>
    </Layout>
  );
}
