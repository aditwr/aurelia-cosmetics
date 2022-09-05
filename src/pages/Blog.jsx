import React, { Component } from "react";
import BlogPost from "../partials/BlogPost";
import ContentOutline from "../partials/ContentOutline";
import PageTitle from "../partials/PageTitle";
import SmallPost from "../partials/SmallPost";
import PaginationItem from "../partials/PaginationItem";

class Blog extends Component {
  render() {
    return (
      // container
      <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto pt-16 mb-16">
        <PageTitle text="Blog" />
        {/* main-container */}
        <div className="flex flex-col lg:flex-row">
          {/* blog-post */}
          <div className="lg:basis-8/12  lg:pr-4">
            <div className="lg:flex lg:flex-col gap-x-6 lg:gap-x-0">
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
            <PaginationItem />
          </div>

          {/* side-bar */}
          <div className="mt-16 lg:mt-0 lg:basis-4/12 lg:pl-4">
            <div className="lg:sticky lg:top-24">
              {/* categories */}
              <div className="categories mb-6">
                <h3 className="font-medium mb-1">Categories</h3>
                <ul className="flex flex-col gap-y-1">
                  <li className="opacity-90">Development (9)</li>
                  <li className="opacity-90">Design (22)</li>
                  <li className="opacity-90">Life Style (14)</li>
                  <li className="opacity-90">Beauty (31)</li>
                  <li className="opacity-90">Fashion (29)</li>
                </ul>
              </div>

              {/* archives */}
              <div className="archives mb-6">
                <h3 className="font-medium mb-2">Archives</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <ContentOutline text="Agustus 2022" />
                  <ContentOutline text="September 2022" />
                  <ContentOutline text="Oktober 2022" />
                  <ContentOutline text="November 2022" />
                  <ContentOutline text="Desember 2022" />
                  <ContentOutline text="Januari 2023" />
                </div>
              </div>

              {/* read-next */}
              <div className="mb-16">
                <h3 className="font-medium mb-2">Read Next</h3>
                <div className="">
                  <SmallPost />
                  <SmallPost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
