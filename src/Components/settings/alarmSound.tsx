import { Box, Flex } from "@theme-ui/components";
import React from "react";
import Icon from "../Icon";
import { useDispatch, useSelector } from "react-redux";
import { soundActions } from "../../redux/actions/actions";
import SoundPlayer from "../Counter/soundPlayer";
import theme from "../../shared/theme";

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
        height: theme.space[38],
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
          width: theme.space[8],
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          style={{
            color: theme.colors.greys[2],
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
              width: theme.space[48],
              display: "block",
              position: "relative",
              fontSize: theme.fontSizes[7],
            }}
          >
            <Box
              onClick={handleOpenClose}
              style={{
                cursor: "pointer",
                position: "relative",
                width: theme.space[8],
                color: theme.colors.greys[5],
                fontWeight: 500,
                borderRadius: theme.borderRadiuss[0],
                background: theme.colors.greys[6],
                padding: theme.space[2],
                boxSizing: "border-box",
                fontSize: theme.fontSizes[7],
              }}
            >
              {sound.title}
              <Icon
                name="caretDown"
                style={{
                  width: theme.space[2],
                  position: "absolute",
                  top: theme.space[33],
                  right: theme.fontSizes[2],
                  opacity: theme.opacities[3],
                  cursor: "pointer",
                  color: theme.colors.greys[5],
                  fontWeight: 500,
                  fontSize: theme.fontSizes[7],
                }}
              />
            </Box>
            {open && (
              <Box
                sx={{
                  position: "absolute",
                  background: "white",
                  width: theme.space[8],
                  borderRadius: theme.space[0],
                  zIndex: theme.space[49],
                  boxShadow:
                    "rgb(0 0 0 / 15%) 0px 3px 6px, rgb(0 0 0 / 12%) 0px 2px 4px",
                  marginTop: theme.space[49],
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
                          padding: theme.space[2],
                          boxSizing: "border-box",
                          color: theme.colors.greys[5],
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
