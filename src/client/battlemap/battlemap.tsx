import * as React from "react";
import * as ReactDOM from "react-dom";
import Map from "../resources/map/map";
import MapConfig from "../resources/map/map.config";

interface BattlemapState {

}

class BattleMap extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Map BackgroundColor='red' />
            </div>
        );
    }
}

ReactDOM.render(    
    React.createElement(BattleMap),
    document.getElementById("reactApp")
);