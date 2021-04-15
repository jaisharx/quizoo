import { Flex, Image, Link } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <Flex
            pb="4"
            border="1px solid #999899"
            borderTop="none"
            alignItems="flex-end"
            justifyContent="center"
        >
            <Link href="https://github.com/jaisharx/quizoo/" isExternal>
                <Image src="/assets/github.png" alt="github link icon" w="8" />
            </Link>
        </Flex>
    );
}
