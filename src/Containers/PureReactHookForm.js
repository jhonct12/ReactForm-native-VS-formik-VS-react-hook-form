import React, {Component, Fragment, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {createArrayWithNumbers} from "./Utils";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function PaintDataTable({paintTT}){

    const { register, setValue, handleSubmit} = useForm();

    const onSubmit = ({textField, selectedField, selectedField2 }) => {
        paintTT(textField, selectedField, selectedField2)
    };


    useEffect(() => {
        register({ name: "textField" });
        register({ name: "selectedField" });
        register({ name: "selectedField2" });
    }, [register]);

    const handleChange = (e, name) => {
        setValue(name, e);
    };

    console.log('React Hook Form Class');


    return(
        <form>
            <div className="col-sm-12">
            <TextField
                label="TextField"
                name="textField"
                onChange={({currentTarget: {value}})=> {
                    handleChange(value, 'textField');
                }}
            />
            <Fragment>
                <FormControl >
                    <InputLabel htmlFor="selectedField-native-simple">sltd1</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'selectedField',
                            id: 'selectedField-native-simple',
                        }}
                        onChange={({target: {value}})=> {
                            handleChange(value, 'selectedField');
                        }}
                    >
                        <option value="" key="d"/>
                        {
                            createArrayWithNumbers(10000).map((key, index) => {
                                return <option value={key} key={`d${index+1}`}>{key}</option>
                            })
                        }
                    </Select>
                </FormControl>
            </Fragment>
            <Fragment>
                <FormControl >
                    <InputLabel htmlFor="selectedField2-native-simple">sltd2</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'selectedField2',
                            id: 'selectedField2-native-simple',
                        }}
                        onChange={({target: {value}})=> {
                            handleChange(value, 'selectedField2');
                        }}
                    >
                        <option value="" key="e"/>
                        {
                            createArrayWithNumbers(10000).map((key, index) => {
                                return <option value={key} key={`e${index}`}>{key}</option>
                            })
                        }
                    </Select>
                </FormControl>
            </Fragment>
            </div>
            <div className="col-sm-12">
            <Button onClick={handleSubmit(onSubmit)} style={{background: "blue"}}>Verificar</Button>
            </div>
        </form>
    );
}

class PureReactHookForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            textField: '',
            selectedField: '',
            selectedField2: ''
        }
    }

    render() {
        console.log('React Hook Form Class', this.state)
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

export default PureReactHookForm;