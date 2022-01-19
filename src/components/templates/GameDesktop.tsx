import { VFC } from "react";
import { GameEngine } from "../organisms/game/GameEngine";

export const GameDesktop: VFC = () => {
  return (
    <>
      <div className="grid grid-cols-desktop gap-4 m-auto">
        <div className="flex flex-col">
                    {/* <GamePieces
                        reverse={true}
                        className="p-4"
                        label="Hold"
                        selectPieces={GameSelectors.hold}
                    />
                    <GameNumbers className="flex-col mt-auto gap-4" /> */}
        </div>
        <GameEngine />
        <div className="flex flex-col"></div>
      </div>
    </>
  )
}