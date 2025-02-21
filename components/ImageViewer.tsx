import { Image, ImageSource } from "expo-image";
import { View } from "react-native";

type Props = {
  selectedImage?: ImageSource;
  placeholderImage: ImageSource;
};

export default function ImageViewer({
  selectedImage,
  placeholderImage,
}: Props) {
  const source = selectedImage ?? placeholderImage;

  return (
    <Image
      source={source}
      style={{
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 16,
      }}
    />
  );
}
