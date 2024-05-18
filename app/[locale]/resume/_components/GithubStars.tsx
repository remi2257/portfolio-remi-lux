import { Image as ImagePdf, Text, View } from "@react-pdf/renderer";

export const GithubStars: React.FC<{ stars: number }> = ({ stars }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <ImagePdf
        src="/assets/github.png"
        style={{
          width: 10,
          height: 10,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 11,
          marginTop: 1,
          marginLeft: 4,
          marginRight: 1,
        }}
      >
        {stars}{" "}
      </Text>
      <ImagePdf
        src="/assets/github_star.png"
        style={{
          width: 10,
          height: 10,
        }}
      />
    </View>
  );
};
