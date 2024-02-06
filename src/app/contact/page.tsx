import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import breadcrumb_bg from "@/assets/img/page-title/page-title-2.jpg";
import ContactArea from "@/components/contact/contact-area";
import Footer from "@/layout/footers/footer";

export const metadata: Metadata = {
  title: "Contact Page",
};

export default function ContactPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb
          bg_img={breadcrumb_bg}
          title="Contact Us"
          subtitle="Contact"
        />
        {/* breadcrumb end */}

        {/* contact area start */}
        <ContactArea />
        {/* contact area end */}

        {/* contact map start */}
        <section className="contact__map">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="contact__map-wrapper p-relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4495756488254!2d85.89775297592648!3d20.446720031060888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d12d0cc21ad%3A0x1fcd461a6f56beb7!2sOm%20Oil%20%26%20Flour%20Mills%20Ltd!5e0!3m2!1sen!2sin!4v1707206688756!5m2!1sen!2sin"
                  ></iframe>
                  {/* <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact map end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
