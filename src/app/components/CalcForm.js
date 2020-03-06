import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
const math = require('mathjs');

class CalcForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            result: 0,
            calc_expr: '',
          };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        // this.props.handleSubmit(this.state);
        // this.setState(this.initialState);
        let result = math.evaluate(this.state.calc_expr);
        let finalResult;
    
        if (this.state.calc_expr === '') {
          result = 0;
        }
    
        // trim result if too long
        if (result.toString().length > 11) {
          finalResult = result.toString().slice(0, 11);
        } else finalResult = result;
    
        this.setState({ result: finalResult});
    }

    render() {
        const { result, calc_expr } = this.state; 

        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group controlId="result">
                    <Form.Label>Result</Form.Label>
                    <Form.Control 
                        as="input" 
                        type="text"
                        size="lg" 
                        value={result} 
                        readonly="readonly" />
                </Form.Group>
                <Form.Group controlId="calc_expr">
                    <Form.Label>Calculate Expression</Form.Label>
                    <input 
                        type="text" 
                        name="calc_expr" 
                        id="calc_expr"
                        value={calc_expr} 
                        autofocus="autofocus"
                        onChange={this.handleChange} />
                </Form.Group>
                <Button type="submit">
                    Evaluate
                </Button>
            </Form>
        );
    }
}

export default CalcForm;
