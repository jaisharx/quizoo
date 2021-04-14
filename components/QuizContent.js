import {
    Flex,
    Button,
    Radio,
    Text,
    VStack,
    RadioGroup,
} from '@chakra-ui/react';
import { useState } from 'react';

import questions from 'quizzes/html.json';

export default function QuizContent() {
    const [questionCount, setQuestionCount] = useState(0);

    return (
        <Flex
            minH="calc(100vh - 16px - 4rem)"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            mx="80"
            transform="translateY(-1rem)"
        >
            <Text fontSize="4xl">
                {questions[questionCount].title}
            </Text>
            <RadioGroup my="3">
                <VStack alignItems="flex-start">
                    {questions[questionCount].options.map((option) => (
                        <Radio size="lg">{option}</Radio>
                    ))}
                </VStack>
            </RadioGroup>
            <Button
                variant="outline"
                onClick={() => setQuestionCount(questionCount + 1)}
            >
                Next
            </Button>
        </Flex>
    );
}
