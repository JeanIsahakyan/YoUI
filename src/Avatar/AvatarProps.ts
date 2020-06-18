import {Variant} from './BasicAvatarView';
import {ReactNode} from 'react';

export interface AvatarProps {
    variant?: Variant,
    size?: number,
    src?: string | null,
    id?: number | string,
    children?: string | number | ReactNode,
    disableGradient?: boolean,
    disableColors?: boolean
}
