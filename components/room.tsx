"use client";

import { ReactNode } from "react";
import { ClientSideSuspence } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

interface RoomProps {
    children: ReactNode
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
};

export const Room = ({ 
    children,
    roomId,
    fallback,
}: RoomProps) => {
    return (
        <RoomProvider id= {roomId} initialPresence={{}}>
            <ClientSideSuspence fallback={fallback}>
                {() => children}
            </ClientSideSuspence>
        </RoomProvider>
    );
};