import React, { ReactNode } from 'react';
import Bump from 'bump-ts';
import { Stage } from '@pixi/react';
import { WorldContext } from './context';

interface IWorld {
    width: number;
    height: number;
    tileSize: number;
    children: ReactNode;
    gravity: number;
}

const World = ({ width, height, tileSize, children, gravity }: IWorld) => {
    return (
        <Stage width={width} height={height}>
            <WorldContext.Provider value={{ world: Bump.newWorld(tileSize), gravity }}>
                {children}
            </WorldContext.Provider>
        </Stage>
    );
};

export default World;
