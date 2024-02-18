"use client";
import React, { useState } from "react";
import { IProduct } from "@/types/product-d-t";
import ProductItem from "./single-product/product-item";

// props type
type IProps = {
  products: IProduct[];
  style_2?: boolean;
  container?: string;
};

function TrendingProducts({products,style_2=false,container='container'}: IProps) {
  const trendingProducts = products.filter((p) => p.trending);
  const [perView, setPerView] = useState<number>(style_2 ? 10 : 4);

  const handlePerView = () => {
    setPerView(perView + 4);
  };

  return (
    <section className="product__area pt-60 pb-100" style={{backgroundColor: ''}}>
      <div className={`${container}`}>
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title-wrapper text-center mb-55">
              <div className="section__title mb-10">
                <h2 style={{ backgroundColor: "", color: "#8D004B"}}>Trending Products</h2>
              </div>
              <div className="section__sub-title p-relative">
                <p style={{ backgroundColor: "", color: "#8D004B"}}>
                  Check out the latest trending products we currently have
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {!style_2 && (
            <div className="row">
              {trendingProducts.slice(0, perView).map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4">
                  <ProductItem product={item} />
                </div>
              ))}
            </div>
          )}
          {style_2 && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
              {trendingProducts.slice(0, perView).map((item, index) => (
                <div key={index} className="col" style={{ backgroundColor: "#ffd583", color: "#8D004B"}}>
                  <ProductItem product={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="product__load-btn text-center mt-25">
              {perView < trendingProducts.length && (
                <a
                  onClick={handlePerView}
                  className="os-btn os-btn-3 cursor-pointer"
                  style={{backgroundColor: "white"}}
                >
                  Load More
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;
