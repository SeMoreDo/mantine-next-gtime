import { Slider, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  track: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
  mark: {
    width: 6,
    height: 6,
    borderRadius: 6,
    transform: 'translateX(-3px) translateY(-2px)',
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
  markFilled: {
    borderColor: theme.colors.blue[6],
  },
  markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: theme.white,
    borderWidth: 1,
    boxShadow: theme.shadows.sm,
  },
}));

function MyCustomSlider() {
  const { classes } = useStyles();

  return (
    <Slider
      classNames={{
        track: classes.track,
        mark: classes.mark,
        markFilled: classes.markFilled,
        markLabel: classes.markLabel,
        thumb: classes.thumb,
      }}
    />
  );
}

export default MyCustomSlider;
