import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import PaginationDot from "react-native-animated-pagination-dot";
import { useState } from "react";

interface PaginatedCarouselProps {
  data: string[];
}

const PaginatedCarousel = ({ data }: PaginatedCarouselProps) => {
  const [indexCarousel, setIndexCarousel] = useState<number>(0);

  return (
    <View>
      <Carousel
        loop
        width={Dimensions.get("window").width}
        style={{ height: 240, width: "100%" }}
        data={data.map((key) =>
          `${process.env.EXPO_PUBLIC_BASE_URL_AWS_S3}${key}`.replace(" ", "+"),
        )}
        onScrollEnd={(index) => setIndexCarousel(index)}
        renderItem={({ item }) => {
          return (
            <>
              <Image
                style={{
                  flex: 1,
                }}
                source={{ uri: item }}
              />
            </>
          );
        }}
      />
      <View style={{ margin: "auto" }}>
        <PaginationDot
          curPage={indexCarousel}
          maxPage={data.length}
          activeDotColor={"black"}
        />
      </View>
    </View>
  );
};

export default PaginatedCarousel;
