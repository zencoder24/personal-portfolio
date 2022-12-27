import Blob from "../components/Blob";
import HeroContent from "../components/HeroContent";

export default function Home() {
  return (
    <>
      <div className=" flex flex-row w-full">
        <HeroContent />
        <Blob />
      </div>
    </>
  );
}
