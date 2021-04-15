import { Flex, Image } from '@chakra-ui/react';

export default function Logo() {
    return (
        <Flex
            p="3"
            border="1px solid #999899"
            justifyContent="center"
            alignItems="center"
        >
            <Image src="/icon.png" alt="logo" />
        </Flex>
    );
}
