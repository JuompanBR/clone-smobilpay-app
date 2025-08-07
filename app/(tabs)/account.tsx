
import { SettingsListItem, ThemedScrollView } from '@/components';
import { Colors } from '@/constants';
import { SettingsListItemType } from '@/types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { VStack } from '@react-native-material/core';
import { useRouter } from 'expo-router';
import { Divider } from 'react-native-paper';

export default function AccountTab() {

  const router = useRouter();

  const accountSettingsItems: SettingsListItemType[] = [
    {
      leadingIcon: (
        <MaterialIcons
          name="person-outline"
          color={Colors.mainAppColor}
          size={24}
          title='Profile'
          description='Manage your profile settings'
        />
      ),
      title: "Profile"
    },
    {
      leadingIcon: (
        <MaterialIcons
          name="account-balance"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Balance and Commissions"
    },
    {
      leadingIcon: (
        <Ionicons
          name="settings-outline"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Configure Funding Options"
    },
    {
      leadingIcon: (
        <MaterialIcons
          name="add-card"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Account Balance Transfer"
    },
    {
      leadingIcon: (
        <MaterialIcons
          name="add"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Fund Account",
      onClick: (e) => {
        console.log(e);
        router.push('/fundAccount');
      }
    },
    {
      leadingIcon: (
        <Ionicons
          name="shield-checkmark-outline"
          color={Colors.mainAppColor}
          size={24}
        />
      ),
      title: "Manage your KYC"
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
