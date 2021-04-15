import { Flex, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MovingLogo = motion(Image);

export default function Logo() {
    return (
        <Flex
            p="3"
            border="1px solid #999899"
            borderRightColor="black"
            borderBottomColor="black"
            justifyContent="center"
            alignItems="center"
            borderLeft="none"
            borderTop="none"
        >
            <Link src="/">
                <MovingLogo
                    whileHover={{
                        rotate: [0, -12, 12],
                    }}
                    src="/icon.png"
                    alt="logo"
                />
            </Link>
        </Flex>
    );
}
