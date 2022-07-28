import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Button, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars, BrandTwitter } from 'tabler-icons-react';

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className={styles.container}>
      <Head>
        <title>Mantine Next TS</title>
      </Head>

      <main className={styles.main}>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>

        <Link href="/tabs" passHref>
          <Button component="a">Tabs</Button>
        </Link>

        <Link href="/slider" passHref>
          <Button component="a">Slider</Button>
        </Link>

        <Link href="/calendar" passHref>
          <Button component="a">Calendar</Button>
        </Link>

        <Link href="/accordion" passHref>
          <Button component="a">Accordion</Button>
        </Link>

        <Link href="/api/hello" passHref>
          <Button component="a">Api</Button>
        </Link>

        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/deovenk"
          leftIcon={<BrandTwitter size={18} />}
          styles={(theme) => ({
            root: {
              backgroundColor: '#00acee',
              border: 0,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,

              '&:hover': {
                backgroundColor: theme.fn.darken('#00acee', 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          Follow on Twitter
        </Button>
      </main>
    </div>
  );
};

export default Home;
