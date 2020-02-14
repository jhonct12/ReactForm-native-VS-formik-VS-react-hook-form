import React, {Component, Fragment, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {createArrayWithNumbers} from "./Utils";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/es/Button";

function PaintDataTable({paintTT}){
    const [textField, setTextField] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [selectedField2, setSelectedField2] = useState('');

    console.log('Native ReactJs Function');

    return (
        <form>
            <div>
            <TextField
                label="TextField"
                onChange={({currentTarget: {value}})=> {
                    setTextField(value)
                }}
                value={textField}
            />
            <Fragment>
                <FormControl >
                    <InputLabel htmlFor="selectedField-native-simple">sltd1</InputLabel>
                    <Select
                        value={selectedField}
                        native
                        inputProps={{
                            name: 'selectedField',
                            id: 'selectedField-native-simple',
                        }}
                        onChange={({target: {value}})=> {
                            setSelectedField(value)
                        }}
                    >
                        <option value="" key="0" />
                        {
                            createArrayWithNumbers(10000).map((key, index) => {
                                return <option value={key} key={index+1}>{key}</option>
                            })
                        }
                    </Select>
                </FormControl>
            </Fragment>
            <Fragment>
                <FormControl >
                    <InputLabel htmlFor="selectedField2-native-simple">sltd2</InputLabel>
                    <Select
                        value={selectedField2}
                        native
                        inputProps={{
                            name: 'selectedField2',
                            id: 'selectedField2-native-simple',
                        }}
                        onChange={({target: {value}})=> {
                            setSelectedField2(value)
                        }}
                    >
                        <option value="" key="a0"/>
                        {
                            createArrayWithNumbers(10000).map((key, index) => {
                                return <option value={key} key={`a${index+1}`}>{key}</option>
                            })
                        }
                    </Select>
                </FormControl>
            </Fragment>
            </div>
            <div className="col-sm-12">
            <Button onClick={()=> paintTT(textField, selectedField, selectedField2)} style={{background: "blue"}}>Verificar</Button>
            </div>
        </form>
    )
}

class PureNativeReactJs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            textField: '',
            selectedField: '',
            selectedField2: ''
        }
    }


    render() {
        console.log('Native ReactJs Class', this.state)
        return (
            <Fragment>
                <PaintDataTable paintTT={(textField, selectedField, selectedField2)=> {
                    this.setState({textField, selectedField, selectedField2})
                }}/>
                </Fragment>
        );
    }
}

export default PureNativeReactJs;