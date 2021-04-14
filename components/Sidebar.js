import { Flex, Image } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <Flex
            pb="4"
            border="1px solid black"
            borderTop="none"
            alignItems="flex-end"
            justifyContent="center"
        >
            <Image src="/assets/github.svg" alt="github link icon" w="8" />
        </Flex>
    );
}
