import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  all_content: {
    marginTop: -40,
    marginBottom: 50,
    paddingBottom: 70,
    flex: 1,
    paddingHorizontal: 10,
    maxHeight: 720,
    // height: '100%',
  },
  content_card_product: {
    paddingTop: 20,
  },
  list_product: {
    display: `flex`,
    flexDirection: `row`,
    flexWrap: 'wrap',
    justifyContent: `flex-start`,
    paddingTop: 20,
  },
  content_list_product: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    flexWrap: 'wrap',
  },
  text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 28,
    fontWeight: '900',
  },
  text_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 50,
  },
  content_pagination_all: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    paddingHorizontal: 30,
  },
});

export default styles;
