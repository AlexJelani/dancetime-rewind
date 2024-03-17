import React from "react";
import { QueryClient, QueryClientProvider } from "react-query"; // Import QueryClient and QueryClientProvider
import { Stack } from "expo-router";

// Create a new query client instance
const queryClient = new QueryClient();

export default function Layout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="dances" options={{
                    presentation:'fullScreenModal'
                }}/>
                <Stack.Screen
                    name="exerciseDetails"
                    options={{
                        presentation:'modal',
                        animation:"slide_from_bottom",
                    }}
                />
            </Stack>
        </QueryClientProvider>
    );
}

