import React, { useRef, useState } from 'react';
import { Sprite, useTick } from '@pixi/react';

interface IBunnyReducer {
    x: number;
    y: number;
    rotation: number;
    anchor: number;
}

interface IBunny {
    speed: number;
}

const Bunny = ({ speed }: IBunny) => {
    const [motion, setMotion] = useState<IBunnyReducer>({
        x: 0,
        y: 0,
        rotation: 0,
        anchor: 0
    });
    const iter = useRef(0);

    useTick((delta) => {
        const i = (iter.current += speed * delta);

        setMotion({
            x: Math.sin(i) * 100,
            y: Math.sin(i / 1.5) * 100,
            rotation: Math.sin(i) * Math.PI,
            anchor: Math.sin(i / 2)
        });
    });

    return <Sprite image="https://pixijs.io/pixi-react/img/bunny.png" {...motion} />;
};

export default Bunny;
