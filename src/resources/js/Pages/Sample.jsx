import { useEffect } from "react";

const Sample = () => {
    useEffect(() => {
        console.log("sample");
        return () => {
            console.log("down");
        };
    }, []);
    return <div>サンプルです</div>;
};
export default Sample;
