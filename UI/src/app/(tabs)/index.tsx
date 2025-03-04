import { FlatList } from "react-native";
import React from "react";
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <FlatList
      data={[posts[0]]}
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HomeScreen;
