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
			GenericRoundedCardNormal: require("./../assets/fonts/SF-UI-Text-Regular.otf"),
			GenericRoundedCardLight: require("./../assets/fonts/SF-UI-Display-Ultralight.otf"),
			GenericRoundedCardBold: require("./../assets/fonts/SF-UI-Display-Bold.otf")
		});
		this.setState({
			loading: false,
		});
	}

	render() {
		const {
			backgroundColorCard,
			thumbnailTopLeftCorner,
			formatPictureTopLeftCorner,
			contentTopLeftCornerText,
			sizeTitleTopLeftCorner,
			fontTopLeftCornerTitle,
			colorTopLeftCornerTitle,
			contentTopLeftCornerTitle,
			sizeTextTopLeftCorner,
			fontTopLeftCornerText,
			colorTopLeftCornerText,
			thumbnailTopRightCorner,
			formatPictureTopRightCorner,
			contentTopRightCornerText,
			fontTopRightCornerTitle,
			colorTopRightCornerTitle,
			sizeTitleTopRightCorner,
			contentTopRightCornerTitle,
			fontTopRightCornerText,
			colorTopRightCornerText,
			sizeTextTopRightCorner,
			thumbnailBottomLeftCorner,
			formatPictureBottomLeft,
			contentBottomLeftText,
			fontBottomLeftTitle,
			colorBottomLeftTitle,
			contentBottomLeftTitle,
			fontBottomLeftText,
			colorBottomLeftText,
			thumbnailBottomRightCorner,
			formatPictureBottomRight,
			contentBottomRightText,
			fontBottomRightTitle,
			colorBottomRightTitle,
			contentBottomRightTitle,
			fontBottomRightText,
			colorBottomRightText
		} = this.props;

		if (this.state.loading) {
			return (
				<Root>
					<AppLoading
					/>
				</Root>
			);
		}

		if (backgroundColorCard === undefined) return ( <View> <Text>ERROR Background not found</Text> </View> );

		let headerLeftContent =
			thumbnailTopLeftCorner !== undefined && formatPictureTopLeftCorner === 'square'
				?
				<Left style={styles.leftSide}>
					<Thumbnail square source={{uri: thumbnailTopLeftCorner}} />
				</Left>
				:
				thumbnailTopLeftCorner !== undefined && formatPictureTopLeftCorner !== 'square'
					?
					<Left style={styles.leftSide}>
						<Thumbnail source={{uri: thumbnailTopLeftCorner}} />
					</Left>
					:
					contentTopLeftCornerText !== undefined
						?
						<Left style={styles.leftSide}>
							<Text style={{fontSize: sizeTitleTopLeftCorner, fontFamily: fontTopLeftCornerTitle, color: colorTopLeftCornerTitle, ...styles.textLeftSide}}>{contentTopLeftCornerTitle}</Text>
							<Text note style={{fontSize: sizeTextTopLeftCorner, fontFamily: fontTopLeftCornerText, color: colorTopLeftCornerText, ...styles.textLeftSide}}>{contentTopLeftCornerText}</Text>
						</Left>
						:
						<Left style={styles.leftSide}>
							<Text style={{fontSize: sizeTitleTopLeftCorner, fontFamily: fontTopLeftCornerTitle, color: colorTopLeftCornerTitle, ...styles.textLeftSide}}>{contentTopLeftCornerTitle}</Text>
						</Left> ;

		let headerRightContent =
			thumbnailTopRightCorner !== undefined && formatPictureTopRightCorner === 'square'
				?
				<Right style={styles.rightSide}>
					<Thumbnail square source={{uri: thumbnailTopRightCorner}} />
				</Right>
				:
				thumbnailTopRightCorner !== undefined && formatPictureTopRightCorner !== 'square'
					?
					<Right style={styles.rightSide}>
						<Thumbnail source={{uri: thumbnailTopRightCorner}} />
					</Right>
					:
					contentTopRightCornerText !== undefined
						?
						<Right style={styles.rightSide}>
							<Text style={{fontFamily: fontTopRightCornerTitle, color: colorTopRightCornerTitle, ...styles.textRightSide, fontSize: sizeTitleTopRightCorner}}>{contentTopRightCornerTitle}</Text>
							<Text note style={{fontFamily: fontTopRightCornerText, color: colorTopRightCornerText, ...styles.textRightSide, fontSize: sizeTextTopRightCorner}}>{contentTopRightCornerText}</Text>
						</Right>
						:
						<Right style={styles.rightSide}>
							<Text style={{fontFamily: fontTopRightCornerTitle, color: colorTopRightCornerTitle, ...styles.textRightSide, fontSize: sizeTitleTopRightCorner}}>{contentTopRightCornerTitle}</Text>
							<Text note style={{fontFamily: fontTopRightCornerText, color: colorTopRightCornerText, ...styles.textRightSide, fontSize: sizeTextTopRightCorner}}>{contentTopRightCornerText}</Text>
						</Right>;

		let BottomLeftCornerContent =
			thumbnailBottomLeftCorner !== undefined && formatPictureBottomLeft === 'square'
				?
				<Left style={styles.leftSide}>
					<Thumbnail square source={{uri: thumbnailBottomLeftCorner}} />
				</Left>
				:
				thumbnailBottomLeftCorner !== undefined && formatPictureBottomLeft !== 'square'
					?
					<Left style={styles.leftSide}>
						<Thumbnail source={{uri: thumbnailBottomLeftCorner}} />
					</Left>
					:
					contentBottomLeftText !== undefined
						?
						<Left style={styles.leftSide}>
							<Text style={{fontFamily: fontBottomLeftTitle, color: colorBottomLeftTitle, ...styles.textLeftSide}}>{contentBottomLeftTitle}</Text>
							<Text note style={{fontFamily: fontBottomLeftText, color: colorBottomLeftText, ...styles.textLeftSide}}>{contentBottomLeftText}</Text>
						</Left>
						:
						<Left style={styles.leftSide}>
							<Text style={{fontFamily: fontBottomLeftTitle, color: colorBottomLeftTitle, ...styles.textLeftSide}}>{contentBottomLeftTitle}</Text>
						</Left>;

		let BottomRightCornerContent =
			thumbnailBottomRightCorner !== undefined && formatPictureBottomRight === 'square'
				?
				<Right style={styles.rightSide}>
					<Thumbnail square source={{uri: thumbnailBottomRightCorner}} />
				</Right>
				:
				thumbnailBottomRightCorner !== undefined && formatPictureBottomRight !== 'square'
					?
					<Right style={styles.rightSide}>
						<Thumbnail source={{uri: thumbnailBottomRightCorner}} />
					</Right>
					:
					contentBottomRightText !== undefined
						?
						<Right style={styles.rightSide}>
							<Text style={{fontFamily: fontBottomRightTitle, color: colorBottomRightTitle, ...styles.textRightSide}}>{contentBottomRightTitle}</Text>
							<Text note style={{fontFamily: fontBottomRightText, color: colorBottomRightText, ...styles.textRightSide}}>{contentBottomRightText}</Text>
						</Right>
						:
						<Right style={styles.rightSide}>
							<Text style={{fontFamily: fontBottomRightTitle, color: colorBottomRightTitle, ...styles.textRightSide}}>{contentBottomRightTitle}</Text>
							<Text note style={{fontFamily: fontBottomRightText, color: colorBottomRightText, ...styles.textRightSide}}>{contentBottomRightText}</Text>
						</Right>;

		let emptySpace =
			<CardItem style={{backgroundColor: backgroundColorCard, ...styles.emptySpace }}>
				<Body>
				</Body>
			</CardItem>;

		return (
			<Card style={styles.card}>
				<CardItem header style={{ backgroundColor: backgroundColorCard, ...styles.header}}>
					{headerLeftContent}
					{headerRightContent}
				</CardItem>
				{emptySpace}
				{emptySpace}
				{emptySpace}
				{emptySpace}
				<CardItem footer style={{backgroundColor: backgroundColorCard, ...styles.bottom}}>
					{BottomLeftCornerContent}
					{BottomRightCornerContent}
				</CardItem>
			</Card>
		);
	}
}


const styles = StyleSheet.create({
	leftSide: {
		flex: 0,
		flexDirection: "column"
	},
	textLeftSide: {
		textAlign: 'left',
		alignSelf: 'stretch'
	},
	rightSide: {
		flex: 1,
		flexDirection: "column"
	},
	textRightSide: {
		flex: 1,
		flexDirection: "column"
	},
	emptySpace: {
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	card: {
		borderRadius: 9,
	},
	header: {
		borderBottomLeftRadius: 0, borderBottomRightRadius: 0, flexDirection: "row", borderTopLeftRadius: 9, borderTopRightRadius: 9,
	},
	bottom: {
		borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 0, borderTopRightRadius: 0,
	}
});


