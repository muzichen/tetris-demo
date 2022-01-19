import { FC } from "react";
import { useSelector } from "react-redux";
import { GameSelectors } from "../../store/game/game-selectors";
import { UiThemeProvider } from "../particles/contexts/UiThemeContext";
import { GameDesktop } from "./GameDesktop";
import { Welcome } from "./Welcome";

export const App: FC = () => {
    const welcoming = useSelector(GameSelectors.welcoming);

    const game = (
        <UiThemeProvider transparent large>
            <GameDesktop />
        </UiThemeProvider>
    );

    return (
        <div className="flex flex-col w-full h-full">
            {welcoming ? <Welcome /> : game}
        </div>
    );
};
