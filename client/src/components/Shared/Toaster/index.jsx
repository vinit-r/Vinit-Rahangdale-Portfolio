import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = ({ToastType}) => {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right",
    });
  };
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toaster;
