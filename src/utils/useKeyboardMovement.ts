import { useTick } from '@pixi/react';
import { useEffect, useState } from 'react';

const speed = 0.4;

export const useKeyboardMovement = (events: { key: string; callback: (speed: number) => void }[]) => {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);

    const handleKeyDown = (e: KeyboardEvent) => {
        const event = events.find(({ key }) => key === e.key);

        if (event) {
            const { key } = event;

            if (e.key === key && !pressedKeys.includes(key)) {
                setPressedKeys((prev) => [...prev, key]);
            }
        }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
        const event = events.find(({ key }) => key === e.key);

        if (event) {
            const { key } = event;

            if (e.key === key) {
                setPressedKeys((prev) => prev.filter((k) => k !== key));
            }
        }
    };

    useTick((delta) => {
        const i = speed * delta;

        events.forEach(({ key, callback }) => {
            if (pressedKeys.includes(key)) {
                callback(i);
            }
        });
    });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
};
