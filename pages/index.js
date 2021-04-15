import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import QuizContent from 'components/QuizContent';
import Logo from 'components/Logo';
import NextHead from 'components/NextHead';

import { Box, Grid } from '@chakra-ui/react';
import { useState } from 'react';

const DEFAULT_QUIZ = 'HTML';
export default function Home() {
    const [quizType, setQuizType] = useState(DEFAULT_QUIZ);

    return (
        <>
            <NextHead>
                <title>Quizoo | A json based quiz client built with react & next, 🤫</title>
            </NextHead>

            <Box p="2">
                <Grid templateColumns="3.8rem 1fr" templateRows="3.8rem 1fr">
                    <Logo />
                    <Header quizType={quizType} setQuizType={setQuizType} />
                    <Sidebar />
                    <QuizContent quizType={quizType} />
                </Grid>
            </Box>
        </>
    );
}
