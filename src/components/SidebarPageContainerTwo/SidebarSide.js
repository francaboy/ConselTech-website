import { sidebar } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { tags } = sidebar;

const SidebarSide = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <aside className="sidebar blog-sidebar">
      <div className="sidebar-widget search-box">
        <div className="widget-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="search"
                name="search"
                placeholder="Search"
                required
              />
              <button type="submit">
                <span className="icon flaticon-magnifying-glass-1"></span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="sidebar-widget popular-tags">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Tags</h4>
          </div>
          <div className="tags-list clearfix">
            {tags.map(({ id, title, href }) => (
              <Fragment key={id}>
                <a href={href}>{title}</a>
                {tags.length !== id && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarSide;
