import { Box, Flex } from "@theme-ui/components";
import React from "react";
import Icon from "../Icon";
import { useDispatch, useSelector } from "react-redux";
import { soundActions } from "../../redux/actions/actions";
import SoundPlayer from "../Counter/soundPlayer";

const AlarmSound = () => {
  const [open, setOpen] = React.useState(false);
  const sounds = useSelector((state: RootState) => state.alarmSound.sounds);
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const sound = useSelector((state: RootState) => state.alarmSound.sound);

  const handleSounds = (sound: TSound) => {
    dispatch(soundActions.setSound(sound));
    handleStartPlaying();
    setTimeout(() => {
      handleStopPlaying();
    }, 10000);
  };

  const handleFinishPlayingSound = (value: boolean) => {
    setTimeout(() => {
      dispatch(soundActions.setPlayingSound(false));
    }, 10000);
  };

  const handleStartPlaying = () => {
    dispatch(soundActions.setPlayingSound(true));
  };

  const handleStopPlaying = () => {
    dispatch(soundActions.setPlayingSound(false));
  };

  const handleOpenClose = () => {
    setOpen((current) => !current);
  };

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      const el = e.target;

      if (el instanceof Node && ref.current && !ref.current.contains(el)) {
        handleClose();
      }
    },
    [handleClose]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Flex
      sx={{
        borderTop: "1px solid rgba(182, 165, 166, 0.2)",
        padding: "30px 0px",
        height: 30,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <SoundPlayer
        value={sound.value}
        onFinishedPlaying={() => handleFinishPlayingSound(false)}
      />
      <Flex
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          style={{
            color: "rgb(85, 85, 85)",
            fontWeight: "bold",
            alignItems: "center",
            fontFamily: "ArialRoundedMTBold",
          }}
        >
          Alarm Sound
        </Flex>
        <Flex
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            ref={ref}
            style={{
              width: 130,
              display: "block",
              position: "relative",
              fontSize: 14,
            }}
          >
            <Box
              onClick={handleOpenClose}
              style={{
                cursor: "pointer",
                position: "relative",
                width: "100%",
                color: "rgb(120, 120, 120)",
                fontWeight: 500,
                borderRadius: 4,
                background: "rgb(235, 235, 235)",
                padding: 12,
                boxSizing: "border-box",
                fontSize: 14,
              }}
            >
              {sound.title}
              <Icon
                name="caretDown"
                style={{
                  width: 12,
                  position: "absolute",
                  top: 14,
                  right: 12,
                  opacity: 0.5,
                  cursor: "pointer",
                  color: "rgb(120, 120, 120)",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              />
            </Box>
            {open && (
              <Box
                sx={{
                  position: "absolute",
                  background: "white",
                  width: "100%",
                  borderRadius: 4,
                  zIndex: 1,
                  boxShadow:
                    "rgb(0 0 0 / 15%) 0px 3px 6px, rgb(0 0 0 / 12%) 0px 2px 4px",
                  marginTop: 1,
                }}
              >
                <Box sx={{ display: "block", padding: "8px 0px" }}>
                  {sounds
                    .filter((sound: TSound) => sound.title !== "popUp")
                    .map((sound: TSound) => (
                      <Flex
                        key={sound.id}
                        onClick={() => handleSounds(sound)}
                        sx={{
                          padding: 12,
                          boxSizing: "border-box",
                          color: "rgb(120, 120, 120)",
                          fontWeight: 500,
                          cursor: "pointer",
                          alignItems: "center",
                        }}
                      >
                        {sound.title}
                      </Flex>
                    ))}
                </Box>
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default AlarmSound;
