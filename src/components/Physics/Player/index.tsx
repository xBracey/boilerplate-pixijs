import React from 'react';
import GravityObject from '../GravityObject';
import { Texture } from '@pixi/core';
import { IRect } from 'bump-ts';
import { useJump } from 'src/utils/useJump';
import { useKeyboardMovementPhysics } from 'src/utils/useKeyboardMovementPhysics';

interface IPlayer {
    initialRect: IRect;
}

const Player = ({ initialRect }: IPlayer) => {
    const id = 'Player';

    useJump(id, 20);
    useKeyboardMovementPhysics(id, 4);

    return <GravityObject id={id} initialRect={initialRect} sprite={{ texture: Texture.WHITE, tint: 0xff0000 }} />;
};

export default Player;
