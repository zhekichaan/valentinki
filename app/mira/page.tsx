"use client";

import { useState } from "react";

export default function Mira() {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dvpw1seyg/image/upload/v1707883513/valent/miraclose_gzr3e3.png"
  );
  const [width, setWidth] = useState("mx-auto w-[500px]");
  const openImg =
    "https://res.cloudinary.com/dvpw1seyg/image/upload/v1707883514/valent/miraopen_zbpf7n.png";
  const closeImg =
    "https://res.cloudinary.com/dvpw1seyg/image/upload/v1707883513/valent/miraclose_gzr3e3.png";
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
