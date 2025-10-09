import { ClipLoader } from "react-spinners";

const DivLoader = () => {
  return (
    <div className="w-full flex items-center justify-center p-10">
      <h3 className="text-xl font-bold text-center">
        <ClipLoader size={60} />
      </h3>
    </div>
  );
};

export default DivLoader;
