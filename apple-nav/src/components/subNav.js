import React from 'react';
import SubMenuItem from './subMenuItem';

import { macMenuItems, ipadMenuItems, iphoneMenuItems, watchMenuItems} from '../data';

const subNav = (props) => {
    const myLocation = props.location.pathname.split('/')[1];
    
    function subItems(props) {
        switch(props) {
            case "Mac": return macMenuItems;
            case "iPad": return ipadMenuItems;
            case "iPhone": return iphoneMenuItems;
            case "Watch": return watchMenuItems;
            default: return macMenuItems;
        }
    }

    return (
        <div className="subNavContainer">
            <div className="subNav">
                <ul>
                    {subItems(myLocation).map(item => {
                        return (<SubMenuItem key={item.id} label={item.label} icon={item.icon} size={item.size} />)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default subNav;