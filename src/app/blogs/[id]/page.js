"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  getBlogDetailsBySlugServ,
  getBlogListServ,
} from "../../services/blog.services";
import { Image_Base_Url } from "../../utils/api_base_url_configration";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function page({ params }) {
  const [showSkelton, setShowSkelton] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(encodeURIComponent(window.location.href));
      setPageTitle(encodeURIComponent(document.title));
    }
  }, []);
  const getBlogListFunc = async (id) => {
    setShowSkelton(true);
    try {
      let response = await getBlogListServ({ category_id: id });
      if (response?.data?.statusCode == "200") {
        setBlogList(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
    setShowSkelton(false);
  };
  const handleShare = (platform) => {
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${pageUrl}&description=${pageTitle}`;
        break;
      case "instagram":
      case "tiktok":
      case "youtube":
        alert(`${platform} direct sharing is only available via app.`);
        return;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  const [details, setDetails] = useState(null);

  const getBlogDetailsFunc = async () => {
    try {
      let response = await getBlogDetailsBySlugServ(params?.id);
      if (response?.data?.statusCode == "200") {
        setDetails(response?.data?.data);
        getBlogListFunc(response?.data?.data?.category_id);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogDetailsFunc();
  }, [params?.id]);
  return (
    <div>
      <Navbar selectedItem="Blogs" />

      <div className="ourStoryMain bgDark blogBgBottom">
        <div className="container">
          <div className="row mb-5 pb-5">
            <div className="col-12">
              <h2 className="textLight">{details ? details?.title : <Skeleton height={40}/>}</h2>
              {details ?  <p
                className="mt-3 textLight "
                dangerouslySetInnerHTML={{
                  __html: details?.short_description,
                }}
              />: <div>
                {[1, 2, 3, 4,5]?.map((v, i)=>{
                  return(
                   <div className="mb-2"><Skeleton height={20} /></div> 
                  )
                })}</div>}
              
              <div className="sharingDiv mt-4 textLight d-flex align-items-center justify-content-between">
                <p>{details ? moment(details?.created_at).format("MMM DD, YYYY") : <Skeleton height={20} width={100}/>}</p>
                <div className="d-flex align-items-center">
                  <p>Share</p>
                  <img src="/greenYoutubeIcon.png" alt="YouTube"
                    onClick={() => handleShare("youtube")}/>
                  <img src="/greenTiktokIcon.png" alt="TikTok"
                    onClick={() => handleShare("tiktok")}/>
                  <img src="/greenFacebookIcon.png"  alt="Facebook"
                    onClick={() => handleShare("facebook")}/>
                  <img src="/greenInstagramIcon.png" alt="Instagram"
                    onClick={() => handleShare("instagram")}/>
                  <img src="/greenLinkedin.png"  alt="LinkedIn"
                    onClick={() => handleShare("linkedin")}/>
                  <img src="/greenXIcon.png" alt="Twitter"
                    onClick={() => handleShare("twitter")}/>
                </div>
              </div>
              <div className="my-5 py-2">
                {details ? <img
                  src={Image_Base_Url + details?.image}
                  className="img-fluid w-100"
                /> : <Skeleton height={500} width="100%"/>}
                
              </div>
              <div
                className="mt-3 textLight  p-3"
                dangerouslySetInnerHTML={{
                  __html: details?.description,
                }}
              />
              <div className="tagsDiv mt-4 textLight d-flex  justify-content-between">
                <h5>Tags :</h5>
                <div>
                  {details?.tags?.split(",")?.map((v, i) => {
                    return <button>{v}</button>;
                  })}
                </div>
              </div>
              <div className="sharingDivBottom mt-4 textLight d-flex align-items-center">
                <div className="d-flex align-items-center pe-5">
                  <p>Share</p>
                   <img src="/greenYoutubeIcon.png" alt="YouTube"
                    onClick={() => handleShare("youtube")}/>
                  <img src="/greenTiktokIcon.png" alt="TikTok"
                    onClick={() => handleShare("tiktok")}/>
                  <img src="/greenFacebookIcon.png"  alt="Facebook"
                    onClick={() => handleShare("facebook")}/>
                  <img src="/greenInstagramIcon.png" alt="Instagram"
                    onClick={() => handleShare("instagram")}/>
                  <img src="/greenLinkedin.png"  alt="LinkedIn"
                    onClick={() => handleShare("linkedin")}/>
                  <img src="/greenXIcon.png" alt="Twitter"
                    onClick={() => handleShare("twitter")}/>
                </div>
                <div className="d-flex ps-5 align-items-center copyLinkDiv">
                  <p>Copy Link</p>
                  <img src="/copyIcon.png" />
                </div>
              </div>
              <div className="d-flex blogCategoryDiv my-5">
                <p className=" p-0" >Related Content</p>
              </div>
              <div className="row">
                {showSkelton
                  ? [1, 2, 3, 4, 5, 6]?.map((v, i) => {
                      return (
                        <div className="col-12 col-lg-4 mb-4">
                          <Skeleton
                            width="100%"
                            height={300}
                            borderRadius={20}
                          />
                        </div>
                      );
                    })
                  : blogList?.map((v, i) => {
                      return (
                        <div className="col-4 mb-4">
                          <div
                            className="blogCard"
                            onClick={() => router.push("/blogs/" + v?.slug)}
                          >
                            <img
                              className="img-fluid"
                              src={Image_Base_Url + v?.image}
                              alt="Fixed Price, Flexible Routes"
                            />
                            <div className="p-3">
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
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default page;
