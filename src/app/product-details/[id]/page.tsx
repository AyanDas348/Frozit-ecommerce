import React from "react";
import { Metadata } from "next";
import { promises as fs } from 'fs';
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import Footer from "@/layout/footers/footer";
import ProductDetailsUpper from "@/components/product-details/product-details-upper";
import ProductDetailsBottom from "@/components/product-details/product-details-bottom";
import RelatedProducts from "@/components/products/related-products";
import { IProduct } from "@/types/product-d-t";
import product_data from "@/data/product-data";

export const metadata: Metadata = {
  title: "Shop Details Page",
};

export default async function ProductDetailsPage({params}:{params:{id:string}}) {
  // const file = await fs.readFile(process.cwd() + '/src/app/product-data.json', 'utf8');
  // console.log(process.cwd())
  // const product_data = JSON.parse(file);
  const product = product_data.find((p:IProduct) => p.id === Number(params.id)) || product_data[0];
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="Product Details" subtitle="Product Details" />
        {/* breadcrumb end */}

        {/* shop details upper area start */}
        <section className="shop__area pb-65">
          <div className="shop__top grey-bg-6 pt-100 pb-90">
            <div className="container">
              <ProductDetailsUpper product={product} />
              <ProductDetailsBottom product={product}/>
            </div>
          </div>
        </section>
        {/* shop details upper area end */}

        {/* related products start */}
        {/* <RelatedProducts product_data={product_data} product={product}/> */}
        {/* related products end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}

