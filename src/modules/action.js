import {
  errorMessage, inputName, inputScore, scoreTable,
} from './variables';

export default class NewScores {
  constructor(person, score) {
    this.person = person;
    this.score = score;
    this.scoreArray = JSON.parse(localStorage.getItem('scores')) || [];
    this.displayScores();
  }

    displayScores = () => {
      scoreTable.innerHTML = `
      ${this.scoreArray
        .map(
          (points) => `
          <div class="show-added-scores">
          <div class="user-input">
          <div class="input-div">
          <h3 class="input-value">${points.person}:</h3>
          <h3 class="input-value">${points.score}</h3>
          </div>
          </div>
          </div>
        `,
        )
        .join('')}
        `;
    }

    addScores = () => {
      if ((inputName.value === '') || (inputScore.value === '')) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        const newScore = new NewScores(inputName.value, inputScore.value);
        this.scoreArray.push(newScore);
        localStorage.setItem('scores', JSON.stringify(this.scoreArray));
        this.displayScores();
      }
    }

    refreshScores = (e) => {
      e.preventDefault();
      this.scoreArray = [];
      localStorage.setItem('scores', JSON.stringify(this.scoreArray));
      this.displayScores();
    }
}

export const scoreInput = new NewScores();