import { Box, HStack, Text, VStack, Flex } from '@chakra-ui/react';

export default function Header() {
    return (
        <Flex border="1px solid black" borderLeft="none" alignItems="center">
            <HStack ml="12" spacing="12">
                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small">01</Text>
                    <Text fontSize="medium" fontWeight="medium">
                        HTML
                    </Text>
                </VStack>

                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small">02</Text>
                    <Text fontSize="medium" fontWeight="medium">
                        CSS
                    </Text>
                </VStack>

                <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="small">03</Text>
                    <Text fontSize="medium" fontWeight="medium">
                        Javascript
                    </Text>
                </VStack>
            </HStack>
        </Flex>
    );
}
