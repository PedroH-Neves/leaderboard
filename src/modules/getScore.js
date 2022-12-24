import showScores from './action';

const ID = 'Neves7';

const getScore = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`);
  const expect = await response.json();
  const scoreArr = expect.result;
  console.log(scoreArr);
  showScores(scoreArr);
};

export default getScore();