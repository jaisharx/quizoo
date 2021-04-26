import {
    Box,
    Flex,
    Button,
    Radio,
    Text,
    VStack,
    RadioGroup,
    HStack,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import htmlQuestions from 'quizzes/html.json';
import cssQuestions from 'quizzes/css.json';
import jsQuestions from 'quizzes/javascript.json';

export default function QuizContent({ quizType }) {
    const [questionCount, setQuestionCount] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState(htmlQuestions);
    const [radioValue, setRadioValue] = useState('-1');

    useEffect(() => {
        if (quizType === 'HTML') setQuizQuestions(htmlQuestions);
        if (quizType === 'CSS') setQuizQuestions(cssQuestions);
        if (quizType === 'JS') setQuizQuestions(jsQuestions);

        setQuestionCount(0); // resetting
    }, [quizType]);

    const buttonHandler = (type) => {
        if (type === 'back') setQuestionCount(questionCount - 1);
        if (type === 'next') setQuestionCount(questionCount + 1);

        setRadioValue('-1');
    };

    return (
        <Flex
            mx="80"
            minH="calc(100vh - 16px - 4rem)"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Box minH="40vh">
                <Text fontSize="4xl" mb="4">{`${questionCount + 1}. ${
                    quizQuestions[questionCount].title
                }`}</Text>
                <RadioGroup onChange={setRadioValue} value={radioValue}>
                    <VStack alignItems="flex-start">
                        {quizQuestions[questionCount].options.map(
                            (option, idx) => (
                                <Radio
                                    size="lg"
                                    value={idx.toString()}
                                    key={idx}
                                    colorScheme="gray"
                                    outlineColor="gray"
                                >
                                    {option}
                                </Radio>
                            )
                        )}
                    </VStack>
                </RadioGroup>
            </Box>
            <HStack>
                <Button
                    mr="auto"
                    variant="outline"
                    disabled={questionCount === 0 ? true : false}
                    onClick={() => buttonHandler('back')}
                >
                    Back
                </Button>
                <Button
                    variant="outline"
                    disabled={
                        questionCount === quizQuestions.length - 1
                            ? true
                            : false
                    }
                    onClick={() => buttonHandler('next')}
                >
                    Next
                </Button>
            </HStack>
        </Flex>
    );
}
