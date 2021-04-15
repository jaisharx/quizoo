import { Flex, Image, Link, Tooltip } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <Flex
            pb="2"
            border="1px solid #999899"
            borderTop="none"
            borderRightColor="black"
            alignItems="flex-end"
            justifyContent="center"

            borderBottom="none"
            borderLeft="none"
        >
            <Link href="https://github.com/jaisharx/quizoo/" isExternal>
                <Tooltip label="Github" aria-label="Github Link">
                    <Image
                        src="/assets/github.png"
                        alt="github link icon"
                        w="8"
                    />
                </Tooltip>
            </Link>
        </Flex>
    );
}
