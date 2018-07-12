import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Tits extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
      this.props.crawl();
  }
  render() {
      return (
          <View>
              <Text>Zone: {this.props.zone}</Text>
              <Text>Level: {this.props.playerLevel}</Text>
              <Text>Health: {this.props.health}</Text>
              <Text>Exp: {this.props.exp} / {Math.round(this.props.maxExp)}</Text>
              <Text>Skill points: {this.props.skillPoints}</Text>
              <Button 
                disabled={this.props.crawling} 
                onPress={this.handleClick} 
                title="Crawl"
                color="#841584"
                accessibilityLabel="Learn more about this purple button" />
          </View>
      );
  }
}