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
            mx="40"
            pt="40"
        >
            <Text fontSize="4xl" mb="3">
                {questions[questionCount].title}
            </Text>
            <RadioGroup>
                <VStack alignItems="flex-start">
                    {questions[questionCount].options.map((option) => (
                        <Radio size="lg">{option}</Radio>
                    ))}
                </VStack>
            </RadioGroup>
            <Button
                alignSelf="flex-end"
                onClick={() => setQuestionCount(questionCount + 1)}
            >
                Next
            </Button>
        </Flex>
    );
}
