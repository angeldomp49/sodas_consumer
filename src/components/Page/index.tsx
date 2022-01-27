import React from "react";

export const Page = (props:{ children: React.ReactChild | React.ReactChild[] }) => {

    return (<>
        {props.children}
    </>);
};

export default Page;