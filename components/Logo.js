import { Flex, Image } from '@chakra-ui/react';

export default function Logo() {
    return (
        <Flex
            p="2"
            border="1px solid black"
            justifyContent="center"
            alignItems="center"
        >
            <Image src="/logo.svg" alt="logo" />
        </Flex>
    );
}
