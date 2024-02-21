"use client";

import { nanoid } from "nanoid";
import { useCallback, useMemo, useState, useEffect } from "react";
import { LiveObject } from "@liveblocks/client";

import {
  useHistory,
  useCanUndo,
  useCanRedo,
  useMutation,
  useStorage,
  useOthersMapped,
  useSelf,
} from "@/liveblocks.config";
import {
  connectionIdToColor,
 
} from "@/lib/utils";


import {
  Camera,
  CanvasMode,
  CanvasState,
  Color,
  LayerType,
  Point,
  Side,
  XYWH,
} from "@/types/canvas";


import { Info } from "./info";
import { Toolbar } from "./toolbar";
import { Participants } from "./participants";





interface CanvaseProps {
  boardId: string;
}

// const info = useSelf((me)=> me.info)
// console.log(info)

export const Canvas = ({ boardId }: CanvaseProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });


  // const history = useHistory();
  // const canUndo = useCanUndo();
  // const canRedo = useCanRedo();


  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={false}
        canUndo={false}
        undo={()=>{}}
        redo={()=>{}}
        // canRedo={canRedo}
        // canUndo={canUndo}
        // undo={history.undo}
        // redo={history.redo}
      />
    </main>
  );
};
