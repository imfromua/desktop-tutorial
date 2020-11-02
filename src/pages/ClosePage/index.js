import React from "react";

import { FirebaseDatabaseNode } from "@react-firebase/database";
import HyvorTalk from "hyvor-talk-react";

export default function ClosedPage() {
  return (
    <div>
      Dlya svoih
      {/*<div>
        <FirebaseDatabaseNode
          path="messages/"
          limitToFirst={10}
          // orderByKey
          orderByValue={"date_created"}
        >
          {(d) => {
            return <div>{console.log(d)}</div>;
          }}
        </FirebaseDatabaseNode>
      </div>
        */}
      <div className="comment-count-view">
        {/* Comment Counts */}
        <HyvorTalk.CommentCount websiteId={2300} id={"close_page"} />
      </div>
      <content>Your Article Here</content>
      {/* Load Comments now */}
      <HyvorTalk.Embed websiteId={2300} id={"close_page"} />
    </div>
  );
}
