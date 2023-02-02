import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home: NextPage = () => {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide ">
            <Head>
                <title>PopSauce</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Modal */}

            {/* Feed */}
            <Feed />
        </div>
    );
};

export default Home;
