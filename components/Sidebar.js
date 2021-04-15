import { Flex, Link } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import styled from '@emotion/styled';

const GithubLogo = styled(FiGithub)`
    font-size: 32px;
    transition: transform .2s ease;

    &:hover {
        fill: black;
        transform: scale(1.2);
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
            <Link href="https://github.com/jaisharx/quizoo/" isExternal>
                <GithubLogo />
            </Link>
        </Flex>
    );
}
