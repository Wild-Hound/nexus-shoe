import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FeatureSlider from "../Components/FeatureSlider";
import HeaderNav from "../Components/HeaderNav";
import ProductsSlideShow from "../Components/ProductsSlideShow";
import QuickLinks from "../Components/QuickLinks";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const filters = ["Sneakers", "Casuals", "Sandals", "Formals"];
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexus Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />
      <QuickLinks />
      <FeatureSlider />
      <ProductsSlideShow tags={filters} />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
