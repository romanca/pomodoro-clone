import React from "react";
import { useSelector } from "react-redux";
import Sound from "react-sound";

interface IProps {
  value: boolean;
  onFinishedPlaying?: () => void;
}

const SoundPlayer: React.FC<IProps> = ({ value, onFinishedPlaying }) => {
  const isPlaying = useSelector(
    (state: RootState) => state.alarmSound.isPlaying
  );
  return (
    <Sound
      url={value}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      onFinishedPlaying={onFinishedPlaying}
    />
  );
};

export default SoundPlayer;
