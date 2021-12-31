import React, { useCallback } from "react";
import ProtoTypes from "prop-types";
import { Button } from "antd";

const Admin = ({ history }) => {
    /**
     * 跳转到 toHomePage 界面
     */
    const toHomePage = useCallback(() => {
        history.push("/");
    }, [history]);

    return (
        <div>
            <h2>
                当前是 admin 页面，可以选择跳转到 home 界面
            </h2>
            <Button
                style={{ marginLeft: 30 }}
                type="primary"
                onClick={toHomePage}
            >
                home
            </Button>
        </div>
    );
};

Admin.propTypes = {
    history: ProtoTypes.shape({
        push: ProtoTypes.func.isRequired,
    }).isRequired,
};

export default Admin;
