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
			backgroundColorCard: this.props.backgroundColorCard,

			thumbnailTopLeftCorner: this.props.thumbnailTopLeftCorner,
			formatPictureTopLeftCorner: this.props.formatPictureTopLeftCorner,
			fontTopLeftCornerTitle: this.props.fontTopLeftCornerTitle,
			fontTopLeftCornerText: this.props.fontTopLeftCornerText,
			contentTopLeftCornerTitle: this.props.contentTopLeftCornerTitle,
			contentTopLeftCornerText: this.props.contentTopLeftCornerText,
			sizeTitleTopLeftCorner: this.props.sizeTitleTopLeftCorner,
			sizeTextTopLeftCorner: this.props.sizeTextTopLeftCorner,
			colorTopLeftCornerTitle: this.props.colorTopLeftCornerTitle,
			colorTopLeftCornerText: this.props.colorTopLeftCornerText,

			thumbnailTopRightCorner: this.props.thumbnailTopRightCorner,
			formatPictureTopRightCorner: this.props.formatPictureTopRightCorner,
			fontTopRightCornerTitle: this.props.fontTopRightCornerTitle,
			fontTopRightCornerText: this.props.fontTopRightCornerText,
			contentTopRightCornerTitle: this.props.contentTopRightCornerTitle,
			contentTopRightCornerText: this.props.contentTopRightCornerText,
			sizeTitleTopRightCorner: this.props.sizeTitleTopRightCorner,
			sizeTextTopRightCorner: this.props.sizeTextTopRightCorner,
			colorTopRightCornerTitle: this.props.colorTopRightCornerTitle,
			colorTopRightCornerText: this.props.colorTopRightCornerText,

			thumbnailBottomLeftCorner: this.props.thumbnailBottomLeftCorner,
			formatPictureBottomLeft: this.props.formatPictureBottomLeft,
			fontBottomLeftTitle: this.props.fontBottomLeftTitle,
			fontBottomLeftText: this.props.fontBottomLeftText,
			contentBottomLeftTitle: this.props.contentBottomLeftTitle,
			contentBottomLeftText: this.props.contentBottomLeftText,
			sizeTitleBottomLeft: this.props.sizeTitleBottomLeft,
			sizeTextBottomLeft: this.props.sizeTextBottomLeft,
			colorBottomLeftTitle: this.props.colorBottomLeftTitle,
			colorBottomLeftText: this.props.colorBottomLeftText,

			thumbnailBottomRightCorner: this.props.thumbnailBottomRightCorner,
			formatPictureBottomRight: this.props.formatPictureBottomRight,
			fontBottomRightTitle: this.props.fontBottomRightTitle,
			fontBottomRightText: this.props.fontBottomRightText,
			contentBottomRightTitle: this.props.contentBottomRightTitle,
			contentBottomRightText: this.props.contentBottomRightText,
			sizeTitleBottomRight: this.props.sizeTitleBottomRight,
			sizeTextBottomRight: this.props.sizeTextBottomRight,
			colorBottomRightTitle: this.props.colorBottomRightTitle,
			colorBottomRightText: this.props.colorBottomRightText,
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

		if (this.state.backgroundColorCard === undefined) {
			return (
				<View>
					<Text>ERROR Background not found</Text>
				</View>
			)
		}

		let headerLeftContent =
			this.state.thumbnailTopLeftCorner !== undefined && this.state.formatPictureTopLeftCorner === 'square'
				?
				<Left style={{flex: 0, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.state.thumbnailTopLeftCorner}} />
				</Left>
				:
				this.state.thumbnailTopLeftCorner !== undefined && this.state.formatPictureTopLeftCorner !== 'square'
					?
					<Left style={{flex: 0, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.state.thumbnailTopLeftCorner}} />
					</Left>
					:
					this.state.contentTopLeftCornerText !== undefined
						?
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontSize: this.state.sizeTitleTopLeftCorner, fontFamily: this.state.fontTopLeftCornerTitle, color: this.state.colorTopLeftCornerTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.state.contentTopLeftCornerTitle}</Text>
							<Text note style={{fontSize: this.state.sizeTextTopLeftCorner, fontFamily: this.state.fontTopLeftCornerText, color: this.state.colorTopLeftCornerText, textAlign: 'left', alignSelf: 'stretch'}}>{this.state.contentTopLeftCornerText}</Text>
						</Left>
						:
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontSize: this.state.sizeTitleTopLeftCorner, fontFamily: this.state.fontTopLeftCornerTitle, color: this.state.colorTopLeftCornerTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.state.contentTopLeftCornerTitle}</Text>
						</Left> ;

		let headerRightContent =
			this.state.thumbnailTopRightCorner !== undefined && this.state.formatPictureTopRightCorner === 'square'
				?
				<Right style={{flex: 1, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.state.thumbnailTopRightCorner}} />
				</Right>
				:
				this.state.thumbnailTopRightCorner !== undefined && this.state.formatPictureTopRightCorner !== 'square'
					?
					<Right style={{flex: 1, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.state.thumbnailTopRightCorner}} />
					</Right>
					:
					this.state.contentTopRightCornerText !== undefined
						?
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.state.fontTopRightCornerTitle, color: this.state.colorTopRightCornerTitle, textAlign: 'right', alignSelf: 'stretch', fontSize: this.state.sizeTitleTopRightCorner}}>{this.state.contentTopRightCornerTitle}</Text>
							<Text note style={{fontFamily: this.state.fontTopRightCornerText, color: this.state.colorTopRightCornerText, textAlign: 'right', alignSelf: 'stretch', fontSize: this.state.sizeTextTopRightCorner}}>{this.state.contentTopRightCornerText}</Text>
						</Right>
						:
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.state.fontTopRightCornerTitle, color: this.state.colorTopRightCornerTitle, textAlign: 'right', alignSelf: 'stretch', fontSize: this.state.sizeTitleTopRightCorner}}>{this.state.contentTopRightCornerTitle}</Text>
							<Text note style={{fontFamily: this.state.fontTopRightCornerText, color: this.state.colorTopRightCornerText, textAlign: 'right', alignSelf: 'stretch', fontSize: this.state.sizeTextTopRightCorner}}>{this.state.contentTopRightCornerText}</Text>
						</Right>;

		let BottomLeftCornerContent =
			this.state.thumbnailBottomLeftCorner !== undefined && this.state.formatPictureBottomLeft === 'square'
				?
				<Left style={{flex: 0, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.state.thumbnailBottomLeftCorner}} />
				</Left>
				:
				this.state.thumbnailBottomLeftCorner !== undefined && this.state.formatPictureBottomLeft !== 'square'
					?
					<Left style={{flex: 0, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.state.thumbnailBottomLeftCorner}} />
					</Left>
					:
					this.state.contentBottomLeftText !== undefined
						?
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontFamily: this.state.fontBottomLeftTitle, color: this.state.colorBottomLeftTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.state.contentBottomLeftTitle}</Text>
							<Text note style={{fontFamily: this.state.fontBottomLeftText, color: this.state.colorBottomLeftText, textAlign: 'left', alignSelf: 'stretch'}}>{this.state.contentBottomLeftText}</Text>
						</Left>
						:
						<Left style={{flex: 0, flexDirection: "column"}}>
							<Text style={{fontFamily: this.state.fontBottomLeftTitle, color: this.state.colorBottomLeftTitle, textAlign: 'left', alignSelf: 'stretch'}}>{this.state.contentBottomLeftTitle}</Text>
						</Left>;

		let BottomRightCornerContent =
			this.state.thumbnailBottomRightCorner !== undefined && this.state.formatPictureBottomRight === 'square'
				?
				<Right style={{flex: 1, flexDirection: "column"}}>
					<Thumbnail square source={{uri: this.state.thumbnailBottomRightCorner}} />
				</Right>
				:
				this.state.thumbnailBottomRightCorner !== undefined && this.state.formatPictureBottomRight !== 'square'
					?
					<Right style={{flex: 1, flexDirection: "column"}}>
						<Thumbnail source={{uri: this.state.thumbnailBottomRightCorner}} />
					</Right>
					:
					this.state.contentBottomRightText !== undefined
						?
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.state.fontBottomRightTitle, color: this.state.colorBottomRightTitle, textAlign: 'right', alignSelf: 'stretch'}}>{this.state.contentBottomRightTitle}</Text>
							<Text note style={{fontFamily: this.state.fontBottomRightText, color: this.state.colorBottomRightText, textAlign: 'right', alignSelf: 'stretch'}}>{this.state.contentBottomRightText}</Text>
						</Right>
						:
						<Right style={{flex: 1, flexDirection: "column"}}>
							<Text style={{fontFamily: this.state.fontBottomRightTitle, color: this.state.colorBottomRightTitle, textAlign: 'right', alignSelf: 'stretch'}}>{this.state.contentBottomRightTitle}</Text>
							<Text note style={{fontFamily: this.state.fontBottomRightText, color: this.state.colorBottomRightText, textAlign: 'right', alignSelf: 'stretch'}}>{this.state.contentBottomRightText}</Text>
						</Right>;

		let emptySpace =
			<CardItem style={{borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: this.state.backgroundColorCard }}>
				<Body>
				</Body>
			</CardItem>;

		return (
			<View style={styles.container}>
				<View padder>
					<Card style={{borderRadius: 9}}>
						<CardItem header style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 9, borderTopRightRadius: 9,  backgroundColor: this.state.backgroundColorCard, flexDirection: "row"}}>
							{headerLeftContent}
							{headerRightContent}
						</CardItem>
						{emptySpace}
						{emptySpace}
						{emptySpace}
						{emptySpace}
						<CardItem footer style={{borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: this.state.backgroundColorCard }}>
							{BottomLeftCornerContent}
							{BottomRightCornerContent}
						</CardItem>
					</Card>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});