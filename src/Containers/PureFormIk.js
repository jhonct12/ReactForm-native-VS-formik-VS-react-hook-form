import React, {Component, Fragment} from 'react';
import {createArrayWithNumbers} from "./Utils";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";


function PaintDataTable({paintTT}){

    const onSubmit = ({textField, selectedField, selectedField2})=> {
        paintTT(textField, selectedField, selectedField2)
    };

    console.log('React FormIk Class');


    return (
        <Fragment>
        <Formik
            initialValues={{
                textField: "",
                selectedField: "",
                selectedField2: ""
            }}
            onSubmit={onSubmit}
        >
            {({ errors, touched, setFieldValue, values }) => {
                return (
                    <Form>
                        <div className="col-sm-12">
                        <Field name="textField">
                            {({
                                  field
                              }) => (
                                <TextField {...field}
                                           label="TextField"
                                           onChange={({currentTarget: {value}})=> {
                                               setFieldValue('textField', value);
                                           }}/>
                            )}
                        </Field>

                        <Field name="selectedField">
                            {({
                                  field
                              }) => (
                                <Fragment>
                                    <FormControl >
                                        <InputLabel htmlFor="selectedField-native-simple">sltd1</InputLabel>
                                        <Select
                                            {...field}
                                            native
                                            inputProps={{
                                                name: 'selectedField',
                                                id: 'selectedField-native-simple',
                                            }}
                                            onChange={({currentTarget: {value}})=> {
                                                setFieldValue('selectedField', value);
                                            }}
                                        >
                                            <option value="" key="b"/>
                                            {
                                                createArrayWithNumbers(1000).map((key, index) => {
                                                    return <option value={key} key={`b${index+1}`}>{key}</option>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Fragment>
                            )}
                        </Field>

                        <Field name="selectedField2">
                            {({
                                  field
                              }) => (
                                <Fragment>
                                    <FormControl >
                                        <InputLabel htmlFor="selectedField2-native-simple">sltd2</InputLabel>
                                        <Select
                                            {...field}
                                            native
                                            inputProps={{
                                                name: 'selectedField2',
                                                id: 'selectedField2-native-simple',
                                            }}
                                            onChange={({currentTarget: {value}})=> {
                                                setFieldValue('selectedField2', value);
                                            }}
                                        >
                                            <option value="" key="c"/>
                                            {
                                                createArrayWithNumbers(10000).map((key, index) => {
                                                    return <option value={key} key={`c${index+1}`}>{key}</option>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Fragment>
                            )}
                        </Field>
                        </div>
                        <div className="col-sm-12">
                        <Button onClick={()=> onSubmit(values)} style={{background: "blue"}}>Verificar</Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
        </Fragment>
    );
}

class PureFormIk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textField: '',
            selectedField: '',
            selectedField2: ''
        }
    }

    render() {
        console.log('React FomrIk', this.state);
        return (
            <Fragment>
                <PaintDataTable
                    paintTT={(textField, selectedField, selectedField2)=> {
                        this.setState({textField, selectedField, selectedField2})
                    }}
                />
            </Fragment>
        );
    }

}

export default PureFormIk;