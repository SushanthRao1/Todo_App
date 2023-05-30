import react from 'react';


class EveneChange extends react.Component {
    state = {
        no: undefined,
    }

    ChangeNumber = (event) => {
        console.log(event.target.value)
        this.setState({ no: event.target.value })
    }


    showevenorodd = () => {
        if (this.state.no % 2 === 0) {
            return 'Even';
        }
        else {
            return 'Odd'
        }
    }

    render() {
        console.log('checking rencder' + this.state.no)
        return (<div>This is Event Handler test code <br></br>
            {console.log('checking return' + this.state.no)}
            <input type='number' onChange={this.ChangeNumber} onBlur={this.showevenorodd}></input >
            {this.showevenorodd()}
        </div>)
    }
}


export default EveneChange;