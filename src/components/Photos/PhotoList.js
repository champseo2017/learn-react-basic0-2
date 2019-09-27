import React from "react";
import Photo from "./Photo";
import { checknull } from "../../exfunction";
const PhotoList = props => {
  const { data } = props;
  let datacheckphoto = checknull(data);
  return (
    <div>
      {datacheckphoto &&
        datacheckphoto.map(e => {
          return <Photo data={e} key={e.id} />;
        })}
    </div>
  );
};
export default PhotoList;
