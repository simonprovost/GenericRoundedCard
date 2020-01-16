import React, {Component} from "react";
import {Card, CardItem, Text, Body, Left, Right, View, Root, Thumbnail} from "native-base";
import {AppLoading} from "expo";
import {StyleSheet} from "react-native";
import * as Font from 'expo-font';

export class GenericRoundedCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require("./../assets/fonts/Roboto.ttf"),
			Roboto_medium: require("./../assets/fonts/Roboto_medium.ttf"),
			GenericRoundedCardNormal: require("./../assets/fonts/SF-UI-Text-Regular.otf"),
			GenericRoundedCardLight: require("./../assets/fonts/SF-UI-Display-Ultralight.otf"),
			GenericRoundedCardBold: require("./../assets/fonts/SF-UI-Display-Bold.otf")
		});
		this.setState({
			loading: false,
		});
	}

	render() {
		if (this.state.loading) {
			return (
				<Root>
					<AppLoading />
				</Root>
			);
		}

		if (this.props.backgroundColorCard === undefined) {
			return (
				<View>
					<Text>ERROR Background not found</Text>
				</View>
			)
		}

		let headerLeftContent =
			this.props.thumbnailTopLeftCorner !== undefined && this.props.formatPictureTopLeftCorner === 'square'
				?
				<Left style={{flex: 0, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.props.thumbnailTopLeftCorner}} />
				</Left>
				:
				this.props.thumbnailTopLeftCorner !== undefined && this.props.formatPictureTopLeftCorner !== 'square'
					?
					<Left style={{flex: 0, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.props.thumbnailTopLeftCorner}} />
					</Left>
					:
					this.props.contentTopLeftCornerText !== undefined
						?
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontSize: this.props.sizeTitleTopLeftCorner, fontFamily: this.props.fontTopLeftCornerTitle, color: this.props.colorTopLeftCornerTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.props.contentTopLeftCornerTitle}</Text>
							<Text note style={{fontSize: this.props.sizeTextTopLeftCorner, fontFamily: this.props.fontTopLeftCornerText, color: this.props.colorTopLeftCornerText, textAlign: 'left', alignSelf: 'stretch'}}>{this.props.contentTopLeftCornerText}</Text>
						</Left>
						:
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontSize: this.props.sizeTitleTopLeftCorner, fontFamily: this.props.fontTopLeftCornerTitle, color: this.props.colorTopLeftCornerTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.props.contentTopLeftCornerTitle}</Text>
						</Left> ;

		let headerRightContent =
			this.props.thumbnailTopRightCorner !== undefined && this.props.formatPictureTopRightCorner === 'square'
				?
				<Right style={{flex: 1, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.props.thumbnailTopRightCorner}} />
				</Right>
				:
				this.props.thumbnailTopRightCorner !== undefined && this.props.formatPictureTopRightCorner !== 'square'
					?
					<Right style={{flex: 1, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.props.thumbnailTopRightCorner}} />
					</Right>
					:
					this.props.contentTopRightCornerText !== undefined
						?
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.props.fontTopRightCornerTitle, color: this.props.colorTopRightCornerTitle, textAlign: 'right', alignSelf: 'stretch', fontSize: this.props.sizeTitleTopRightCorner}}>{this.props.contentTopRightCornerTitle}</Text>
							<Text note style={{fontFamily: this.props.fontTopRightCornerText, color: this.props.colorTopRightCornerText, textAlign: 'right', alignSelf: 'stretch', fontSize: this.props.sizeTextTopRightCorner}}>{this.props.contentTopRightCornerText}</Text>
						</Right>
						:
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.props.fontTopRightCornerTitle, color: this.props.colorTopRightCornerTitle, textAlign: 'right', alignSelf: 'stretch', fontSize: this.props.sizeTitleTopRightCorner}}>{this.props.contentTopRightCornerTitle}</Text>
							<Text note style={{fontFamily: this.props.fontTopRightCornerText, color: this.props.colorTopRightCornerText, textAlign: 'right', alignSelf: 'stretch', fontSize: this.props.sizeTextTopRightCorner}}>{this.props.contentTopRightCornerText}</Text>
						</Right>;

		let BottomLeftCornerContent =
			this.props.thumbnailBottomLeftCorner !== undefined && this.props.formatPictureBottomLeft === 'square'
				?
				<Left style={{flex: 0, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.props.thumbnailBottomLeftCorner}} />
				</Left>
				:
				this.props.thumbnailBottomLeftCorner !== undefined && this.props.formatPictureBottomLeft !== 'square'
					?
					<Left style={{flex: 0, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.props.thumbnailBottomLeftCorner}} />
					</Left>
					:
					this.props.contentBottomLeftText !== undefined
						?
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontFamily: this.props.fontBottomLeftTitle, color: this.props.colorBottomLeftTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.props.contentBottomLeftTitle}</Text>
							<Text note style={{fontFamily: this.props.fontBottomLeftText, color: this.props.colorBottomLeftText, textAlign: 'left', alignSelf: 'stretch'}}>{this.props.contentBottomLeftText}</Text>
						</Left>
						:
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontFamily: this.props.fontBottomLeftTitle, color: this.props.colorBottomLeftTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.props.contentBottomLeftTitle}</Text>
						</Left>;

		let BottomRightCornerContent =
			this.props.thumbnailBottomRightCorner !== undefined && this.props.formatPictureBottomRight === 'square'
				?
				<Right style={{flex: 1, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.props.thumbnailBottomRightCorner}} />
				</Right>
				:
				this.props.thumbnailBottomRightCorner !== undefined && this.props.formatPictureBottomRight !== 'square'
					?
					<Right style={{flex: 1, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.props.thumbnailBottomRightCorner}} />
					</Right>
					:
					this.props.contentBottomRightText !== undefined
						?
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.props.fontBottomRightTitle, color: this.props.colorBottomRightTitle, textAlign: 'right', alignSelf: 'stretch'}}>{this.props.contentBottomRightTitle}</Text>
							<Text note style={{fontFamily: this.props.fontBottomRightText, color: this.props.colorBottomRightText, textAlign: 'right', alignSelf: 'stretch'}}>{this.props.contentBottomRightText}</Text>
						</Right>
						:
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.props.fontBottomRightTitle, color: this.props.colorBottomRightTitle, textAlign: 'right', alignSelf: 'stretch'}}>{this.props.contentBottomRightTitle}</Text>
							<Text note style={{fontFamily: this.props.fontBottomRightText, color: this.props.colorBottomRightText, textAlign: 'right', alignSelf: 'stretch'}}>{this.props.contentBottomRightText}</Text>
						</Right>;

		let emptySpace =
			<CardItem style={{borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: this.props.backgroundColorCard }}>
				<Body>
				</Body>
			</CardItem>;

		return (
			<Card style={{borderRadius: 9}}>
				<CardItem header style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 9, borderTopRightRadius: 9,  backgroundColor: this.props.backgroundColorCard, flexDirection: "row"}}>
					{headerLeftContent}
					{headerRightContent}
				</CardItem>
				{emptySpace}
				{emptySpace}
				{emptySpace}
				{emptySpace}
				<CardItem footer style={{borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: this.props.backgroundColorCard }}>
					{BottomLeftCornerContent}
					{BottomRightCornerContent}
				</CardItem>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});