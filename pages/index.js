import Banner from "../component/Home/Banner";
import Empowring from "../component/Home/Empowring";
import GetStarted from "../component/Home/GetStarted";
import JoinCommunity from "../component/Home/JoinCommunity";
import MainValueFeature from "../component/Home/MainValueFeature";
import RealImpact from "../component/Home/RealImpact";
import ValuebleFeatureUnique from "../component/Home/ValuebleFeatureUnique";

export default function Home() {
  return (
      <>
        <Banner />
        <RealImpact />
        <MainValueFeature />
        <ValuebleFeatureUnique />
        <Empowring />
        <JoinCommunity />
        <GetStarted />
      </>
  )
}
