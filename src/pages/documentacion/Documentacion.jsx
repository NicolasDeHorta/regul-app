import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { storage } from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { FileCard } from "../../components/filecard/FileCard";
import { ClipLoader } from "react-spinners";
import { useDataStore } from "../../components/context/context";

import "./documentacion.scss";

export const Documentacion = () => {
  const { adminMode } = useDataStore();
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, "documentation");

    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {});
        res.items.forEach(async (itemRef) => {
          const tempItem = {
            name: itemRef.name,
            url: await getDownloadURL(itemRef),
          };
          if (
            files.filter((item) => item.name === tempItem.name).length === 0
          ) {
            setFiles((arr) => [...arr, tempItem]);
          }
        });
      })
      .catch((error) => {});
  }, []);

  React.useEffect(() => {
    if (files.length > 0) setLoading(false);
  }, [files.length]);

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    setCurrentFile(file);
    console.log(file);
  };

  const handleDeleteDoc = async (filename) => {
    const docRef = ref(storage, `documentation/${filename}`);
    try {
      await deleteObject(docRef);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    // const docsRef = ref(storage, "documentation");
    const docRef = ref(storage, `documentation/${currentFile.name}`);
    await uploadBytes(docRef, currentFile);
    window.location.reload(false);
  };

  return (
    <div>
      <Header />
      <div className="documentacionWrapper">
        <h1>Documentos:</h1>
        {adminMode && (
          <form onSubmit={handleUploadFile}>
            <div className="inputFile">
              <label htmlFor="documentUpload">
                <FontAwesomeIcon icon={faUpload} />
                &nbsp; Upload file
              </label>
              <p>{currentFile && currentFile.name}</p>
              <input
                onChange={handleFileChange}
                type="file"
                name="documentUpload"
                id="documentUpload"
                placeholder="upload a document..."
              />
              <button type="submit">Upload</button>
            </div>
          </form>
        )}
        <div className="documents">
          {loading ? (
            <div className="loadingBlock">
              <span>Cargando documentos </span>
              <ClipLoader loading={loading} />
            </div>
          ) : (
            files.map((val) => (
              <FileCard
                key={val.name}
                file={val}
                deleteItem={handleDeleteDoc}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
