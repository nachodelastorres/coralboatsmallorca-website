'use client';

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { blogDataOne } from '@/data/blog-data';
import BlogItemOne from './blog-item/blog-item-one';

const BlogArea = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Define the number of items per page

  // Calculate items to display for the current page
  const offset = currentPage * itemsPerPage;
  const sortedBlogs = [...blogDataOne].sort((a, b) => b.id - a.id);
  const currentBlogs = sortedBlogs.slice(offset, offset + itemsPerPage);
  

  // Calculate total pages required
  const pageCount = Math.ceil(blogDataOne.length / itemsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="it-blog-area pt-60 pb-150 p-relative">
      <div className="container">
        <div className="row">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <BlogItemOne blog={blog} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-pagination">
              <ReactPaginate
                previousLabel={<i className="fa-solid fa-arrow-left-long"></i>}
                nextLabel={<i className="fa-solid fa-arrow-right-long"></i>}
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                activeClassName="active"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogArea;
