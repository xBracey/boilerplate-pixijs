import React from 'react';
import World from '../World';
import Platform from '../Platform';
import Player from '../Player';

interface IBoard {}

const Board = ({}: IBoard) => {
    return (
        <World width={960} height={320} tileSize={32} gravity={5}>
            <Player
                initialRect={{
                    x: 400,
                    y: 100,
                    w: 32,
                    h: 32
                }}
            />
            <Platform
                id={'Platform1'}
                initialRect={{
                    x: 80,
                    y: 280,
                    w: 800,
                    h: 40
                }}
            />
        </World>
    );
};

export default Board;
