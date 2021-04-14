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

    return (
        <Flex
            minH="calc(100vh - 16px - 4rem)"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            mx="80"
            transform="translateY(-3rem)"
        >
            <Text fontSize="4xl">{questions[questionCount].title}</Text>
            <RadioGroup my="4">
                <VStack alignItems="flex-start">
                    {questions[questionCount].options.map((option) => (
                        <Radio size="lg">{option}</Radio>
                    ))}
                </VStack>
            </RadioGroup>
            <HStack>
                <Button
                    mr="auto"
                    variant="outline"
                    onClick={() => setQuestionCount(questionCount - 1)}
                >
                    Back
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setQuestionCount(questionCount + 1)}
                >
                    Next
                </Button>
            </HStack>
        </Flex>
    );
}
