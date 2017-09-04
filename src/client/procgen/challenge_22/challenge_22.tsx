import * as React from "react";
import * as ReactDOM from "react-dom";

interface Challenge_22State {

}

class Challenge_22 extends React.Component<void, Challenge_22State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Procedural Generator Challenge #22 <small>Virus, Bacteria, Fungi</small></h3>
                </div>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render(
    <Challenge_22 />,
    document.getElementById("Challenge22")
);