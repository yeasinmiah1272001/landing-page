import React from "react";
import ArticalPart from "../HomePage/ArticlePart/ArticalPart";
import CommonBanner from "../../components/common/CommonBanner";
import blogbanner from "../../assets/blogImage.png";
const Blog = () => {
  return (
    <div>
      <CommonBanner
        title={"Blog & FAQ'S"}
        bannerImage={blogbanner}
        bread1={"Home"}
        bread2={"Blogs"}
      />
      <ArticalPart />
    </div>
  );
};

export default Blog;
