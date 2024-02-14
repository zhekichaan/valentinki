"use client";

import { useState } from "react";

export default function Mira() {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dvpw1seyg/image/upload/v1707886743/valent/miraclose_ga77qr.png"
  );
  const [width, setWidth] = useState("mx-auto w-[500px]");
  const openImg =
    "https://res.cloudinary.com/dvpw1seyg/image/upload/v1707886744/valent/miraopen_uth2qa.png";
  const closeImg =
    "https://res.cloudinary.com/dvpw1seyg/image/upload/v1707886743/valent/miraclose_ga77qr.png";
  const closeWidth = "mx-auto w-[500px]";
  const openWidth = "mx-auto w-[1000px]";

  const handleClick = () => {
    if (image == closeImg) {
      setImage(openImg);
      setWidth(openWidth);
    } else {
      setImage(closeImg);
      setWidth(closeWidth);
    }
  };
  return (
    <div className="text-center mt-[10%]">
      <img onClick={() => handleClick()} className={width} src={image} alt="" />
    </div>
  );
}
