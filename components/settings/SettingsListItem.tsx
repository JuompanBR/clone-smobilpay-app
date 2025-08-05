import { SettingsListItemType } from "@/types";
import { ReactNode } from "react";
import { List } from "react-native-paper";

const SettingsListItem: React.FC<SettingsListItemType> = ({ leadingIcon, title, description }): ReactNode => {
    return (
        <List.Item
            title={title}
            description={description}
            left={leadingIcon}
            right={(props) => <List.Icon {...props}
            icon='camera' />}
        />
    );
};

export default SettingsListItem;