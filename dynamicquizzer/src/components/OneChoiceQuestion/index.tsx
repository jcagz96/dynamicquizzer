import React, { useState } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioButton from '../RadioButton';

interface Question {
  question: string;
  options: Option[];
}

interface Option {
  optionText: string;
  correct: boolean;
  isChecked: boolean;
}

const options: Question = {
  question: 'Qual é o melhor clube do mundo?',
  options: [
    {
      optionText: 'Benfica',
      correct: true,
      isChecked: true,
    },
    {
      optionText: 'Sporting',
      correct: false,
      isChecked: false,
    },
    {
      optionText: 'Porto',
      correct: false,
      isChecked: false,
    },
  ],
};

const OneChoiceQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<Option[]>([
    {
      optionText: 'Benfica',
      correct: true,
      isChecked: false,
    },
    {
      optionText: 'Sporting',
      correct: false,
      isChecked: false,
    },
    {
      optionText: 'Porto',
      correct: false,
      isChecked: true,
    },
  ]);

  function handleTouch(optionText: string): void {
    const idx = questions.findIndex(
      (question) => question.optionText === optionText,
    );

    const newQuestions: Option[] = [];

    if (idx > -1) {
      for (let i = 0; i < questions.length; i += 1) {
        if (i === idx) {
          newQuestions[i] = {
            optionText: questions[i].optionText,
            correct: questions[i].correct,
            isChecked: true,
          };
        } else {
          newQuestions[i] = {
            optionText: questions[i].optionText,
            correct: questions[i].correct,
            isChecked: false,
          };
        }
      }
    }

    setQuestions(newQuestions);
  }

  return (
    <>
      <Text>Qual é o melhor clube do mundo</Text>
      {questions.map((question) => (
        <TouchableOpacity
          key={question.optionText}
          onPress={() => {
            handleTouch(question.optionText);
          }}
        >
          <RadioButton
            checked={question.isChecked}
            label={question.optionText}
          />
        </TouchableOpacity>
      ))}
    </>
  );
};

export default OneChoiceQuestion;
