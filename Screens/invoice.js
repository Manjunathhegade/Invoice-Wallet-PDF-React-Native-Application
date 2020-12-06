import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialIcons";
import PDFReader from "rn-pdf-reader-js";
import Modal from "react-native-modal";

import CalendarStrip from "react-native-calendar-strip";

export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      formattedDate: "",
      click: false,
    };
  }

  onPdfClick = () => {
    this.setState({ click: true });
  };

  onClose = () => {
    this.setState({ click: false });
  };

  onDateSelected = (date) => {
    this.setState({
      formattedDate: date.format("DD-MM-YYYY"),
    });
  };

  render() {
    let datesWhitelist = [
      {
        start: moment(),
        end: moment().add(3, "days"), // total 4 days enabled
      },
    ];
    let datesBlacklist = [moment().add(1, "days")]; // 1 day disabled
    const PDF = (
      <View
        style={{
          flex: 1,
          overflow: "scroll",
        }}
      >
        <View>
          <Button title="Close" onPress={this.onClose} color="#7743CE" />
        </View>

        <PDFReader
          withPinchZoom={true}
          withScroll={true}
          useGoogleReader={true}
          source={{
            uri: "http://www.africau.edu/images/default/sample.pdf",
          }}
        />
      </View>
    );
    return (
      <View style={Style.mainDiv}>
        <CalendarStrip
          calendarAnimation={{ type: "sequence", duration: 10 }}
          daySelectionAnimation={{
            type: "border",
            duration: 10,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          scrollable={true}
          style={{
            height: 190,
            paddingTop: 20,
            paddingBottom: 10,
          }}
          dateNumberStyle="70"
          calendarHeaderStyle={{ color: "white", fontSize: 20 }}
          calendarColor={"#7743CE"}
          dateNumberStyle={{ color: "white", fontSize: 16 }}
          dateNameStyle={{ color: "white", fontSize: 13 }}
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          datesWhitelist={this.datesWhitelist}
          datesBlacklist={this.datesBlacklist}
          iconLeft={require("../img/left-arrow-black.png")}
          iconRight={require("../img/right-arrow-black.png")}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={(date) => this.onDateSelected(date)}
        />

        <View style={Style.maincard}>
          {/* <Text style={{ fontSize: 24 }}>
            Selected Date: {this.state.formattedDate}
          </Text> */}
          <View style={Style.subCard1}>
            <View style={Style.headingLine}>
              <View style={Style.invoiceTextContainer}>
                <Text style={Style.invoiceText}>INVOICE</Text>
              </View>
            </View>
            <View style={Style.subCard2}>
              <View style={Style.subCard2}>
                <View>
                  <Text style={Style.subCard2Text}>INVOICE NO#</Text>
                  <Text style={Style.subCard2TextData}>MEDQIN0001</Text>
                </View>
              </View>
              <View style={Style.subCard2}>
                <View>
                  <Text style={Style.subCard2Text}>DUE ON</Text>
                  <Text style={Style.subCard2TextData}>Jul 21, 2020 </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={Style.subCard3}>
            <View style={Style.subCard3Container}>
              <View style={Style.subCard3SubContainer}>
                <Text style={Style.subCard3Text}>BY ONLINE</Text>
                <Text style={Style.subCard3TextData}>₹ 34579/-</Text>
              </View>
              <View style={Style.subCard3SubContainer}>
                <Text style={Style.subCard3Text}>BY CASH</Text>
                <Text style={Style.subCard3TextData}>₹ 3790/-</Text>
              </View>
            </View>
          </View>
          <View style={Style.subCard4}>
            <View style={Style.subCard4Container}>
              <View style={Style.subCard4SubContainer}>
                <Text style={Style.subCard4Text}>STATUS</Text>
                <Text style={Style.subCard4TextData}>NOT PAID</Text>
              </View>
              <View style={Style.subCard4SubContainer}>
                <Text style={Style.subCard4Text}>DOWNLOAD</Text>
                <Text style={Style.subCard4Text}>
                  <Icon
                    name="get-app"
                    color="#000"
                    size={30}
                    style={{ marginTop: 15 }}
                  />
                </Text>
              </View>
            </View>
          </View>
          <View style={Style.subCard5}>
            <View style={Style.subCard5Container}>
              <View style={Style.subCard5SubContainer}>
                <Text style={Style.subCard5Text}>TOTOAL AMOUNT</Text>
                <Text style={Style.subCard5PriceText}>₹ 38,369/-</Text>
              </View>
            </View>
          </View>
          <View style={Style.button}>
            <Button title="View" color="#7743CE" onPress={this.onPdfClick} />
          </View>
        </View>
        <Modal
          // style={styles.newbookalert}
          swipeDirection="down"
          isVisible={this.state.click}
          //   style={styles.modal}
        >
          {PDF}
        </Modal>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  mainDiv: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    top: 30,
  },
  maincard: {
    height: Dimensions.get("window").height / 1.5,
    marginHorizontal: 30,
    bottom: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  button: {
    width: Dimensions.get("window").width / 2,
    // justifyContent: "flex-end",
    // top: 20,
    justifyContent: "center",
    bottom: 10,
    alignSelf: "center",
  },
  subCard1: {
    backgroundColor: "#f3f3f3",
    height: Dimensions.get("window").height / 4,
  },
  headingLine: {
    borderBottomWidth: 5,
    borderBottomColor: "#fff",
  },
  invoiceTextContainer: {
    height: 45,
    backgroundColor: "#fff",
    marginHorizontal: 80,
    borderRadius: 25,
    justifyContent: "center",
    top: 24,
  },
  invoiceText: {
    textAlign: "center",
    alignSelf: "center",
    color: "#949494",
    fontSize: 20,
    fontWeight: "bold",
  },
  subCard2: {
    flexDirection: "row",
    top: 15,
    marginHorizontal: 8,
    justifyContent: "space-between",
  },
  subCard2Text: {
    color: "#ABABAB",
    fontWeight: "bold",
    fontSize: 16,
  },
  subCard2TextData: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    top: 9,
  },
  subCard3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subCard3Container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subCard3SubContainer: {
    height: 95,
    width: Dimensions.get("window").width / 2.4,
    backgroundColor: "#fff",
    borderWidth: 3,
    top: 1,
    borderColor: "#F5F5F5",
  },
  subCard3Text: {
    textAlign: "center",
    alignSelf: "center",
    color: "#ABABAB",
    top: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  subCard3TextData: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    top: 19,
    alignSelf: "center",
  },
  subCard4: {
    backgroundColor: "#fff",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 4,
  },
  subCard4Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  subCard4SubContainer: {
    height: 100,
  },
  subCard4Text: {
    textAlign: "center",
    alignSelf: "center",
    color: "#ABABAB",
    top: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  subCard5: {
    backgroundColor: "#fff",
  },
  subCard5Container: {
    alignSelf: "center",
    // marginHorizontal: 60,
  },
  subCard5SubContainer: {
    height: 85,
    width: Dimensions.get("window").width / 2.4,
    backgroundColor: "#fff",
    top: 1,
  },
  subCard5Text: {
    textAlign: "center",
    alignSelf: "center",
    color: "#ABABAB",
    top: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  subCard5PriceText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    alignSelf: "center",
  },
  subCard4TextData: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    top: 20,
    alignSelf: "center",
  },
});
