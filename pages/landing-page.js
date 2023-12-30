import Head from "next/head";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home." />
      </Head>
      <div className="relative bg-gray-white w-full h-[5096px] flex flex-col items-center justify-start">
        <MainHeader />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          dimensionLabel="/houseline@2x.png"
          dimensionValue="/social-media-logo@2x.png"
          dimensionCode="/social-media-logo@2x.png"
          dimensionText="/social-media-logo@2x.png"
          dimensionMeasurement="/social-media-logo@2x.png"
          dimensionImage="/social-media-logo@2x.png"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
