import { tableInfo } from './variables';

const showScores = (data) => {
  data.sort((a, b) => b.score - a.score);

  tableInfo.innerHTML = '';

  data.forEach((scoreList) => {
    const { user, score } = scoreList;

    const tr = document.createElement('tr');
    tableInfo.appendChild(tr);

    const username = document.createElement('td');
    username.innerHTML = `${user}`;
    username.classList.add('.td');
    tr.appendChild(username);

    const userscore = document.createElement('td');
    userscore.innerHTML = `${score}`;
    userscore.classList.add('.td');
    tr.appendChild(userscore);
  });
};

export default showScores;