'use client'
import React, { useState } from 'react';
import category_data from '@/data/category-data';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { add_category, add_sub_category } from '@/redux/features/filter';

const CategoryFilter = () => {
  const {category,subCategory} = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch()

  const handleParentCategory = (value:string) => {
    dispatch(add_category(value))
  };

  const handleSubCategory = (list:string) => {
    dispatch(add_sub_category(list))
  };

  return (
    <div className="sidebar__widget mb-55">
      <div className="sidebar__widget-title mb-25">
        <h3>Product Categories</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="categories">
          <div id="accordion">
            {category_data.map((item, i) => (
              <div key={i} className={`card ${category === item.parentTitle ? 'show' : ''}`}>
                <div className="card-header white-bg">
                  <h5 className="mb-0">
                    <button
                      onClick={() => handleParentCategory(item.parentTitle)}
                      className={`shop-accordion-btn collapsed text-capitalize ${category === item.parentTitle ? 'active' : ''}`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${i}`}
                      aria-expanded={category === item.parentTitle ? 'true' : 'false'}
                    >
                      {item.parentTitle.toLowerCase()}
                    </button>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
