import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Post } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Icon from "./Icon";
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
        {post.image ? (
          <Image source={{ uri: post.image }} style={styles.imageStyle} />
        ) : (
          <Text numberOfLines={4}>{post.description}</Text>
        )}
      </View>

      {/*POST FOOTER*/}
      <View style={[styles.row, { marginTop: 8 }]}>
        <View style={[styles.row, styles.iconBox]}>
          <Icon
            type="MaterialCommunityIcons"
            name="arrow-up-bold-outline"
            size={24}
            color="black"
          />
          <Text style={{ paddingRight: 5 }}>{post.upvotes}</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="arrow-down-bold-outline"
            size={24}
            color="black"
            style={{
              paddingLeft: 8,
              borderLeftWidth: StyleSheet.hairlineWidth,
              borderColor: "#aeaeae",
            }}
          />
        </View>
        <View style={[styles.row, styles.iconBox, { marginLeft: 8 }]}>
          <Icon
            type="MaterialCommunityIcons"
            name="comment-outline"
            size={24}
            color="black"
          />
          <Text>{post.nr_of_comments}</Text>
        </View>
        <View style={[styles.row, { marginLeft: "auto", gap: 10 }]}>
          <Icon
            type="MaterialCommunityIcons"
            name="trophy-outline"
            size={24}
            color="black"
            style={styles.iconBox}
          />
          <Icon
            type="MaterialCommunityIcons"
            name="share-outline"
            size={24}
            color="black"
            style={styles.iconBox}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
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
    paddingVertical: 5,
  },
  createdAtStyle: { color: "#aeaeae" },
  imageStyle: {
    width: "auto",
    aspectRatio: 4 / 3,
    borderRadius: 15,
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  iconBox: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 15,
    borderRadius: 20,
  },
});

export default PostListItem;
