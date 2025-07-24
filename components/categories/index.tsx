import { ThemedText } from '@/components';
import { BACKEND_URL, beResourceMapping } from '@/constants';
import { useAppStore } from '@/stores';
import { CategoryType } from '@/types';
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import IconComponent from './IconComponent';

const Categories = () => {

  const appStore = useAppStore();

  // Fetch categories
  const { isPending, error, data, isFetching } = useQuery({

    queryKey: ['categories'],
    queryFn: async () => {
      let response = await fetch(BACKEND_URL + beResourceMapping.category);

      const result = await response.json();
      appStore.setCategoryList(result);
      return result;
    },
  });

  if (isPending) return <ThemedText>Loading...</ThemedText>

  if (error) return <ThemedText>{'An error has occurred: ' + error.message}</ThemedText>

  return (
    <View style={{ padding: 12, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'baseline', gap: 15 }}>
      {data.map((category: CategoryType) => (
        <View key={category.id} style={{ width: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ padding: 20, backgroundColor: "#00a3b225", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%' }}>
            <IconComponent category={category} key={category.id} />
          </View>
          <ThemedText style={{ textAlign: 'center', marginTop: 6, fontSize: 14 }}>{category.name}</ThemedText>
        </View>
      ))}
    </View>
  );
}

export default Categories;