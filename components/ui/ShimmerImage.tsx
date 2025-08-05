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
            shimmerColors={['#2e2e2e', '#3c3c3c', '#2e2e2e']}
        >
            <Image
                contentFit="cover"
                source={imgURL}
                alt={title}
                style={{ width: width, height: height, borderRadius: 8, borderWidth: 1, borderColor: "#eee" }}
                transition={300}
                onLoad={() => setImageIsLoaded(true)}
                cachePolicy="memory-disk"
            />
        </ShimmerPlaceholder>
    );
};

export default ShimmerImage;