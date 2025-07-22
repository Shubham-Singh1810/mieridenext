"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getBlogListServ,
  getBlogCategoryListServ,
} from "../services/blog.services";
import { Image_Base_Url } from "../utils/api_base_url_configration";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/navigation";
function page() {
   const router = useRouter();
  const [blogList, setBlogList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [showSkelton, setShowSkelton] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [payload, setPayload] = useState({
    category_id: "All",
  });
  const getBlogListFunc = async () => {
    setShowSkelton(true);
    try {
      let response = await getBlogListServ(payload.category_id =="All" ? {} : payload);
      if (response?.data?.statusCode == "200") {
        setBlogList(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
    setShowSkelton(false);
  };
  const getBlogCategoryListFunc = async () => {
    try {
      setLoadingCategories(true);
      let response = await getBlogCategoryListServ();
      if (response?.data?.statusCode == "200") {
        setCategoryList(response?.data?.data);
      }
    } catch (error) {
    } finally {
      setLoadingCategories(false);
    }
  };
  useEffect(() => {
    getBlogListFunc();
    getBlogCategoryListFunc();
  }, []);
  useEffect(() => {
    getBlogListFunc();
  }, [payload?.category_id]);
  return (
    <div>
      <Navbar selectedItem="Blogs" />

      <div className="ourStoryMain bgDark blogBg">
        <div className="container">
          <div className="row mb-md-5 mb-0 pb-md-5">
            <div className="col-md-6 col-12 my-auto order-2 order-md-1">
              <h2 className="textLight mt-3 mt-md-0 d-none d-md-block">Your Journey, Your Way</h2>
              <p className="mt-3 textLight">
                {showSkelton ? (
                  <Skeleton width="100%" height={30} />
                ) : (
                  blogList[0]?.title
                )}
              </p>
              <p className="mt-3 textLight font200">
                {showSkelton ? (
                  <Skeleton width={100} />
                ) : (
                  moment(blogList[0]?.created_at).format("MMM DD, YYYY")
                )}
              </p>
              <div className="d-flex mt-4">
                <div className="d-flex align-items-center justify-content-center  bookRideBtn">
                  <p>Read More</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 order-1 order-md-2 blogHeroImg">
               <h2 className="textLight mt-3 mt-md-0 d-block d-md-none">Your Journey, Your Way</h2>
              {showSkelton ? (
                <Skeleton width="100%" height={300} borderRadius={20} />
              ) : (
                <img
                  className="img-fluid"
                  src={Image_Base_Url+blogList[0]?.image}
                />
              )}
            </div>
          </div>
          <div className="d-flex blogCategoryDiv">
            <p onClick={()=>setPayload({...payload, category_id:"All"})} className={payload?.category_id == "All" &&  " borderBottom"}>All</p>
            {loadingCategories
              ? [1, 2, 3, 4, 5]?.map((v, i) => {
                  return <Skeleton />;
                })
              : categoryList?.map((v, i) => {
                  return <p onClick={()=>setPayload({...payload, category_id:v?.id})} className={payload?.category_id == v?.id &&  " borderBottom"}>{v?.name}</p>;
                })}
          </div>
          <div className="row">
            {showSkelton
              ? [1, 2, 3, 4, 5, 6]?.map((v, i) => {
                  return (
                    <div className="col-md-4 col-6 mb-md-4 mb-3 px-md-3 px-2">
                      <Skeleton width="100%" height={300} borderRadius={20} />
                    </div>
                  );
                })
              : blogList?.map((v, i) => {
                  return (
                    <div className="col-md-4 col-6 mb-md-4 mb-3 px-md-3 px-2">
                      <div className="blogCard h-100" onClick={() => router.push("/blogs/" + v?.slug)}>
                        <img
                          className="img-fluid"
                          src={Image_Base_Url + v?.image}
                          alt="Fixed Price, Flexible Routes"
                        />
                        <div className="p-md-3 p-1 py-2">
                          <p>{v?.title}</p>
                          <h6 className="mt-2">
                            {moment(v?.created_at).format("MMM DD, YYYY")}
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
