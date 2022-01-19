import React from "react";
import itemImg from "../../assets/img/file_img.png";

import "./fileCard.scss";

export const FileCard = (props) => {
  const { file } = props;

  return (
    <a
      className="fileCardLink"
      info={file.name}
      key={file.name}
      onContextMenu={(e) => e.preventDefault()}
      href={file.url}
      target="_blank"
    >
      <div className="fileCardWrapper">
        <div className="fileCardImg">
          <img src={itemImg} />
        </div>
        <p>{file.name}</p>
      </div>
    </a>
  );
};
