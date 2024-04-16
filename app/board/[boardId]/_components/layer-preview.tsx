import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import { RectangleHorizontal } from "lucide-react";
import { memo } from "react";

interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
};

export const LayerPreview = memo(({
id,
onLayerPointerDown,
selectionColor,
}: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer){
        return null;
    }
    

    switch (LayerPreview.type) {
        case LayerType.Rectangle:
            return (
                <Rectangle 
                id={id}
                layer={layer}
                onPointerDown={onLayerPointerDown}
                selectionColor={selectionColor}
                />
        );
    default:
        console.warn("Unknown layer type");
        return null;
}

});