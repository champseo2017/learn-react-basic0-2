import React from "react";
import { checknull } from "../../exfunction";
const Photo = props => {
  const { data } = props;
  let datacheckphoto = checknull(data);
  return (
    <div>
      <article className="media">
        <figure className="media-left">
          <p className="image is-128x128">
            <img src={datacheckphoto.thumbnailUrl} alt={datacheckphoto.title} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">{datacheckphoto.title}</div>
        </div>
      </article>
    </div>
  );
};
export default Photo;
