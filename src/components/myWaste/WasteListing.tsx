import type { Tdata } from "../../types";
import TableLoader from "@/utils/TableLoader";
import EmptyTable from "@/utils/EmptyTable";
import { useState } from "react";
import WasteTable from "./WasteTable";
import THead from "./THead";

export default function WasteListing({
  loading,
  data,
}: {
  loading: boolean;
  data: any;
}) {
  const [view, setView] = useState(5);

  return (
    <section className="bg-white py-5 px-2 rounded-md sm:px-5">
      <div className="space-y-7">
        <div className="flex items-center justify-left">
          <h2 className="font-semibold">Recent Waste Listing</h2>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table className="table-auto w-full border-collapse ">
            <THead />
            <tbody>
              {(loading && <TableLoader />) ||
                (data &&
                  data.length > 0 &&
                  data
                    .slice(0, view)
                    .map((item: Tdata, i: number) => (
                      <WasteTable key={i} item={item} />
                    ))) || <EmptyTable />}
            </tbody>
          </table>
          {data && data.length > 4 && (
            <div className="flex items-center justify-center py-3">
              <button
                onClick={() => setView(view < data.length ? view + 5 : view)}
                className="border border-gray-300 rounded-md py-1 px-4"
              >
                View More
              </button>{" "}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
