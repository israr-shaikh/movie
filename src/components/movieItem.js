import React from "react";

export default function movieItem(props) {
  const { title, images } = props.data;
  return (
    <div>
        <img src={images["Poster Art"].url} height={200} width={120} />
      <div>{title}</div>
    </div>
  );
}
