import Head from "next/head";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";
import PropertiesGridView from "./properties";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home." />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <MainHeader />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer/>
        {/* <PropertiesGridView/> */}
      </div>
    </>
  );
};

export default LandingPage;
