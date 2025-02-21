import { View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageSource } from "expo-image";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<ImageSource>();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      alert("You did not select any image.");
      return;
    }

    setSelectedImage(result.assets[0]);
    setShowAppOptions(true);
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#25292e",
        paddingHorizontal: 36,
        alignItems: "center",
        gap: 40,
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <ImageViewer
          selectedImage={selectedImage}
          placeholderImage={PlaceholderImage}
        />
      </View>

      <View style={{ flex: 1 / 3, width: "100%" }}>
        {showAppOptions ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        ) : (
          <>
            <Button
              onPress={pickImageAsync}
              theme="primary"
              label="Choose a photo"
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </>
        )}
      </View>

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* A list of emoji component will go here */}
      </EmojiPicker>
    </View>
  );
}
