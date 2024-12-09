import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./src/theme/theme";
import store from "./src/store"; 

const queryClient = new QueryClient();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <NavigationContainer>
              <DrawerNavigator
                onToggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
            </NavigationContainer>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
