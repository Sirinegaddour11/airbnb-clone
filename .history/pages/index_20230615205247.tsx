import type { NextPage } from "next";
import Head from "next/head";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
const font = Nunito({
  subsets: ["latin"],
});
const Home: NextPage = () => {
  return (
    <div className={font.className}>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ClientOnly>
          <Modal ac title="Hello World" isOpen />
          <Navbar />
        </ClientOnly>
      </div>
      <div className="text-rose-500 text-2xl">Hello world</div>
    </div>
  );
};

export default Home;
