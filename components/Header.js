import {
    Link,
    HStack,
    Text,
    VStack,
    Flex,
    Image,
    Tooltip,
} from '@chakra-ui/react';

export default function Header({ quizType, setQuizType }) {
    return (
        <Flex border="1px solid #999899" borderLeft="none" alignItems="center">
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
            </HStack>

            <Link w="10" ml="auto" mr="4">
                <Tooltip label="Score" aria-label="See your score">
                    <Image src="/assets/score.svg" />
                </Tooltip>
            </Link>
        </Flex>
    );
}
