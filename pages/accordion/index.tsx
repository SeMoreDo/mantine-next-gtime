// Accordion component: https://mantine.dev/core/accordion/
import {
  ThemeIcon,
  Accordion,
  AccordionProps,
  createStyles,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => ({
  icon: { ref: getRef('icon') },

  control: {
    ref: getRef('control'),
    border: 0,
    opacity: 0.6,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },

  item: {
    borderBottom: 0,
    overflow: 'hidden',
    transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
    border: '1px solid transparent',
    borderRadius: theme.radius.sm,
  },

  itemOpened: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[3],

    [`& .${getRef('control')}`]: {
      opacity: 1,
    },

    [`& .${getRef('icon')}`]: {
      transform: 'rotate(45deg)',
    },
  },

  content: {
    paddingLeft: 0,
  },
}));

function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return (
    <Accordion classNames={classes} icon={<Plus size={16} />} {...props} />
  );
}

function MyAccordion() {
  return (
    <StyledAccordion initialItem={0}>
      <Accordion.Item
        label="Customization"
        icon={
          <ThemeIcon color="violet" variant="light">
            <Plus size={14} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your
        design needs
      </Accordion.Item>

      <Accordion.Item label="Flexibility">
        Configure components appearance and behavior with vast amount of
        settings or overwrite any part of component styles
      </Accordion.Item>

      <Accordion.Item label="No annoying focus ring">
        With new :focus-visible pseudo-class focus ring appears only when user
        navigates with keyboard
      </Accordion.Item>
    </StyledAccordion>
  );
}

export default MyAccordion;
