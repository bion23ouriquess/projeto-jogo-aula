import { useState } from 'react';
import BotaoCustomize from '../BotaoCustomize/BotaoCustomize';
import './JogoCubo.css';

function JogoCubo() {

    const [emoji, setEmoji] = useState('')

    const emojis = [
        "😊", "🚀", "🌟", "🐉", "🎩", "📖", "🎭", "🧩", "🎨", "🎵",
        "🕵️", "📜", "⚔️", "🛡️", "🔮", "🧙", "👑", "🏰", "🌍", "🦄",
        "💡", "📚", "🗝️", "💰", "🎯", "🕰️", "🦸", "🛸", "🎲", "🚢"
    ];

    const emojiAleatorio = () => emojis[Math.floor(Math.random() * emojis.length)]
    
    function mostrarEmoji () {
        setEmoji(emojiAleatorio());
    };

    return(
        <div>
            <BotaoCustomize aoClicar={mostrarEmoji} cor={'primaria'}>{emoji}</BotaoCustomize>
        </div>
    )
};

export default JogoCubo;