import SocialLinks from "@/layout/footers/social-links";
import ContactForm from "../forms/contact-form";

const contactInfo = [
  {
    icon: "fal fa-map-marker-alt",
    title: "Address:",
    subtitle:
      "Om Oil & Flour Mills Ltd (Frozen Food Division),Type- 2, No-8, Industrial Estate, Madhupatna,Cuttack - 753010 Odisha, India",
  },
  {
    icon: "fal fa-envelope-open-text",
    title: "Email:",
    subtitle: "Contact@erentheme.com",
  },
  {
    icon: "fal fa-phone-alt",
    title: "Number Phone:",
    subtitle: "(800) 123 456 789, (800) 987 654 321",
  },
];

const ContactArea = () => {
  return (
    <>
      <section className="contact__area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact__info">
                <h3>Find us here.</h3>
                <ul className="mb-55">
                  {contactInfo.map((item) => (
                    <li key={item.title} className="d-flex mb-35">
                      <div className="contact__info-icon mr-20">
                        <i className={item.icon}></i>
                      </div>
                      <div className="contact__info-content">
                        <h6>{item.title}</h6>
                        <span>{item.subtitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p>
                  Providing you Ready to Eat Frozen Foods, Fresh & Packed
                  Delectable Bakery products, Refreshing Drinks and much more.
                  You can enjoy all the products served as ready to eat at our
                  outlet or get the packaged frozen ones for later use.
                </p>

                <div className="contact__social">
                  <ul>
                    <SocialLinks />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact__form">
                <h3>Contact Us.</h3>
                {/* contact form stat */}
                <ContactForm />
                {/* contact form stat */}
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
