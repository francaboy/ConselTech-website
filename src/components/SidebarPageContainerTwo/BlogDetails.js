import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentBox from "./CommentBox";

const { image, date, admin, title, text1, text2 } = blogDetails;

const BlogDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };

  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          <div className="image-box">
            <Link href="/blog-single">
              <a>
                <Image src={image.src} alt="" />
              </a>
            </Link>
          </div>
          <div className="lower-box">
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span> {date}
                </li>
                <li>
                  <span className="far fa-user-circle"></span> {admin}
                </li>
              </ul>
            </div>
            <h4>{title}</h4>
            <div className="text">
              <p>{text1}</p>
              <p>{text2}</p>
            </div>
          </div>
        </div>
        <div className="info-row clearfix"></div>
      </div>
    </div>
  );
};

export default BlogDetails;
