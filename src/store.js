import { createStore } from "@reduxjs/toolkit";
import rootred from "./redux/reducer/main";

const store = createStore(
    rootred
);
export default store;