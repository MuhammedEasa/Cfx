import Image, { ImageProps } from "next/image";
import { ComponentProps } from "react";

type IconProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>;

const Icons = {
    icon: (props: IconProps) => (
        <Image
            src="/icons/cfx_logo.png"
            alt="CFX Prime Logo"
            width={40}
            height={40}
            className="object-contain"
            {...props}
        />
    ),
    logo: (props: IconProps) => (
        <Image
            src="/icons/cfx_logo.png"
            alt="CFX Prime Logo"
            width={180}
            height={40}
            className="object-contain"
            {...props}
        />
    ),
};

export default Icons;