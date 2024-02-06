import React from "react";
import Link from "next/link";

const extra_info = [
  {
    class: "my-account",
    title: "My Account",
    listItems: [
      { link: "/login", title: "Login" },
      { link: "/wishlist", title: "Wishlist" },
      { link: "/cart", title: "Cart" },
      { link: "/checkout", title: "Checkout" },
      { link: "/register", title: "Create Account" },
    ],
  },
];

const ExtraInfo = () => {
  return (
    <ul className="extra-info">
      {extra_info.map((item, index) => (
        <li key={index}>
          <div className={`${item.class}`}>
            <div className="extra-title">
              <h5>{item.title}</h5>
            </div>
            <ul>
              {item.listItems.map((list, index) => (
                <li key={index}>
                  <Link href={`${list.link}`}>
                      {`${list.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExtraInfo;
