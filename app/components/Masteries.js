import React from 'react';
import { View, Button } from 'react-native';

export default class Tits extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.props.increaseMaxHealth();
    }

    render() {
        return (
            <View>
                <Button 
                    title="HP ++" 
                    type="button" 
                    onPress={this.handleClick} 
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button" />
            </View>
        )
    }
}