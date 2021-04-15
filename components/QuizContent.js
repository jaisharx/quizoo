import {
    Flex,
    Button,
    Radio,
    Text,
    VStack,
    RadioGroup,
    HStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import questions from 'quizzes/html.json';

const max = questions.length;
export default function QuizContent() {
    const [questionCount, setQuestionCount] = useState(0);
    const [radioValue, setRadioValue] = useState('0');

    return (
        <Flex
            minH="calc(100vh - 16px - 4rem)"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            mx="80"
            transform="translateY(-3rem)"
        >
            <Text fontSize="4xl">{`${questionCount + 1}. ${questions[questionCount].title}`}</Text>
            <RadioGroup my="4" onChange={setRadioValue} value={radioValue}>
                <VStack alignItems="flex-start">
                    {questions[questionCount].options.map((option, idx) => (
                        <Radio size="lg" value={idx.toString()} key={idx}>{option}</Radio>
                    ))}
                </VStack>
            </RadioGroup>
            <HStack>
                <Button
                    mr="auto"
                    variant="outline"
                    disabled={questionCount === 0 ? true : false}
                    onClick={() => setQuestionCount(questionCount - 1)}
                    >
                    Back
                </Button>
                <Button
                    variant="outline"
                    disabled={questionCount === (questions.length - 1) ? true : false}
                    onClick={() => setQuestionCount(questionCount + 1)}
                >
                    Next
                </Button>
            </HStack>
        </Flex>
    );
}
