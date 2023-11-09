import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
// import debounce from "debounce";

function ReportError() {
  //estados
  const user = useSelector((state) => state.user);
  const [url, setUrl] = useState(null);
  const [reportedError, setReportedError] = useState(null);
  const navigate = useNavigate();

  //funciones y handlers
  const successToast = () => {
    toast.success("Error reportado con exito", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  // const warningToast = () => {
  //   toast.warning("Asegurate de completar todos los datos", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 3000,
  //   });
  // };

  const urlHandler = (e) => {
    let url = e.target.value;
    console.log(url);
    setUrl(url);
  };

  const errorHandler = (e) => {
    let error = e.target.value;
    console.log(error);
    setReportedError(error);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    successToast();
    const data = {
      from_name: user.name,
      url: url,
      error: reportedError,
    };
    console.log(data);
    emailjs
      .send("service_error", "template_error", data, "HIbFwv-O6m_d5fq9x")
      .then(() => {
        setTimeout(() => {}, 2000);
        console.log("llegamos al then");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  // const onClickError = debounce(sendEmail, 2000);
  return (
    <div className="mt-28 h-[80vh]">
      <h2 className="font-bold text-xl">REPORTAR ERRROR</h2>
      <form id="form" className="flex flex-col items-center pt-6">
        <label htmlFor="url" className="font-medium mb-2">
          Url del error
        </label>
        <input
          type="text"
          id="url"
          className="border-2 border-black mb-4 w-[25vw] rounded"
          required
          placeholder=" http://localhost:3000/birras"
          onChange={urlHandler}
        />

        <label htmlFor="error" className="font-medium mb-2">
          Descripción del error
        </label>
        <input
          type="text-area"
          maxLength={300}
          rows="10"
          cols="50"
          className="border-2 border-black  roundeed h-16 resize-none  w-[25vw] rounded"
          placeholder="no se publica la cerveza"
          onChange={errorHandler}
        />
        <button
          onClick={sendEmail}
          className="border-2 bg-black text-white px-4 py-1 mt-3 rounded"
        >
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ReportError;
