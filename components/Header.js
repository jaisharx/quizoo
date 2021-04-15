import { Link, HStack, Text, VStack, Flex } from '@chakra-ui/react';

import { GrScorecard } from 'react-icons/gr';
import styled from '@emotion/styled';

const ScoreIcon = styled(GrScorecard)`
    font-size: 26px;
`;

export default function Header({ quizType, setQuizType }) {
    return (
        <Flex
            alignItems="center"
            borderBottom="1px solid #999899"
        >
            <HStack ml="12" spacing="12">
                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small" ml="1px">
                        01
                    </Text>
                    <Text
                        as={Link}
                        fontSize="medium"
                        fontWeight={quizType === 'HTML' ? 'medium' : ''}
                        onClick={() => setQuizType('HTML')}
                    >
                        HTML
                    </Text>
                </VStack>

                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small" ml="1px">
                        02
                    </Text>
                    <Text
                        as={Link}
                        fontSize="medium"
                        fontWeight={quizType === 'CSS' ? 'medium' : ''}
                        onClick={() => setQuizType('CSS')}
                    >
                        CSS
                    </Text>
                </VStack>

                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small" ml="1px">
                        03
                    </Text>
                    <Text
                        as={Link}
                        fontSize="medium"
                        fontWeight={quizType === 'JS' ? 'medium' : ''}
                        onClick={() => setQuizType('JS')}
                    >
                        Javascript
                    </Text>
                </VStack>
                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small" ml="1px">
                        04
                    </Text>
                    <Text
                        as={Link}
                        fontSize="medium"
                        fontWeight={quizType === 'REACT' ? 'medium' : ''}
                        onClick={() => setQuizType('REACT')}
                    >
                        REACT
                    </Text>
                </VStack>
            </HStack>

            <Link w="10" ml="auto" mr="4">
                <ScoreIcon />
            </Link>
        </Flex>
    );
}
