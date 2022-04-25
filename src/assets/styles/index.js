import { StyleSheet } from "react-native";

const COLOR = {
  mainColor: "#6c5ce7",
  textColor: "#333",
};

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  headerContainer: {
    height: 180,
    width: "100%",
    backgroundColor: COLOR.mainColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerImage: {
    height: 100,
    width: 100,
    borderRadius: 9999,
    backgroundColor: "#a29bfe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addingTaskContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15,
    alignItems: "center",
  },
  addingInput: {
    borderWidth: 0.95,
    borderRadius: 10,
    height: 40,
    flex: 1,
    paddingLeft: 15,
  },
  addingBtn: {
    marginLeft: 15,
  },
  addingBtnIcon: {
    width: 30,
    height: 30,
  },
  titleBodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleBodyText: {
    color: COLOR.mainColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  taskItem: {
    height: 50,
    width: "100%",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 0.75,
    borderRadius: 10,
  },
  taskName: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "600",
    color: COLOR.mainColor,
  },
  deleteBtn: {
    position: "absolute",
    top: '50%',
    right: 10,
    transform: [{translateY: -10}],
  },
  deleteBtnIcon: {
    width: 20,
    height: 20,
  },
});
