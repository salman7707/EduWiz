"use client";
import store from "@/lib/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface providerTypes {
  children?: ReactNode;
}

export default function storeProvider({ children }: providerTypes) {
  return <Provider store={store}>{children}</Provider>;
}
