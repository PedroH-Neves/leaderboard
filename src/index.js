import './style.css';
import { refreshBtn, submitForm } from './modules/variables';
import addNewScore from './modules/postScore';
import getScore from './modules/getScore';

submitForm.addEventListener('submit', addNewScore);

refreshBtn.addEventListener('click', getScore);