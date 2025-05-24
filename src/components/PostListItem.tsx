import React from "react";
import { View, Image, Text } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "demo",
  },
});

export default function PostListItem({ post }) {
  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image("sample");

  return (
    <View className="bg-white">
      {/*Header */}
      <View className="flex-row items-center gap-2 p-3">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>

      {/*Content*/}
      <AdvancedImage cldImg={myImage} />

      {/* <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      Icons */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}
