import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

const CloudinayImages = ({ form, setForm }) => {
  // const [image, setImage]=useState("");
  const [loading, setLoading] = useState(false);

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images"); // upload=> nombre de la carpeta
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dl1bdwmth/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    //setImage(file.secure_url)
    setForm({ ...form, image: file.secure_url });
    setLoading(false);
  };

  return (
    <div className= "flex w-5/5 m-auto justify-center items-center self-center content-center mt-4">
      <Container>
        <FormGroup>
          {/* <Label for="exampleFile">File</Label> */}
          <Input
            name="subir"
            type="file"
            placeholder="Sube Imagen"
            onChange={upLoadImage}
          />
        </FormGroup>
      </Container>
    </div>
  );
};
export default CloudinayImages;
