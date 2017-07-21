const Input = novi.ui.input;
const React = novi.react.React;
const Component = novi.react.Component;

export default class Body extends Component{
    constructor(props){
        super(props);
        let inputs = props.element.querySelectorAll("input[type='email']");
        let input = this._getInput(inputs);
        let action = novi.element.getAttribute(props.element, 'action');
        let name = novi.element.getAttribute(input, 'name');
        this.state = {
            action,
            name,
            input,
            initActionValue: action,
            initInputName: name,
            element: props.element
        };

        this._handleActionChange = this._handleActionChange.bind(this);
    }

    render(){
        return (
            <div className="campaign-monitor-wrap" style={{"padding": "0 12px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "height": "100%", "color": "#6E778A"}}>
                <p className="novi-label" style={{"marginTop": "0"}}>
                    CampaignMonitor Signup Url:
                </p>
                <Input onChange={this._handleActionChange} value={this.state.action}/>
                <p className="novi-label" style={{"marginTop": "20"}}>
                    CampaignMonitor Input Name:
                </p>
                <Input onChange={this._handleNameChange} value={this.state.name}/>
            </div>

        )
    }

    _getInput(data){
        let i = data.length - 1;
        while (i >= 0){
            if (novi.element.hasStaticReference(data[i])) return data[i];
            i-=i;
        }
        return null;
    }

    _handleActionChange(e){
        let value = e.target.value;
        this.setState({
            action : value
        });
    }

    _handleNameChange(e){
        let value = e.target.value;
        this.setState({
            name : value
        });
    }
}