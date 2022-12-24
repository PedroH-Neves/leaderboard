import { scoreInput } from './modules/action';
import { refreshBtn, ScoreAdd } from './modules/variables';
import './style.css';

ScoreAdd.addEventListener('click', (e) => {
  e.preventDefault();
  scoreInput.addScores();
});

refreshBtn.addEventListener('click', (e) => {
  scoreInput.refreshScores(e);
});