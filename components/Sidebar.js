import { Flex, Link, Tooltip } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import styled from '@emotion/styled';

const GithubLogo = styled(FiGithub)`
    font-size: 32px;

    &:hover {
        fill: black;
    } 
`;

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
            <Tooltip label="Github" aria-label="Github Link">
                <Link href="https://github.com/jaisharx/quizoo/" isExternal>
                    <GithubLogo />
                </Link>
            </Tooltip>
        </Flex>
    );
}
