import getScore from './getScore';
import { inputName, inputScore } from './variables';

const addNewScore = async (e) => {
  const user = inputName.value;
  const score = inputScore.value;
  const ID = 'Neves7';
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`,
    {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  e.target.reset();

  getScore();
};

export default addNewScore;