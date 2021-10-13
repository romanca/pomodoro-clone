import { Box, Flex } from "@theme-ui/components";
import React from "react";
import Icon from "../Icon";
import Sound from "react-sound";
import { useDispatch, useSelector } from "react-redux";
import { soundActions } from "../../redux/actions/actions";

const AlarmSound = () => {
  const [open, setOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const sounds = useSelector((state: RootState) => state.alarmSound.sounds);
  const value = useSelector((state: RootState) => state.alarmSound.value);
  const title = useSelector((state: RootState) => state.alarmSound.title);
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLDivElement>(null);

  const handleSound = (value: string, title: string) => {
    dispatch(soundActions.setSoundValue(value));
    dispatch(soundActions.setSoundTitle(title));
    handleStartPlaying();
    setTimeout(() => {
      handleStopPlaying();
    }, 10000);
  };

  const handleStartPlaying = () => {
    setIsPlaying(true);
  };

  const handleStopPlaying = () => {
    setIsPlaying(false);
  };

  const handleOpenClose = () => {
    setOpen((current) => !current);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Sound
        url={value}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
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
              {title || sounds[0].title}
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
                  <Flex
                    onClick={() =>
                      handleSound(sounds[0].value, sounds[0].title)
                    }
                    sx={{
                      padding: 12,
                      boxSizing: "border-box",
                      color: "rgb(120, 120, 120)",
                      fontWeight: 500,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    Bell
                  </Flex>
                  <Flex
                    onClick={() =>
                      handleSound(sounds[1].value, sounds[1].title)
                    }
                    sx={{
                      padding: 12,
                      boxSizing: "border-box",
                      color: "rgb(120, 120, 120)",
                      fontWeight: 500,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    Bird
                  </Flex>
                  <Flex
                    onClick={() =>
                      handleSound(sounds[2].value, sounds[2].title)
                    }
                    style={{
                      padding: 12,
                      boxSizing: "border-box",
                      color: "rgb(120, 120, 120)",
                      fontWeight: 500,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    Fall
                  </Flex>
                  <Flex
                    onClick={() =>
                      handleSound(sounds[3].value, sounds[3].title)
                    }
                    style={{
                      padding: 12,
                      boxSizing: "border-box",
                      color: "rgb(120, 120, 120)",
                      fontWeight: 500,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    Kitchen
                  </Flex>
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
