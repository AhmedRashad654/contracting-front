import PropTypes from "prop-types";
import { useState } from "react";
import { axiosInstance } from "../../../axios/axios";
import { toast } from "react-toastify";

function SureDeleteContract({
  refetch,
  setOpenDeletePopup,
  openDeletePopup,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteContract = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.delete(
        `/api/contracts/${openDeletePopup}`
      );
      if (response.status === 200) {
        refetch();
        toast.success("Contract deleted successfully");
        setOpenDeletePopup(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting contract");
      setOpenDeletePopup(null);
    } finally {
      setIsLoading(false);
      setOpenDeletePopup(null);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-bgOverlay items-center h-full p-5 z-50">
      <div className="bg-white rounded-lg shadow p-5 w-[300px] text-textLabalForm flex flex-col items-center gap-5">
        <h1 className="font-bold text-[2rem]">Are You Sure!</h1>
        <div className="flex items-center justify-between w-full gap-5">
          <button
            onClick={() => setOpenDeletePopup(null)}
            className="border rounded-md py-2 px-5 font-semibold z-40"
          >
            Back
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteContract();
            }}
            className="border rounded-md py-2 px-5 font-semibold text-white bg-red-500"
          >
            {isLoading ? "Loading..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SureDeleteContract;

SureDeleteContract.propTypes = {
  setOpenDeletePopup: PropTypes.func,
  contractId: PropTypes.string,
  refetch: PropTypes.func,
  openDeletePopup: PropTypes.any,
};
