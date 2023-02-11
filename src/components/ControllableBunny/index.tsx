import React, { useState } from 'react';
import { Sprite } from '@pixi/react';
import { useKeyboardMovement } from 'src/utils/useKeyboardMovement';

const ControllableBunny = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useKeyboardMovement([
        {
            key: 'w',
            callback: (speed: number) => {
                setY((y) => y - speed * 10);
            }
        },
        {
            key: 's',
            callback: (speed: number) => {
                setY((y) => y + speed * 10);
            }
        },
        {
            key: 'a',
            callback: (speed: number) => {
                setX((x) => x - speed * 10);
            }
        },
        {
            key: 'd',
            callback: (speed: number) => {
                setX((x) => x + speed * 10);
            }
        }
    ]);

    return <Sprite image="https://pixijs.io/pixi-react/img/bunny.png" x={x} y={y} rotation={0} anchor={0} />;
};

export default ControllableBunny;
