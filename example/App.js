import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {GenericRoundedCard} from "./components/genericRoundedCard";
import {Header, Text} from "react-native-elements"

export default function App() {
	return (
		<View style={styles.container}>
			<Header
				statusBarProps={{ barStyle: 'light-content' }}
				barStyle="light-content"
				centerComponent={<Text h3 style={{color: 'white', }}>{"Generic Card"}</Text>}
				containerStyle={{
					backgroundColor: "#282c34",
					justifyContent: 'space-around',
					height: "10%",
					borderBottomRightRadius: 60,
					borderBottomLeftRadius: 60,
				}}
			/>
			<ScrollView
			style={{marginBottom: 20}}>
				<GenericRoundedCard
					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={'Jean Dupont'}
					colorTopLeftCornerTitle={"white"}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'https://www.ameswessex.com/wp-content/uploads/2017/05/facebook-logo-png-white-i6-300x300.png'}
					formatPictureTopRightCorner={'square'}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"EMAIL"}
					contentBottomLeftText={'Jean-Dupont@gmail.com'}
					colorBottomLeftTitle={"white"}
					colorBottomLeftText={"white"}
					sizeTitleBottomLeft={16}
					sizeTextBottomLeft={16}

					thumbnailBottomRightCorner={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
					formatPictureBottomRight={'circle'}

					backgroundColorCard={"#3b5998"}
				/>
				<GenericRoundedCard
					fontBottomRightTitle={"SnapFont"}
					fontBottomRightText={"SnapFontLight"}
					contentBottomRightTitle={"Level"}
					contentBottomRightText={"4658"}
					sizeTitleBottomRight={28}
					sizeTextBottomRight={22}
					colorBottomRightTitle={"white"}
					colorBottomRightText={"white"}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"Email"}
					contentBottomLeftText={"Dona-Tor@gmail.com"}
					sizeTitleBottomLeft={28}
					sizeTextBottomLeft={22}
					colorBottomLeftTitle={'white'}
					colorBottomLeftText={'white'}

					thumbnailTopLeftCorner={'https://pe56d.s3.amazonaws.com/p18ld9bqdm1c4i1h2t1amo8fp7fs7.png'}
					formatPictureTopLeftCorner={'square'}

					fontTopRightCornerTitle={'SnapFontBold'}
					contentTopRightCornerTitle={"DONATOR St4ck"}
					sizeTitleTopRightCorner={30}
					colorTopRightCornerTitle={'white'}

					backgroundColorCard={"#171A21"}
				/>

				<GenericRoundedCard
					fontBottomRightTitle={"SnapFont"}
					fontBottomRightText={"SnapFontLight"}
					contentBottomRightTitle={"FOLLOWERS"}
					contentBottomRightText={"3500"}
					sizeTitleBottomRight={16}
					sizeTextBottomRight={16}
					colorBottomRightTitle={"#282c34"}
					colorBottomRightText={"#282c34"}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"FOLLOWING"}
					contentBottomLeftText={"1250"}
					colorBottomLeftTitle={"#282c34"}
					colorBottomLeftText={"#282c34"}
					sizeTitleBottomLeft={16}
					sizeTextBottomLeft={16}

					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={"Lola Dupont"}
					colorTopLeftCornerTitle={"#282c34"}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'https://i.pinimg.com/originals/ff/0e/20/ff0e20de4718fe14cdd256c81c5db771.png'}
					formatPictureTopRightCorner={'square'}

					backgroundColorCard={"white"}
				/>
				<GenericRoundedCard
					fontBottomRightTitle={"SnapFont"}
					fontBottomRightText={"SnapFontLight"}
					contentBottomRightTitle={"FOLLOWERS"}
					contentBottomRightText={"108 Millions"}
					sizeTitleBottomRight={16}
					sizeTextBottomRight={16}
					colorBottomRightTitle={"white"}
					colorBottomRightText={"white"}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"FOLLOWING"}
					contentBottomLeftText={"219"}
					colorBottomLeftTitle={"white"}
					colorBottomLeftText={"white"}
					sizeTitleBottomLeft={16}
					sizeTextBottomLeft={16}

					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={"Katy Perry"}
					colorTopLeftCornerTitle={"white"}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'http://univ-cotedazur.fr/contenus-riches/images/logos/logo-twitter-blanc/image'}
					formatPictureTopRightCorner={'square'}

					backgroundColorCard={"#38A1F3"}
				/>
				<GenericRoundedCard
					thumbnailBottomRightCorner={'https://resize-parismatch.lanmedia.fr/r/625,417,center-middle,ffffff/img/var/news/storage/images/paris-match/people/dwayne-the-rock-johnson-pere-feministe-1538654/25055048-1-fre-FR/Dwayne-The-Rock-Johnson-pere-feministe.jpg'}
					formatPictureBottomRight={'circle'}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"EMAIL"}
					contentBottomLeftText={'dwayne-johnson@theRock.com'}
					colorBottomLeftTitle={"white"}
					colorBottomLeftText={"white"}
					sizeTitleBottomLeft={16}
					sizeTextBottomLeft={16}

					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={'The Rock'}
					colorTopLeftCornerTitle={"white"}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'http://bullesdetalents.fr/site/wp-content/grand-media/image/picto_linkedin_blanc.png'}
					formatPictureTopRightCorner={'square'}

					backgroundColorCard={"#0077b5"}
				/>
				<GenericRoundedCard
					thumbnailBottomRightCorner={"https://www.thefamouspeople.com/profiles/images/vladimir-putin-4.jpg"}
					formatPictureBottomRight={'circle'}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"EMAIL"}
					contentBottomLeftText={"rizky@gmail.com"}
					colorBottomLeftTitle={"white"}
					colorBottomLeftText={"white"}
					sizeTitleBottomLeft={16}
					sizeTextBottomLeft={16}

					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={"Rizky Puchkov"}
					colorTopLeftCornerTitle={"white"}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'https://c.mobilegeeks.de/wp-content/uploads/2012/11/whatsapp_messenger.png'}
					formatPictureTopRightCorner={'square'}

					backgroundColorCard={"#25d366"}
				/>
				<GenericRoundedCard
					fontBottomRightTitle={"SnapFont"}
					fontBottomRightText={"SnapFontLight"}
					contentBottomRightTitle={"FOLLOWERS"}
					contentBottomRightText={"9500"}
					sizeTitleBottomRight={16}
					sizeTextBottomRight={16}
					colorBottomRightTitle={"#24292e"}
					colorBottomRightText={"#24292e"}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"STARS"}
					contentBottomLeftText={"150"}
					colorBottomLeftTitle={"#24292e"}
					colorBottomLeftText={"#24292e"}
					sizeTitleBottomLeft={16}
					sizeTextBottomLeft={16}

					thumbnailTopLeftCorner={'https://i.dlpng.com/static/png/4028151_preview.png'}
					formatPictureTopLeftCorner={'circle'}

					fontTopRightCornerTitle={'SnapFontBold'}
					contentTopRightCornerTitle={"Fabien Potencier"}
					sizeTitleTopRightCorner={32}
					colorTopRightCornerTitle={'#24292e'}

					backgroundColorCard={"white"}
				/>
				<GenericRoundedCard
					fontBottomRightTitle={"SnapFont"}
					fontBottomRightText={"SnapFontLight"}
					contentBottomRightTitle={"ISSUE DATE"}
					contentBottomRightText={"12/12/2020"}
					sizeTitleBottomRight={24}
					sizeTextBottomRight={18}
					colorBottomRightTitle={"white"}
					colorBottomRightText={"white"}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"MEMBERSHIP NO"}
					contentBottomLeftText={"12345566"}
					sizeTitleBottomLeft={24}
					sizeTextBottomLeft={18}
					colorBottomLeftTitle={'white'}
					colorBottomLeftText={'white'}

					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={"Health Fund"}
					colorTopLeftCornerTitle={'white'}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'http://crona.org/wp-content/themes/crona/images/medical-symbol.png'}
					formatPictureTopRightCorner={'square'}

					backgroundColorCard={"#438EFF"}
				/>
				<GenericRoundedCard
					fontBottomRightTitle={"SnapFont"}
					fontBottomRightText={"SnapFontLight"}
					contentBottomRightTitle={"SCORES"}
					contentBottomRightText={"2 millions"}
					sizeTitleBottomRight={24}
					sizeTextBottomRight={18}
					colorBottomRightTitle={"#24292e"}
					colorBottomRightText={"#24292e"}

					fontBottomLeftTitle={"SnapFont"}
					fontBottomLeftText={"SnapFontLight"}
					contentBottomLeftTitle={"EMAIL"}
					contentBottomLeftText={"DJ.Khaled@gmail.eu"}
					sizeTitleBottomLeft={24}
					sizeTextBottomLeft={18}
					colorBottomLeftTitle={'#24292e'}
					colorBottomLeftText={'#24292e'}

					fontTopLeftCornerTitle={"SnapFontBold"}
					contentTopLeftCornerTitle={"DJ Khaled"}
					colorTopLeftCornerTitle={'#24292e'}
					sizeTitleTopLeftCorner={32}

					thumbnailTopRightCorner={'https://waving.isc-assos.com/wp-content/uploads/2017/11/Snap-logo.png'}
					formatPictureTopRightCorner={'square'}

					backgroundColorCard={"yellow"}
				/>
				
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
