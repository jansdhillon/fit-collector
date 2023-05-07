
import React, {ReactNode} from "react";

type layoutProps = {
    children: ReactNode;
}

const Layout: React.FC<layoutProps> = ({children}) => {
    return (
        <>
        {children}
        </>
    );
};

export default Layout;