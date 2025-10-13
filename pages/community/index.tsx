import { useState } from "react";

const CommunityList = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER")
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

export default CommunityList;
