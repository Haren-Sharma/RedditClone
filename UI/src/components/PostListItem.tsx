import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Post } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
dayjs.extend(relativeTime);

type Props = {
  post: Post;
};

const PostListItem = ({ post }: Props) => {
  return (
    <View style={styles.container}>
      {/*POST HEADER*/}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: post.group.image }}
          style={styles.grpImageStyle}
        />
        <Text style={{ fontWeight: "500", color: "black" }}>
          {post.group.name}
        </Text>
        <Text style={styles.createdAtStyle}>
          {dayjs(post.created_at).toNow(true)}
        </Text>
        <View style={styles.joinButtonText}>
          <Text style={{ color: "white" }}>Join</Text>
        </View>
      </View>
      {/*POST CONTENT*/}
      <View>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Image source={{ uri: post.image }} style={styles.imageStyle} />
        <Text numberOfLines={4}>{post.description}</Text>
      </View>

      {/*POST FOOTER*/}
      <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
        <MaterialCommunityIcons
          name="arrow-up-bold-outline"
          size={24}
          color="black"
        />
        <Text>{post.upvotes}</Text>
        <MaterialCommunityIcons
          style={{ paddingLeft: 10 }}
          name="arrow-down-bold-outline"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons
          style={{ paddingLeft: 10 }}
          name="comment-outline"
          size={24}
          color="black"
        />
        <Text>{post.nr_of_comments}</Text>
        <MaterialCommunityIcons
          style={{ paddingLeft: 10 }}
          name="trophy-outline"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons
          style={{ paddingLeft: 10 }}
          name="share-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  grpImageStyle: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  joinButtonText: {
    backgroundColor: "#2772e9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: "auto", //this will push the view to the right taking all the margin possible in the left
  },
  postTitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  createdAtStyle: { color: "#aeaeae" },
  imageStyle: {
    width: "auto",
    aspectRatio: 4 / 3,
    borderRadius: 15,
    marginVertical: 5,
  },
});

export default PostListItem;
