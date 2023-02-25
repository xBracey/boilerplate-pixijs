import React from 'react';
import { Texture } from '@pixi/core';
import PhysicsObject from '../PhysicsObject';
import { IRect } from 'bump-ts';

interface IPlatform {
    id: string;
    initialRect: IRect;
}

const Platform = ({ id, initialRect }: IPlatform) => {
    return <PhysicsObject id={id} initialRect={initialRect} sprite={{ texture: Texture.WHITE, tint: 0x00ff00 }} />;
};

export default Platform;
