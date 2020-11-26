import React from 'react';
import { Emoji } from 'emoji-mart';

const EmojiContainer = ({ x, y, symbol, label }) => {
    return (
        <foreignObject height={30} width={30} x={x - 12} y={y}>
            <Emoji emoji={{ id: symbol, skin: 3 }} size={28} />
        </foreignObject>
    );
}

export default EmojiContainer;
