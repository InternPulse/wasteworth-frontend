import { ClipLoader } from "react-spinners";

const TableLoader = () => {
  return (
    <tr>
      <td colSpan={6} height={120}>
        <h3 className="text-xl font-bold text-center">
          <ClipLoader size={60} />
        </h3>
      </td>
    </tr>
  );
};

export default TableLoader;
