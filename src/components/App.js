import React from "react";
import { View } from "react-native";
//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Header } from "./common/Header";
import reducers from "./reducers";

const App = () => {
    return (
    // Provider can only have one child component
    <Provider store={createStore(reducers)}>
    <View>
    <Header headerText="Redux Demo -- Tech Stack" />
    {/* <LibraryList /> */}
    </View>
    </Provider>
    );
    };
    
    export default App;
    