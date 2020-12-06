import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import moment from "moment";

import CalendarStrip from "react-native-calendar-strip";

export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      formattedDate: "",
    };
  }

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
          <Text style={{ fontSize: 24 }}>
            Selected Date: {this.state.formattedDate}
          </Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={Style.subcards}></View>
          <View style={Style.subcards}></View>
          <View style={Style.subcards}></View>
          <View style={Style.subcards}></View>
        </View>
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
    height: Dimensions.get("window").height / 5.5,
    // width: Dimensions.get("window").width,
    marginHorizontal: 15,
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
    borderRadius: 5,
  },
  subcards: {
    marginTop: 20,
    height: Dimensions.get("window").height / 6,
    width: Dimensions.get("window").width / 2.4,
    marginHorizontal: 15,
    bottom: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 5,
    borderStartColor: "#7743CE",
    borderStartWidth: 4,
  },
});
