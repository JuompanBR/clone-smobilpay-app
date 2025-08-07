import { Colors } from "@/constants";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { DimensionValue } from "react-native";
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ShimmerImage: React.FC<{ imgURL: string, title: string, width?: DimensionValue, height?: DimensionValue }> = ({ imgURL, title, width = 83, height = 83 }) => {
    const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);

    return (
        <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={{ width: width, height: height, borderRadius: 8 }}
            visible={imageIsLoaded}
            shimmerColors={Colors.shimmerColors}
        >
            <Image
                contentFit="cover"
                source={imgURL}
                alt={title}
                style={{ width: width, height: height, borderRadius: 8, borderWidth: 1, borderColor: "#eee" }}
                transition={0}
                onLoad={() => setImageIsLoaded(true)}
                cachePolicy="disk"
            />
        </ShimmerPlaceholder>
    );
};

export default ShimmerImage;