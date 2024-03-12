import { Slot } from "expo-router";

import {
    useFonts,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  } from "@expo-google-fonts/poppins";

export default function Layout(){

    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular,
        Poppins_500Medium,
      });

    return fontsLoaded && <Slot/>;
}