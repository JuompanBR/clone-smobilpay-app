
import { SettingsListItem, ThemedScrollView } from '@/components';
import { Colors } from '@/constants';
import { SettingsListItemType } from '@/types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { VStack } from '@react-native-material/core';
import { useRouter } from 'expo-router';
import { Divider } from 'react-native-paper';

export default function HistoryTab() {

  const router = useRouter();

  const accountSettingsItems: SettingsListItemType[] = [
    {
      leadingIcon: (
        <MaterialIcons
          name="space-dashboard"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Summary"
    },
    {
      leadingIcon: (
        <MaterialIcons
          name="account-balance"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Transaction History"
    },
    {
      leadingIcon: (
        <Ionicons
          name="settings-outline"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Transfer History"
    }
  ];

  return (
    <ThemedScrollView style={{ flex: 1, paddingHorizontal: 18, paddingVertical: 5 }}>
      <VStack divider={<Divider style={{ marginVertical: 5 }} />}>
        {
          accountSettingsItems.map((item: SettingsListItemType) => {
            return (
              <SettingsListItem
                key={item.title}
                {...item}
              />
            )
          })
        }

      </VStack>
    </ThemedScrollView>
  );
}
