import React, { ComponentProps, useContext, useEffect, useState } from 'react';
import { WorldContext } from '../World/context';
import { Sprite, useTick } from '@pixi/react';
import { IRect } from 'bump-ts';

interface IPhysicsObject {
    id: string;
    initialRect: IRect;
    sprite: ComponentProps<typeof Sprite>;
}

const PhysicsObject = ({ id, initialRect, sprite }: IPhysicsObject) => {
    const [rect, setRect] = useState(initialRect);
    const { world } = useContext(WorldContext);
    const { x, y, w, h } = rect;

    useEffect(() => {
        world.add(id, x, y, w, h);
    }, []);

    useTick(() => {
        const newRect = world.getRect(id);

        if (newRect.x !== x || newRect.y !== y || newRect.w !== w || newRect.h !== h) {
            setRect(newRect);
        }
    });

    return <Sprite {...sprite} x={x} y={y} width={w} height={h} anchor={0} />;
};

export default PhysicsObject;
