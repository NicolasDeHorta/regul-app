import React from "react";
import itemImg from "../../assets/img/file_img.png";
import { useDataStore } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import "./fileCard.scss";

export const FileCard = (props) => {
  const { adminMode } = useDataStore();
  const { file, deleteItem } = props;

  const handleDeleteItem = () => {
    deleteItem(file.name);
  };

  return (
    <div>
      {adminMode && (
        <div className="deleteFileButton" onClick={handleDeleteItem}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      )}
      <a
        className="fileCardLink"
        info={file.name}
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
    </div>
  );
};
