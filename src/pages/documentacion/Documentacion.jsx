import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FileCard } from "../../components/filecard/FileCard";

import "./documentacion.scss";
// const listRef = ref(storage, "documentation");

export const Documentacion = () => {
  const [files, setFiles] = useState([]);

  // const getDocuments = () => {
  //   console.log("fetching documents");
  //   listAll(listRef)
  //     .then((res) => {
  //       res.items.forEach((itemRef) => {
  //         setFiles([...files, itemRef]);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getDocuments();
  // }, []);

  // const displayDocument = (file) => {
  //   console.log(file.name);
  //   return (
  //     <li key={file.name}>
  //       <a href={getDownloadURL(file)}>{file.name}</a>
  //     </li>
  //   );
  // };

  useEffect(() => {
    const listRef = ref(storage, "documentation");
    // Find all the prefixes and items.
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
      .catch((error) => {
        // Uh-oh, an error occurred!
      })
      .finally(console.log(files));
  }, []);

  return (
    <div>
      <Header />
      <div className="documentacionWrapper">
        <h1>Documentos:</h1>
        <div className="documents">
          {files.map((val) => (
            <FileCard file={val} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
