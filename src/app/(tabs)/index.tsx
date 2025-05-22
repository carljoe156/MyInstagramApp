import { FlatList } from "react-native";
import posts from "../../../assets/data/posts.json";
import React from "react";
import PostListItem from "src/components/PostListItem";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        width: "100%",
        alignItems: "center",
      }}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
