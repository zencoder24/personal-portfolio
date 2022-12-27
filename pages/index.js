import Shape from "../components/Shape";
import Blob from "../components/Blob";

export default function Home() {
  return (
    <>
      <div className=" flex flex-row w-full">
        <h1 className=" bg-[#fffbf3] w-1/2 h-screen">Hello</h1>
        <Blob className="outline-none h-screen w-0" />
      </div>
    </>
  );
}
