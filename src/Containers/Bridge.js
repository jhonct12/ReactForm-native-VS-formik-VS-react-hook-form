import React, {Component, Fragment} from 'react';
import Paper from "@material-ui/core/es/Paper";
import Divider from "@material-ui/core/es/Divider";
import PureReactHookForm from "./PureReactHookForm";
import PureNativeReactJs from "./PureNativeReactJs";
import PureFormIk from "./PureFormIk";

const paperStyle = {padding: 10, margin:20, textAlign: 'center'};
class Bridge extends Component{
    render() {
        return (
            <Fragment>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <Paper style={paperStyle}>
                                <h3>Pure ReactJs State</h3>
                                <Divider/>
                                <div className="row">
                                <PureNativeReactJs key="1"/>
                                </div>
                            </Paper>
                        </div>
                        <div className="col-sm-12">
                            <Paper style={paperStyle}>
                                <h3>Form With Formik Component</h3>
                                <Divider/>
                                <div className="row">
                                <PureFormIk key="2"/>
                                </div>
                            </Paper>
                        </div>
                        <div className="col-sm-12">
                            <Paper style={paperStyle}>
                                <h3>Form With React-Hook-Form</h3>
                                <Divider/>
                                <div className="col-sm-12">
                                <PureReactHookForm key="2"/>
                        </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Bridge;