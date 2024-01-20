import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "../css/style.css";
import "../css/global.css";
import Header from "../components/home/Header";
import QuickStart from "../components/home/QuickStart";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="slate-100 w-screen min-h-screen">
        <div className="max-w-5xl mx-auto w-full space-y-8 py-8">
          <Header />
          <QuickStart />
        </div>
      </div>
    </Layout>
  );
}
