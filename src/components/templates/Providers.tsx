import { FC, useMemo } from "react";
import { Provider } from "react-redux";
import { getAppStore } from "../../store/app-store";

export const Providers: FC = ({ children }) => {
  const store = useMemo(() => getAppStore(), []);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}