import React from 'react';
import { Platform } from '../../hooks/useGames';
import {
    FaLinux,
    FaAndroid,
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface Props {
    platforms: Platform[];
}
const PlatformList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: JSX.Element } = {
        pc: <FaWindows />,
        linux: <FaLinux />,
        xbox: <FaXbox />,
        playstation: <FaPlaystation />,
        android: <FaAndroid />,
        mac: <FaApple />,
        ios: <MdPhoneIphone />,
        web: <BsGlobe />,
        nintendo: <SiNintendo />,
    };
    return (
        <div className="flex flex-row gap-2 cursor-pointer py-2">
            {platforms.map((platform) => (
                <div className="text-gray-500">{iconMap[platform.slug]}</div>
            ))}
        </div>
    );
};

export default PlatformList;
