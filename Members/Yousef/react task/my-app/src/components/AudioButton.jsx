import React from 'react';
import soundFile from '../assets/rip.mp3'; // لاحظ استخدام .. للخروج من مجلد components

function AudioButton() {
  const playAudio = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <button onClick={playAudio}>
      تشغيل الصوت 🔊
    </button>
  );
}

export default AudioButton;