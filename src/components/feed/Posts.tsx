import { api } from "@/utils/api";
import React from "react";
import Postcard from "../shared/postcard";

const Posts = () => {
  const { data, isLoading } = api.post.timeline.useQuery();
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {data && data?.length > 0 ? (
            <div className="flex gap-5 flex-col">
              {data?.map((post) => (
                <Postcard key={post.id} post={post.Thread} />
              ))}
            </div>
          ) : (
            <p>Start following to see posts</p>
          )}
        </>
      )}
    </div>
  );
};

export default Posts;
