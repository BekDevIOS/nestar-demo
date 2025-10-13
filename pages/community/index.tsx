import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const CommunityList: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY LIST{" "}
      <button
        style={{ margin: "15px" }}
        onClick={() => {
          alert("hello Jay");
        }}
      >
        Press me
      </button>
    </div>
  );
};

export default withLayoutBasic(CommunityList);
