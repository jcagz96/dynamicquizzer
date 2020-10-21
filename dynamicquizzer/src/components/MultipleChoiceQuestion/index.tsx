import React, { useState } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBoxCustom from '../CheckBox';
import { Container } from './styles';

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
  question: 'Em que clubes jogou o CR7?',
  options: [
    {
      optionText: 'Manchester United',
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
    {
      optionText: 'Maritimo',
      correct: false,
      isChecked: false,
    },
  ],
};

const MultipleChoiceQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<Option[]>(options.options);

  function handleTouch(optionText: string): void {
    const idx = questions.findIndex(
      (question) => question.optionText === optionText,
    );

    const newQuestions: Option[] = [];

    if (idx > -1) {
      for (let i = 0; i < questions.length; i += 1) {
        if (i === idx && !questions[i].isChecked) {
          newQuestions[i] = {
            optionText: questions[i].optionText,
            correct: questions[i].correct,
            isChecked: true,
          };
        } else if (i === idx && questions[i].isChecked) {
          newQuestions[i] = {
            optionText: questions[i].optionText,
            correct: questions[i].correct,
            isChecked: false,
          };
        } else {
          newQuestions[i] = {
            optionText: questions[i].optionText,
            correct: questions[i].correct,
            isChecked: questions[i].isChecked,
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
          <CheckBoxCustom
            checked={question.isChecked}
            label={question.optionText}
          />
        </TouchableOpacity>
      ))}
    </>
  );
};

export default MultipleChoiceQuestion;
