import Blog from "@/components/Blog";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ">All Blogs</h1>
        <button className="ring rounded-sm px-3 hover:bg-green-700 hover:text-white">Add Blog +</button>
      </div>

     <Blog title={'My First Blog'} author={"Olaitan Jr."}/>
     <Blog title={'Second Blog'} author={"Stephen"}/>
     <Blog title={'Third Blog'} author={"Juwon"}/>
    </>
  );
};
export default Home;