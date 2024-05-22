import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import questions from "../questions.json";
import imageMapper from "../imageMapper";
import Checkbox from "expo-checkbox";

export default function AllQuestionsScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState({});
  const [image, setImage] = useState("");
  const [answerKeys, setAnswerKeys] = useState([]);
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [valid, setValid] = useState(false);

  const answerMapper = {
    Answer1: "a",
    Answer2: "b",
    Answer3: "c",
    Answer4: "d",
    Answer5: "e",
    Answer6: "f",
    Answer7: "g",
    Answer8: "h",
    Answer9: "i",
    Answer10: "j",
  };

  useEffect(() => {
    const currentQuestion = questions[index];
    if (typeof currentQuestion.Answer === "string") {
      currentQuestion.Answer = currentQuestion.Answer.split(",").map((item) =>
        item.trim()
      );
    }
    setQuestion(currentQuestion);
    setImage(imageMapper[currentQuestion.Image]);
    setAnswerKeys(
      Object.keys(currentQuestion).filter((key) => /^Answer\d+$/.test(key))
    );
    setCheckedAnswers({});
  }, [index]);

  const handleCheckboxChange = (answer, isChecked) => {
    setCheckedAnswers((prevState) => ({
      ...prevState,
      [answerMapper[answer]]: isChecked,
    }));
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const validateAnswer = () => {
    const allDesiredAreTrue = question.Answer.every(
      (answer) => checkedAnswers[answer] === true
    );

    const otherKeys = Object.keys(checkedAnswers).filter(
      (key) => !question.Answer.includes(key)
    );

    const allOthersAreFalseOrUndefined = otherKeys.every(
      (key) => !checkedAnswers[key]
    );

    return allDesiredAreTrue && allOthersAreFalseOrUndefined;
  };

  const handleAnswerPress = () => {
    setValid(validateAnswer());
    setCheckedAnswers({});
    setModalVisible(true);
  };

  return (
    <ScrollView style={tw`flex bg-white`}>
      <Image
        style={tw`h-12 w-10 mx-auto mt-10 `}
        source={require("../assets/uvt.png")}
      />
      <Text style={tw`text-black font-bold text-lg mt-10 p-3`}>
        {question.Category}
      </Text>
      <Text style={tw`text-black text-lg mx-auto p-3 pt-0`}>
        {index + 1}. {question.QuestionTitle}
      </Text>
      {question.Image && (
        <Image
          style={tw`h-50 w-80 mx-auto`}
          resizeMode='contain'
          source={image}
        />
      )}
      <View style={tw`mx-auto flex w-full mb-20 p-5`}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={tw`flex-1 items-center justify-center bg-black bg-opacity-50`}
          >
            <View style={tw`bg-white w-3/4 rounded-md p-4`}>
              {valid ? (
                <Text style={tw`text-black mx-auto text-2xl mb-20`}>
                  Corect!
                </Text>
              ) : (
                <View>
                  <Text style={tw`text-black mx-auto text-2xl mb-20`}>
                    Incorect!
                  </Text>
                  <Text style={tw`text-black mx-auto text-2xl mb-20`}>
                    Raspunsuri corecte :{" "}
                    {question.Answer &&
                      question.Answer.map((answer) => (
                        <Text key={answer}> {answer} </Text>
                      ))}{" "}
                  </Text>
                </View>
              )}
              {valid && (
                <TouchableOpacity
                  style={tw`bg-blue-500 mx-auto w-1/2 rounded-md p-2 mt-2`}
                  onPress={() => {
                    setModalVisible(false);
                    nextQuestion();
                  }}
                >
                  <Text style={tw`text-white`}>Next</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={tw`bg-gray-500 mx-auto w-1/2 text-md rounded-md p-2 mt-2`}
                onPress={() => setModalVisible(false)}
              >
                <Text style={tw`text-white`}>Închide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {answerKeys.map((answer) => (
          <View key={answer} style={tw`flex-1 flex-row p-6 pt-2`}>
            <Checkbox
              style={tw`rounded-md border-blue-500 w-6 h-6 mr-2`}
              value={checkedAnswers[answerMapper[answer]] || false}
              onValueChange={(isChecked) =>
                handleCheckboxChange(answer, isChecked)
              }
              color={
                checkedAnswers[answerMapper[answer]] ? "#3B82F6" : "#3B82F6"
              }
            />
            <Text
              style={tw`my-auto text-md`}
            >{`${answerMapper[answer]}) ${question[answer]}`}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={tw`mx-auto bg-blue-500 w-3/4 flex rounded-md p-2 mt-10`}
          onPress={() => {
            handleAnswerPress();
          }}
        >
          <Text style={tw`text-white text-lg mx-auto`}>Answer</Text>
        </TouchableOpacity>
        {index < questions.length - 1 && (
          <TouchableOpacity
            style={tw`mx-auto bg-blue-500 flex w-3/4 rounded-md p-2 mt-10`}
            onPress={() => {
              nextQuestion();
            }}
          >
            <Text style={tw`text-white text-lg mx-auto`}>Next</Text>
          </TouchableOpacity>
        )}
        {index > 0 && (
          <TouchableOpacity
            style={tw`mx-auto bg-gray-500 w-3/4 flex rounded-md p-2 mt-10`}
            onPress={() => {
              previousQuestion();
            }}
          >
            <Text style={tw`text-white text-lg mx-auto`}>Previous</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
