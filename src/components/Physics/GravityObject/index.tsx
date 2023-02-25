import React, { ComponentProps, useContext } from 'react';
import styles from './index.module.css';
import { IRect } from 'bump-ts';
import PhysicsObject from '../PhysicsObject';
import { Sprite, useTick } from '@pixi/react';
import { WorldContext } from '../World/context';

interface IGravityObject {
    id: string;
    initialRect: IRect;
    sprite: ComponentProps<typeof Sprite>;
}

const GravityObject = ({ id, initialRect, sprite }: IGravityObject) => {
    const { world, gravity } = useContext(WorldContext);

    useTick(() => {
        const rect = world.getRect(id);
        world.move(id, rect.x, rect.y + gravity);
    });

    return <PhysicsObject id={id} initialRect={initialRect} sprite={sprite} />;
};

export default GravityObject;
