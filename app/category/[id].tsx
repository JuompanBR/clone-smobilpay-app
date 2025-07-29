import { ServiceItem } from "@/components";
import { useAppStore } from "@/stores";
import { Stack } from "@react-native-material/core";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView } from "react-native";

const CategoryActivity: React.FC = () => {
    const { id } = useLocalSearchParams();
    const { serviceList } = useAppStore();
    const filteredItems = useMemo(() => {
        return serviceList.filter((serviceItem) => serviceItem.categoryId === id)
    }, [serviceList]);

    return (
        <ScrollView>
            <Stack fill direction="row" wrap="wrap" style={{ display: 'flex', gap: 20, paddingHorizontal: 22, paddingVertical: 20 }}>
                {
                    filteredItems.map((serviceData) => {
                        return <ServiceItem
                            key={serviceData.serviceId}
                            categoryId={serviceData.categoryId}
                            title={serviceData.title}
                            logoUrl={serviceData.logoUrl}
                            serviceId={serviceData.serviceId}
                            currency={serviceData.currency}
                            description={serviceData.description}
                            isCustomerPayingFee={serviceData.isCustomerPayingFee}
                        />
                    })
                }
            </Stack>
        </ScrollView>
    );
};

export default CategoryActivity;