import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/style.css";
import "../css/global.css";
import Header from "../components/home/Header";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="A versatile ad-blocker designed for the Spotify desktop application on Windows, Linux, and Mac platforms">
      <div className="home-bg h-screen w-screen absolute -z-10" />
      <div className="home slate-100 w-screen min-h-screen relative">
        <div className="max-w-5xl mx-auto w-full space-y-8 py-8">
          <Header />
        </div>
      </div>
    </Layout>
  );
}
