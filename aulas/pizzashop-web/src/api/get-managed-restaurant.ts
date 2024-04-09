import { api } from "@/lib/axios";

interface GetProfileManagedRestaurantResponse {
    name: string;
    id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function getProfileManagedRestaurant() {
    const response = await api.get<GetProfileManagedRestaurantResponse>("/managed-restaurant");
    console.log(response);
    return response.data;
}