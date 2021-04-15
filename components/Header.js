import { Link, HStack, Text, VStack, Flex } from '@chakra-ui/react';

export default function Header({ setQuizType }) {
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
                        fontWeight="medium"
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
                        fontWeight="medium"
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
                        fontWeight="medium"
                        onClick={() => setQuizType('JS')}
                    >
                        Javascript
                    </Text>
                </VStack>
            </HStack>
        </Flex>
    );
}
