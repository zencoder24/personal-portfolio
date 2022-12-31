const HeroContent = () => {
  return (
    <div className=" bg-[#fffbf3] w-full md:w-1/2 h-screen">
      <main className="flex flex-col justify-center items-center h-full gap-6">
        <div>
          <h2 className=" text-center">Hello, My Name is</h2>
          <h1 className=" text-5xl text-center ">Rodderick Garland</h1>
        </div>
        <div className="flex flex-row gap-4">
          <button>About</button>
          <button>Blog</button>
        </div>
      </main>
    </div>
  );
};

export default HeroContent;
