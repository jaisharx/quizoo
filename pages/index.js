import Head from 'next/head';

import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import QuizContent from 'components/QuizContent';
import Logo from 'components/Logo';

export default function Home() {
    return (
        <>
            <Head>
                <title>Quizoo | Instant Quizzes 🤫</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box p="3">
                <Grid templateColumns="3.8rem 1fr" templateRows="3.8rem 1fr">
                    <Logo/>
                    <Header />
                    <Sidebar />
                    <QuizContent />
                </Grid>
            </Box>
        </>
    );
}
