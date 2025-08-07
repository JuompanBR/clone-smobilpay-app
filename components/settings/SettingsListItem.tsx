import { Colors } from "@/constants";
import { SettingsListItemType } from "@/types";
import { Box } from "@react-native-material/core";
import { GestureResponderEvent, Pressable } from "react-native";
import { List } from "react-native-paper";

const SettingsListItem: React.FC<SettingsListItemType> = ({ leadingIcon, title, description, onClick }) => {
    return (
        <Pressable
            onPress={(e: GestureResponderEvent) => {
                if (onClick) { onClick(e); }
            }}
            >
            <List.Item
                title={title}
                description={description}
                right={(props) => <List.Icon {...props} icon='chevron-right' />}
                left={() =>
                (
                    <Box w={40} h={40} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', borderWidth: 1, borderStyle: 'solid', borderColor: Colors.mainAppColor }}>
                        {leadingIcon}
                    </Box>
                )}
            />
        </Pressable>
    );
};

export default SettingsListItem;